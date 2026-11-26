import { createFileRoute, Link } from "@tanstack/react-router";
import { clients, services, tel } from "@/lib/site";

const desc = "Syýahatçylyk, arassaçylyk we gorag hyzmatlary. Turkish Airlines awiakompaniýasynyň ygtyýarly agentligi.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AÝRATYN HYZMAT — Syýahatçylyk, arassaçylyk we gorag" },
      { name: "description", content: desc },
      { property: "og:title", content: "AÝRATYN HYZMAT" },
      { property: "og:description", content: desc },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <section className="mx-auto max-w-6xl px-6 pb-24 pt-16 md:pt-28">
        <p className="rise text-sm font-semibold uppercase tracking-[0.2em] text-accent">Aşgabat · Türkmenistan</p>
        <h1 className="rise mt-6 max-w-5xl text-5xl font-medium leading-[1.02] md:text-8xl">
          Syýahatçylyk, arassaçylyk <em className="text-primary">we</em> gorag hyzmatlary
        </h1>
        <p className="mt-10 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Şahsy we korporatiw müşderiler üçin uçar petekleri, myhmanhana bronlamak we syýahat goldawy.
          Kärhanalar we edaralar üçin arassaçylyk we gorag hyzmatlary.
        </p>
      </section>

      <section className="border-y">
        <div className="mx-auto max-w-6xl">
          {services.map((s) => (
            <div key={s.slug} className="grid gap-6 border-b px-6 py-12 last:border-b-0 md:grid-cols-[80px_1fr_1fr_auto] md:items-baseline">
              <span className="font-display text-xl text-accent">{s.no}</span>
              <h2 className="text-4xl font-medium md:text-5xl">{s.name}</h2>
              <div className="space-y-2 text-muted-foreground">
                <p>{s.short}</p>
                {s.note && <p className="text-sm text-foreground">{s.note}</p>}
                <p className="pt-2 text-sm">
                  <a className="font-semibold text-foreground hover:text-primary" href={tel(s.phone)}>{s.phone}</a>
                  {s.email && <> · <a className="hover:text-primary" href={`mailto:${s.email}`}>{s.email}</a></>}
                </p>
              </div>
              <Link to={`/${s.slug}`} className="text-sm font-semibold uppercase tracking-widest text-primary hover:text-accent">
                Hyzmat barada →
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ink text-ink-foreground">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-sm font-sans font-semibold uppercase tracking-[0.2em] opacity-70">Biziň bilen işleýän guramalar</h2>
          <ul className="mt-8 grid gap-6 md:grid-cols-3">
            {clients.map((c) => (
              <li key={c} className="border-t border-ink-foreground/20 pt-5 font-display text-2xl">{c}</li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
