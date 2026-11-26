import { useLang } from "@/lib/i18n";

const copy = {
  tk: {
    credentials: "Ygtybar we standartlar",
    items: [
      "Turkish Airlines ygtyýarly agenti",
      "ISO 9001:2015",
      "ISO 45001:2018",
      "IRATA şahadatnamaly işgärler",
    ],
    proposalTitle: "Korporatiw syýahat ýa-da hyzmat teklibi gerekmi?",
    proposalText: "Talabyňyzy bize iberiň. Toparymyz size laýyk çözgüdi taýýarlamak üçin habarlaşar.",
    email: "Teklip soraň",
    call: "Jaň ediň",
    travelTitle: "Syýahat hyzmatlarymyz",
    travelItems: ["Uçar petekleri", "Korporatiw saparlar", "Myhmanhana bronlamak", "Syýahat goldawy"],
  },
  en: {
    credentials: "Credentials & standards",
    items: [
      "Turkish Airlines authorised agent",
      "ISO 9001:2015",
      "ISO 45001:2018",
      "IRATA-certified technicians",
    ],
    proposalTitle: "Need a corporate travel or service proposal?",
    proposalText: "Send us your requirements. Our team will contact you with a solution tailored to your organisation.",
    email: "Request a proposal",
    call: "Call us",
    travelTitle: "Our travel services",
    travelItems: ["Air tickets", "Corporate travel", "Hotel reservations", "Travel support"],
  },
  ru: {
    credentials: "Статус и стандарты",
    items: [
      "Официальный агент Turkish Airlines",
      "ISO 9001:2015",
      "ISO 45001:2018",
      "Специалисты с сертификатами IRATA",
    ],
    proposalTitle: "Нужно предложение по корпоративным поездкам или услугам?",
    proposalText: "Отправьте нам свои требования. Команда свяжется с вами и предложит подходящее решение.",
    email: "Запросить предложение",
    call: "Позвонить",
    travelTitle: "Наши туристические услуги",
    travelItems: ["Авиабилеты", "Корпоративные поездки", "Бронирование отелей", "Поддержка в поездках"],
  },
};

export function CredentialsStrip() {
  const { lang } = useLang();
  const c = copy[lang];
  return (
    <section className="border-b bg-logo-surface text-logo-foreground" aria-labelledby="credentials-title">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <p id="credentials-title" className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">{c.credentials}</p>
        <ul className="mt-6 grid gap-px border sm:grid-cols-2 md:grid-cols-4">
          {c.items.map((item) => <li key={item} className="bg-card p-6 font-semibold leading-6">{item}</li>)}
        </ul>
      </div>
    </section>
  );
}

export function ProposalCTA() {
  const { lang } = useLang();
  const c = copy[lang];
  return (
    <section className="border-b bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1.4fr_1fr] md:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">AÝRATYN HYZMAT</p>
          <h2 className="mt-4 text-4xl font-medium leading-tight md:text-5xl">{c.proposalTitle}</h2>
          <p className="mt-5 max-w-2xl leading-relaxed opacity-80">{c.proposalText}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a href="mailto:info@ayratyn-hyzmat.com?subject=Corporate%20service%20proposal" className="inline-flex items-center justify-center bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-widest text-primary-foreground hover:bg-accent">{c.email}</a>
          <a href="tel:+99312920510" className="inline-flex items-center justify-center border border-ink-foreground/40 px-6 py-3 text-sm font-semibold uppercase tracking-widest hover:bg-ink-foreground/10">{c.call}</a>
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
      <div className="mx-auto max-w-6xl px-6 py-16">
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
