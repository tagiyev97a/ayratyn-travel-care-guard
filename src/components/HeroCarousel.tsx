import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import tourism from "@/assets/tourism.webp.asset.json";
import cleaning from "@/assets/cleaning.webp.asset.json";
import security from "@/assets/security.webp.asset.json";
import { services } from "@/lib/site";
import { ui, useLang } from "@/lib/i18n";

const imgs = [tourism.url, cleaning.url, security.url];

export function HeroCarousel() {
  const { t } = useLang();
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((x) => (x + 1) % services.length), 6000);
    return () => clearInterval(id);
  }, [i]);
  const go = (d: number) => setI((x) => (x + d + services.length) % services.length);

  return (
    <section className="relative h-[78vh] min-h-[520px] overflow-hidden bg-ink text-ink-foreground">
      {services.map((s, k) => (
        <div key={s.slug} className={`absolute inset-0 transition-opacity duration-1000 ${k === i ? "opacity-100" : "pointer-events-none opacity-0"}`} aria-hidden={k !== i}>
          <img src={imgs[k]} alt={t(s.name)} className={`h-full w-full object-cover transition-transform duration-[7000ms] ${k === i ? "scale-105" : "scale-100"}`} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, color-mix(in oklab, var(--ink) 88%, transparent), color-mix(in oklab, var(--ink) 50%, transparent) 55%, transparent)" }} />
          <div className="absolute inset-0 mx-auto flex max-w-6xl flex-col justify-end px-6 pb-24">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">{s.no} — {t(s.name)}</p>
            <h2 className="mt-4 max-w-3xl text-4xl font-medium leading-[1.05] md:text-7xl">{t(s.title)}</h2>
            <p className="mt-5 max-w-xl text-lg opacity-85">{t(s.short)}</p>
            <Link to={`/${s.slug}`} className="mt-8 inline-block w-fit bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-widest text-primary-foreground hover:bg-accent">
              {t(ui.more)}
            </Link>
          </div>
        </div>
      ))}
      <div className="absolute bottom-8 left-0 right-0 mx-auto flex max-w-6xl items-center justify-between px-6">
        <div className="flex gap-2">
          {services.map((s, k) => (
            <button key={s.slug} onClick={() => setI(k)} aria-label={t(s.name)} className={`h-1 transition-all ${k === i ? "w-12 bg-accent" : "w-6 bg-ink-foreground/40"}`} />
          ))}
        </div>
        <div className="flex gap-2">
          <button onClick={() => go(-1)} aria-label="Previous" className="h-11 w-11 border border-ink-foreground/40 hover:bg-ink-foreground/10">←</button>
          <button onClick={() => go(1)} aria-label="Next" className="h-11 w-11 border border-ink-foreground/40 hover:bg-ink-foreground/10">→</button>
        </div>
      </div>
    </section>
  );
}
