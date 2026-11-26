import { Link } from "@tanstack/react-router";
import { useLang, ui } from "@/lib/i18n";
import agencyLogo from "@/assets/ayratyn-thy.png.asset.json";
import { Button } from "@/components/ui/button";
import { Mail, Phone, ArrowUpRight } from "lucide-react";

const copy = {
  tk: {
    credentials: "Ygtybar we standartlar",
    agentLabel: "Turkish Airlines ygtyýarly agentligi",
    agentText: "Uçar petekleri we sapar bronlary Turkish Airlines awiakompaniýasynyň ygtyýarly agentligi hökmünde düzülýär.",
    proposalTitle: "Korporatiw syýahat ýa-da hyzmat teklibi gerekmi?",
    proposalText: "Talabyňyzy bize iberiň. Toparymyz size laýyk çözgüdi taýýarlamak üçin habarlaşar.",
    email: "Teklip soraň",
    call: "Jaň ediň",
    travelTitle: "Syýahat hyzmatlarymyz",
    travelItems: ["Uçar petekleri", "Korporatiw saparlar", "Myhmanhana bronlamak", "Syýahat goldawy"],
  },
  en: {
    credentials: "Credentials & standards",
    agentLabel: "Turkish Airlines authorised agent",
    agentText: "Air tickets and trip bookings are issued as an authorised agent of Turkish Airlines.",
    proposalTitle: "Need a corporate travel or service proposal?",
    proposalText: "Send us your requirements. Our team will contact you with a solution tailored to your organisation.",
    email: "Request a proposal",
    call: "Call us",
    travelTitle: "Our travel services",
    travelItems: ["Air tickets", "Corporate travel", "Hotel reservations", "Travel support"],
  },
  ru: {
    credentials: "Статус и стандарты",
    agentLabel: "Официальный агент Turkish Airlines",
    agentText: "Авиабилеты и бронирования оформляются как официальным агентом авиакомпании Turkish Airlines.",
    proposalTitle: "Нужно предложение по корпоративным поездкам или услугам?",
    proposalText: "Отправьте нам свои требования. Команда свяжется с вами и предложит подходящее решение.",
    email: "Запросить предложение",
    call: "Позвонить",
    travelTitle: "Наши туристические услуги",
    travelItems: ["Авиабилеты", "Корпоративные поездки", "Бронирование отелей", "Поддержка в поездках"],
  },
};

export function AirlineAgentBand() {
  const { lang, t } = useLang();
  const c = copy[lang];
  return (
    <section className="border-y bg-logo-surface text-logo-foreground" aria-labelledby="agent-title">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-10 gap-y-6 px-6 py-9">
        <img src={agencyLogo.url} alt="AÝRATYN HYZMAT authorised agency — Turkish Airlines" loading="lazy" className="h-auto w-full max-w-lg shrink-0 object-contain" />
        <div className="min-w-0 max-w-md">
          <p id="agent-title" className="font-display text-2xl leading-tight md:text-3xl">{c.agentLabel}</p>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">{c.agentText}</p>
        </div>
        <Link to="/travel" className="ml-auto text-sm font-semibold uppercase tracking-widest text-primary hover:text-accent">
          {t(ui.more)}
        </Link>
      </div>
    </section>
  );
}

export function AirlineAgentPanel() {
  const { lang } = useLang();
  const c = copy[lang];
  return (
    <section className="border-y bg-logo-surface text-logo-foreground" aria-labelledby="agent-title">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-6 py-14 md:grid-cols-2 md:gap-12">
        <img src={agencyLogo.url} alt="AÝRATYN HYZMAT authorised agency — Turkish Airlines" loading="lazy" className="h-auto w-full max-w-xl object-contain" />
        <div>
          <h2 id="agent-title" className="font-display text-2xl leading-tight md:text-3xl">{c.agentLabel}</h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed">{c.agentText}</p>
        </div>
      </div>
    </section>
  );
}

export function ProposalCTA() {
  const { lang } = useLang();
  const c = copy[lang];
  return (
    <section className="border-b bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">AÝRATYN HYZMAT</p>
          <h2 className="mt-4 text-4xl font-medium leading-tight md:text-5xl">{c.proposalTitle}</h2>
          <p className="mt-5 max-w-2xl leading-relaxed opacity-85">{c.proposalText}</p>
        </div>
        <div className="flex flex-col justify-center gap-5 md:border-l md:border-ink-foreground/20 md:pl-10">
          <a href="mailto:info@ayratyn-hyzmat.com" className="flex items-start gap-3 text-sm hover:text-accent">
            <Mail className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" /><span className="break-all">info@ayratyn-hyzmat.com</span>
          </a>
          <a href="tel:+99312920510" className="flex items-center gap-3 text-lg hover:text-accent">
            <Phone className="size-5 shrink-0 text-accent" aria-hidden="true" />+993 12 92 05 10
          </a>
          <div className="mt-2 flex flex-wrap gap-3">
            <Button asChild size="lg" className="h-auto min-h-12 whitespace-normal bg-accent text-accent-foreground hover:bg-accent/90">
              <a href="mailto:info@ayratyn-hyzmat.com?subject=Corporate%20service%20proposal">{c.email}<ArrowUpRight aria-hidden="true" /></a>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-auto min-h-12 border-ink-foreground/40 bg-transparent text-ink-foreground hover:bg-ink-foreground/10 hover:text-ink-foreground">
              <a href="tel:+99312920510"><Phone aria-hidden="true" />{c.call}</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function TravelHighlights() {
  const { lang } = useLang();
  const c = copy[lang];
  return (
    <section className="border-y">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-medium md:text-4xl">{c.travelTitle}</h2>
        <ul className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {c.travelItems.map((item, i) => (
            <li key={item} className="border bg-card p-6">
              <span className="text-sm font-semibold text-accent">0{i + 1}</span>
              <p className="mt-3 font-display text-2xl leading-tight">{item}</p>
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="mailto:info@ayratyn-hyzmat.com?subject=Travel%20proposal" className="inline-flex items-center justify-center bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-widest text-primary-foreground hover:bg-accent">{c.email}</a>
          <a href="tel:+99312468404" className="inline-flex items-center justify-center border px-6 py-3 text-sm font-semibold uppercase tracking-widest hover:bg-secondary">{c.call}</a>
        </div>
      </div>
    </section>
  );
}
