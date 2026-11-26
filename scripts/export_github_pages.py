"""Snapshot the running site into static pages under docs/ for GitHub Pages.
Run with the dev server on :8080:  python3 scripts/export_github_pages.py"""
import asyncio, hashlib, os, re, shutil, urllib.parse, requests
from pathlib import Path
from bs4 import BeautifulSoup
from playwright.async_api import async_playwright

BASE = "http://localhost:8080"
OUT = Path(__file__).resolve().parent.parent / "docs"
ROUTES = ["", "travel", "cleaning", "security"]
LANGS = ["tk", "en", "ru"]
assets = {}  # remote url -> local name

def fetch_asset(url, ext_hint=""):
    full = urllib.parse.urljoin(BASE + "/", url)
    if full in assets: return assets[full]
    get = full + ("&" if "?" in full else "?") + "direct" if ext_hint == ".css" else full
    r = requests.get(get, timeout=60); r.raise_for_status()
    name = Path(urllib.parse.urlparse(full).path).name or "file"
    if "." not in name: name += ext_hint
    stem, ext = os.path.splitext(name)
    local = f"{stem}-{hashlib.md5(full.encode()).hexdigest()[:6]}{ext}"
    (OUT / "assets" / local).write_bytes(r.content)
    assets[full] = local
    return local

def page_path(lang, route):
    parts = ([] if lang == "tk" else [lang]) + ([route] if route else [])
    return "/".join(parts + ["index.html"])

def rel(from_page, target):
    depth = from_page.count("/")
    return "../" * depth + target

CAROUSEL_JS = """
(function(){var s=document.querySelector('main > section');if(!s)return;
var slides=[].slice.call(s.children).filter(function(e){return e.tagName==='DIV'&&e.querySelector('img')});
var bar=s.querySelector('div.absolute.bottom-8');if(!bar||!slides.length)return;
var dots=[].slice.call(bar.children[0].children),btns=bar.children[1].children,i=0,t;
function show(k){i=(k+slides.length)%slides.length;slides.forEach(function(d,n){var on=n===i;
d.classList.toggle('opacity-100',on);d.classList.toggle('opacity-0',!on);d.classList.toggle('pointer-events-none',!on);
d.setAttribute('aria-hidden',String(!on));var im=d.querySelector('img');im.classList.toggle('scale-105',on);im.classList.toggle('scale-100',!on);});
dots.forEach(function(b,n){var on=n===i;b.classList.toggle('w-12',on);b.classList.toggle('bg-accent',on);b.classList.toggle('w-6',!on);b.classList.toggle('bg-ink-foreground/40',!on);});
clearInterval(t);t=setInterval(function(){show(i+1)},6000);}
dots.forEach(function(b,n){b.onclick=function(){show(n)}});btns[0].onclick=function(){show(i-1)};btns[1].onclick=function(){show(i+1)};show(0);})();
"""

async def main():
    if OUT.exists(): shutil.rmtree(OUT)
    (OUT / "assets").mkdir(parents=True)
    (OUT / "assets" / "carousel.js").write_text(CAROUSEL_JS)
    (OUT / ".nojekyll").write_text("")
    async with async_playwright() as p:
        b = await p.chromium.launch(headless=True)
        for lang in LANGS:
            ctx = await b.new_context()
            await ctx.add_init_script(f"try{{if(location.origin==='{BASE}')localStorage.setItem('lang','{lang}')}}catch(e){{}}")
            pg = await ctx.new_page()
            for route in ROUTES:
                await pg.goto(f"{BASE}/{route}", wait_until="networkidle")
                await pg.wait_for_timeout(800)
                html = await pg.content()
                me = page_path(lang, route)
                soup = BeautifulSoup(html, "lxml")
                for tag in soup.find_all(["script", "noscript"]): tag.decompose()
                for l in soup.find_all("link"):
                    relv = " ".join(l.get("rel", []))
                    href = l.get("href", "")
                    if "modulepreload" in relv or "preload" in relv: l.decompose(); continue
                    if href.startswith("/") and not href.startswith("//"):
                        ext = ".css" if "stylesheet" in relv else ""
                        l["href"] = rel(me, "assets/" + fetch_asset(href, ext))
                for st in soup.find_all("style"):
                    if st.get("data-vite-dev-id") is not None:
                        st.attrs = {}
                for im in soup.find_all("img"):
                    src = im.get("src", "")
                    if src.startswith("/"): im["src"] = rel(me, "assets/" + fetch_asset(src))
                for a in soup.find_all("a"):
                    h = a.get("href", "")
                    if h.startswith("/") and not h.startswith("//"):
                        r = h.strip("/").split("#")[0]
                        if r in ROUTES: a["href"] = rel(me, page_path(lang, r).replace("index.html", "") or "./") or "./"
                # language buttons -> links to same page in other language
                for btn in soup.find_all("button"):
                    txt = btn.get_text(strip=True).lower()
                    if txt in LANGS and btn.find_parent("header"):
                        btn.name = "a"; btn["href"] = rel(me, page_path(txt, route).replace("index.html", "")) or "./"
                        btn.attrs.pop("type", None)
                soup.html["lang"] = lang
                if route == "":
                    s = soup.new_tag("script", src=rel(me, "assets/carousel.js")); soup.body.append(s)
                out = OUT / me; out.parent.mkdir(parents=True, exist_ok=True)
                out.write_text("<!DOCTYPE html>\n" + str(soup).replace("<!DOCTYPE html>", ""))
                print("wrote", me)
            await ctx.close()
        await b.close()
    # Rewrite root-absolute url() inside CSS files
    for css in (OUT / "assets").glob("*.css"):
        t = css.read_text()
        t = re.sub(r"url\((['\"]?)(/[^)'\"]+)\1\)", lambda m: f"url({m.group(1)}{fetch_asset(m.group(2))}{m.group(1)})", t)
        css.write_text(t)
    (OUT / "404.html").write_text((OUT / "index.html").read_text())

asyncio.run(main())
