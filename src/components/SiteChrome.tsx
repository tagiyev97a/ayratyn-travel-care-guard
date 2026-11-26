import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { services, tel } from "@/lib/site";
import { PatternField } from "@/components/TurkmenPattern";
import logo from "@/assets/logo_blue.svg.asset.json";
import { langs, ui, useLang } from "@/lib/i18n";

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
    <footer className="border-t bg-secondary">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 py-14 md:grid-cols-[1.1fr_1fr_1fr] md:gap-10 md:py-20">
          <div>
            <Link to="/" className="inline-flex items-center gap-4">
              <img src={logo.url} alt="" className="h-16 w-auto shrink-0" />
              <span className="font-display text-2xl leading-tight">AÝRATYN<br />HYZMAT</span>
            </Link>
            <p className="mt-6 max-w-64 text-sm leading-7 text-muted-foreground">
              {t(ui.heroA)} {t(ui.heroAnd)} {t(ui.heroB)}
            </p>
          </div>
          <div>
            <h2 className="font-sans text-sm font-semibold uppercase tracking-widest">{t(ui.services)}</h2>
            <nav aria-label={t(ui.services)} className="mt-5 divide-y divide-border">
              {services.map((s) => (
                <div key={s.slug} className="py-3 first:pt-0 last:pb-0">
                  <Link to={`/${s.slug}`} className="group flex items-center justify-between gap-3 text-base font-semibold hover:text-primary">
                    {t(s.name)}
                    <ArrowUpRight aria-hidden="true" className="size-4 shrink-0 text-muted-foreground group-hover:text-primary" />
                  </Link>
                  <a href={tel(s.phone)} className="mt-2 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
                    <Phone aria-hidden="true" className="size-3.5 shrink-0" />{s.phone}
                  </a>
                </div>
              ))}
            </nav>
          </div>
          <div>
            <h2 className="font-sans text-sm font-semibold uppercase tracking-widest">{t(ui.contact)}</h2>
            <a href="mailto:info@ayratyn-hyzmat.com" className="mt-5 flex items-start gap-3 text-sm font-semibold leading-6 hover:text-primary">
              <Mail aria-hidden="true" className="mt-1 size-4 shrink-0" />
              <span className="min-w-0 break-words">info@ayratyn-hyzmat.com</span>
            </a>
            <p className="mt-5 flex items-start gap-3 text-sm leading-6 text-muted-foreground">
              <MapPin aria-hidden="true" className="mt-1 size-4 shrink-0" />
              {t(ui.city)}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3 border-t py-6 text-xs leading-5 text-muted-foreground">
          <p>© AÝRATYN HYZMAT. {t(ui.rights)}</p>
          <Link to="/" className="hover:text-primary">ayratyn-hyzmat.com <ArrowUpRight aria-hidden="true" className="ml-1 inline size-3.5" /></Link>
        </div>
      </div>
      <div className="border-t border-primary bg-primary text-primary-foreground" aria-hidden="true">
        <PatternField className="block h-16 w-full opacity-25" />
      </div>
    </footer>
  );
}
