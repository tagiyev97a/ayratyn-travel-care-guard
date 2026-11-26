import { Link } from "@tanstack/react-router";
import { services, tel } from "@/lib/site";
import logo from "@/assets/logo_blue.svg.asset.json";
import { langs, useLang } from "@/lib/i18n";

export function SiteHeader() {
  const { t, lang, setLang } = useLang();
  return (
    <header className="border-b">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-5">
        <Link to="/" className="flex items-center gap-3 font-display text-xl font-medium tracking-wide"><img src={logo.url} alt="AÝRATYN HYZMAT" className="h-10 w-auto" />AÝRATYN HYZMAT</Link>
        <nav className="flex gap-6 text-sm font-semibold">
          {services.map((s) => (
            <Link key={s.slug} to={`/${s.slug}`} className="text-muted-foreground hover:text-foreground" activeProps={{ className: "text-primary" }}>
              {t(s.name)}
            </Link>
          ))}
        </nav>
        <div className="flex gap-1 text-xs font-semibold uppercase">
          {langs.map((l) => (
            <button key={l} onClick={() => setLang(l)} className={`px-2 py-1 ${l === lang ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}>{l}</button>
          ))}
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  const { t } = useLang();
  return (
    <footer className="border-t">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-14 md:grid-cols-4">
        <div>
          <img src={logo.url} alt="" className="mb-3 h-12 w-auto" />
          <p className="font-display text-xl">AÝRATYN HYZMAT</p>
          <a href="mailto:info@ayratyn-hyzmat.com" className="mt-2 block text-sm text-muted-foreground hover:text-primary">info@ayratyn-hyzmat.com</a>
        </div>
        {services.map((s) => (
          <div key={s.slug} className="text-sm">
            <p className="font-semibold">{t(s.name)}</p>
            <a href={tel(s.phone)} className="mt-1 block text-muted-foreground hover:text-primary">{s.phone}</a>
          </div>
        ))}
      </div>
    </footer>
  );
}
