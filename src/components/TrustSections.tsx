import { useLang } from "@/lib/i18n";
import { certifications, clients } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { BadgeCheck, Mail, Phone, ArrowUpRight } from "lucide-react";

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
  const { lang, t } = useLang();
  const c = copy[lang];
  const airline = clients.find((client) => client.name.en === "Turkish Airlines");
  const badges = [airline?.logo, ...certifications.map((certificate) => certificate.badge)];
  return (
    <section className="border-b bg-logo-surface text-logo-foreground" aria-labelledby="credentials-title">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <h2 id="credentials-title" className="flex items-center gap-3 text-xl font-medium">
          <BadgeCheck className="size-6 shrink-0 text-primary" aria-hidden="true" />{c.credentials}
        </h2>
        <ul className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
          {c.items.map((item, index) => (
            <li key={item} className="flex items-center gap-4 border-t pt-5">
              {badges[index] && <img src={badges[index]} alt="" className="h-14 w-20 shrink-0 object-contain" />}
              <div className="min-w-0">
                <p className="text-sm font-semibold leading-6">{item}</p>
                {index > 0 && <p className="mt-1 text-xs leading-5 text-muted-foreground">{certifications[index - 1] ? t(certifications[index - 1]?.name ?? { tk: "", en: "", ru: "" }) : ""}</p>}
              </div>
            </li>
          ))}
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
