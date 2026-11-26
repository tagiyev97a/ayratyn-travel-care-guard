import { Link } from "@tanstack/react-router";
import { useLang, ui } from "@/lib/i18n";
import { services, tel, type Service } from "@/lib/site";

export function ServicePage({ s }: { s: Service }) {
  const { t } = useLang();
  const others = services.filter((o) => o.slug !== s.slug);
  return (
    <main>
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-16 md:pt-24">
        <p className="rise text-sm font-semibold uppercase tracking-[0.2em] text-accent">
          {s.no} — {t(s.name)}
        </p>
        <h1 className="rise mt-6 max-w-4xl text-5xl font-medium leading-[1.05] md:text-7xl">{t(s.title)}</h1>
        <div className="mt-12 grid gap-12 md:grid-cols-[1.4fr_1fr]">
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>{t(s.long)}</p>
            {s.note && (
              <div className="flex items-center gap-5 border-l-2 border-accent pl-5">
                {s.badge && (
                  <div className="flex size-20 shrink-0 items-center justify-center border bg-logo-surface p-2.5">
                    <img src={s.badge} alt="IRATA" loading="lazy" className="h-full w-full object-contain" />
                  </div>
                )}
                <p className="text-foreground">{t(s.note)}</p>
              </div>
            )}
          </div>
          <div className="bg-ink p-8 text-ink-foreground">
            <p className="text-sm uppercase tracking-[0.2em] opacity-70">{t(ui.contact)}</p>
            <a href={tel(s.phone)} className="mt-4 block font-display text-3xl hover:text-accent">{s.phone}</a>
            {s.email && <a href={`mailto:${s.email}`} className="mt-3 block text-lg hover:text-accent">{s.email}</a>}
          </div>
        </div>
      </section>
      <section className="border-t">
        <div className="mx-auto grid max-w-6xl gap-px md:grid-cols-2">
          {others.map((o) => (
            <Link key={o.slug} to={`/${o.slug}`} className="group px-6 py-10 transition-colors hover:bg-secondary">
              <span className="text-sm text-muted-foreground">{t(ui.other)} · {o.no}</span>
              <span className="mt-2 block font-display text-3xl group-hover:text-primary">{t(o.name)} →</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
