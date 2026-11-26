import { createFileRoute, Link } from "@tanstack/react-router";
import { HeroCarousel } from "@/components/HeroCarousel";
import { ui, useLang } from "@/lib/i18n";
import { clients, services, tel } from "@/lib/site";

const desc = "Syýahatçylyk, arassaçylyk we gorag hyzmatlary. Turkish Airlines awiakompaniýasynyň ygtyýarly agentligi.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AÝRATYN HYZMAT — Syýahatçylyk, arassaçylyk we gorag" },
      { name: "description", content: desc },
      { property: "og:title", content: "AÝRATYN HYZMAT" },
      { property: "og:description", content: desc },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const { t } = useLang();
  return (
    <main>
      <HeroCarousel />
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <p className="rise text-sm font-semibold uppercase tracking-[0.2em] text-accent">{t(ui.city)}</p>
        <h1 className="rise mt-6 max-w-5xl text-5xl font-medium leading-[1.02] md:text-7xl">
          {t(ui.heroA)} <em className="text-primary">{t(ui.heroAnd)}</em> {t(ui.heroB)}
        </h1>
        <p className="mt-10 max-w-2xl text-lg leading-relaxed text-muted-foreground">{t(ui.intro)}</p>
      </section>

      <section className="border-y">
        <div className="mx-auto max-w-6xl">
          {services.map((s) => (
            <div key={s.slug} className="grid gap-6 border-b px-6 py-12 last:border-b-0 md:grid-cols-[80px_1fr_1fr_auto] md:items-baseline">
              <span className="font-display text-xl text-accent">{s.no}</span>
              <h2 className="text-4xl font-medium md:text-5xl">{t(s.name)}</h2>
              <div className="space-y-2 text-muted-foreground">
                <p>{t(s.short)}</p>
                {s.note && <p className="text-sm text-foreground">{t(s.note)}</p>}
                <p className="pt-2 text-sm">
                  <a className="font-semibold text-foreground hover:text-primary" href={tel(s.phone)}>{s.phone}</a>
                  {s.email && <> · <a className="hover:text-primary" href={`mailto:${s.email}`}>{s.email}</a></>}
                </p>
              </div>
              <Link to={`/${s.slug}`} className="text-sm font-semibold uppercase tracking-widest text-primary hover:text-accent">
                {t(ui.more)}
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="border-b bg-logo-surface text-logo-foreground" aria-labelledby="clients-title">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 id="clients-title" className="text-3xl font-medium md:text-4xl">{t(ui.clients)}</h2>
          <ul className="mt-10 grid grid-cols-2 gap-x-6 sm:grid-cols-3 md:grid-cols-4 md:gap-x-10">
            {clients.map((c) => (
              <li key={c.name.en} className={c.logo ? "flex h-36 items-center justify-center border-b px-4 py-8 md:h-44" : "col-span-2 pt-8 text-sm text-center sm:col-span-3 md:col-span-4"}>
                {c.logo ? (
                  <img src={c.logo} alt={t(c.name)} title={t(c.name)} loading="lazy" className="h-full max-h-20 w-full max-w-48 object-contain md:max-h-24" />
                ) : t(c.name)}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
