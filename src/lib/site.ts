import type { T } from "./i18n";
import turkmenistanAirlines from "@/assets/turkmenistan-airlines.webp.asset.json";
import belavia from "@/assets/belavia.webp.asset.json";
import bouygues from "@/assets/bouygues.webp.asset.json";
import turkishAirlines from "@/assets/turkish-airlines.webp.asset.json";
import eni from "@/assets/eni.webp.asset.json";
import gapInsaat from "@/assets/gap-insaat.webp.asset.json";
import daewoo from "@/assets/daewoo.webp.asset.json";
import ronesans from "@/assets/ronesans.webp.asset.json";
import irata from "@/assets/irata.png.asset.json";
import iso9001 from "@/assets/iso-9001.png.asset.json";
import iso45001 from "@/assets/iso-45001.png.asset.json";

export type Service = {
  slug: "travel" | "cleaning" | "security";
  no: string;
  name: T;
  title: T;
  short: T;
  long: T;
  note?: T;
  phone: string;
  email?: string;
  badge?: string;
};

export const services: Service[] = [
  {
    slug: "travel",
    no: "01",
    name: { tk: "Syýahatçylyk", en: "Travel", ru: "Туризм" },
    title: { tk: "Uçar petekleri we syýahat goldawy", en: "Air tickets and travel support", ru: "Авиабилеты и поддержка в поездках" },
    short: { tk: "Uçar petekleri, myhmanhana bronlamak we syýahat goldawy.", en: "Air tickets, hotel booking and travel support.", ru: "Авиабилеты, бронирование отелей и поддержка в поездках." },
    long: {
      tk: "Şahsy we iş saparlary üçin uçar petekleri, myhmanhana bronlamak we sapary meýilleşdirmek boýunça kömek edýäris.",
      en: "We help with air tickets, hotel booking and trip planning for private and business travel.",
      ru: "Помогаем с авиабилетами, бронированием отелей и планированием личных и деловых поездок.",
    },
    note: { tk: "Turkish Airlines awiakompaniýasynyň ygtyýarly agentligi.", en: "Authorised agent of Turkish Airlines.", ru: "Официальный агент авиакомпании Turkish Airlines." },
    phone: "+993 12 46 84 04",
    email: "info@ayratyn-hyzmat.com",
  },
  {
    slug: "cleaning",
    no: "02",
    name: { tk: "Arassaçylyk", en: "Cleaning", ru: "Клининг" },
    title: { tk: "Jaýlaryň we fasadlaryň arassalanyşy", en: "Interior and facade cleaning", ru: "Уборка помещений и фасадов" },
    short: { tk: "Binalaryň içini we daşky ýüzüni arassalamak.", en: "Cleaning of building interiors and facades.", ru: "Уборка внутри зданий и мойка фасадов." },
    long: {
      tk: "Kärhanalar we edaralar üçin jaýlaryň içini hem-de binalaryň daşky ýüzüni arassalaýarys.",
      en: "We clean building interiors and facades for companies and organisations.",
      ru: "Убираем помещения и моем фасады зданий для предприятий и организаций.",
    },
    note: {
      tk: "Daşky ýüzleri arassalaýan toparymyzda IRATA şahadatnamaly işgärler bar.",
      en: "Our facade team includes IRATA-certified technicians.",
      ru: "В нашей команде по фасадам работают специалисты с сертификатом IRATA.",
    },
    badge: irata.url,
    phone: "+993 12 92 19 80",
  },
  {
    slug: "security",
    no: "03",
    name: { tk: "Gorag", en: "Security", ru: "Охрана" },
    title: { tk: "Kärhanalar we edaralar üçin gorag", en: "Security for companies and organisations", ru: "Охрана предприятий и организаций" },
    short: { tk: "Kärhanalar we edaralar üçin gorag hyzmatlary.", en: "Security services for companies and organisations.", ru: "Охранные услуги для предприятий и организаций." },
    long: {
      tk: "Gorag hyzmatlary barada maglumat almak we zerurlyklaryňyzy ara alyp maslahatlaşmak üçin baş edaramyz bilen habarlaşyň.",
      en: "Contact our head office to learn about our security services and discuss your needs.",
      ru: "Свяжитесь с нашим главным офисом, чтобы узнать об охранных услугах и обсудить ваши задачи.",
    },
    phone: "+993 12 92 05 10",
    email: "info@ayratyn-hyzmat.com",
  },
];

export const clients: { name: T; logo?: string }[] = [
  { name: { tk: "Turkish Airlines", en: "Turkish Airlines", ru: "Turkish Airlines" }, logo: turkishAirlines.url },
  { name: { tk: "Turkmenistan Airlines", en: "Turkmenistan Airlines", ru: "Turkmenistan Airlines" }, logo: turkmenistanAirlines.url },
  { name: { tk: "Belavia", en: "Belavia", ru: "Belavia" }, logo: belavia.url },
  { name: { tk: "Daewoo E&C", en: "Daewoo E&C", ru: "Daewoo E&C" }, logo: daewoo.url },
  { name: { tk: "Bouygues", en: "Bouygues", ru: "Bouygues" }, logo: bouygues.url },
  { name: { tk: "Eni", en: "Eni", ru: "Eni" }, logo: eni.url },
  { name: { tk: "GAP İnşaat", en: "GAP İnşaat", ru: "GAP İnşaat" }, logo: gapInsaat.url },
  { name: { tk: "Rönesans Holding", en: "Rönesans Holding", ru: "Rönesans Holding" }, logo: ronesans.url },
];

export const certifications: { code: string; badge: string; name: T; note: T; pill?: T }[] = [
  {
    code: "ISO 9001:2015",
    badge: iso9001.url,
    name: { tk: "Hil dolandyş ulgamy", en: "Quality management system", ru: "Система менеджмента качества" },
    note: {
      tk: "Hyzmatlarymyzyň hiliniň yzygiderli gözegçilikde saklanýandygyny tassyklaýar.",
      en: "Confirms that the quality of our services is kept under continuous control.",
      ru: "Подтверждает, что качество наших услуг постоянно контролируется.",
    },
  },
  {
    code: "ISO 45001:2018",
    badge: iso45001.url,
    name: {
      tk: "Iş howpsuzlygy we saglyk dolandyş ulgamy",
      en: "Occupational health and safety management system",
      ru: "Система менеджмента охраны труда и безопасности",
    },
    note: {
      tk: "Işgärlerimiziň howpsuzlygy we saglygy üçin jogapkär çäreleri görýäris.",
      en: "We take responsibility for the safety and health of our staff.",
      ru: "Мы несём ответственность за безопасность и здоровье наших сотрудников.",
    },
  },
  {
    code: "IRATA",
    badge: irata.url,
    name: {
      tk: "Industrial Rope Access Trade Association",
      en: "Industrial Rope Access Trade Association",
      ru: "Industrial Rope Access Trade Association",
    },
    note: {
      tk: "Daşky ýüzleri arassalaýan toparymyzyň işgärleri IRATA şahadatnamasyna eýe.",
      en: "The technicians on our facade cleaning team hold IRATA certificates.",
      ru: "Специалисты нашей команды по мойке фасадов имеют сертификаты IRATA.",
    },
    pill: {
      tk: "Işgärler şahadatnamaly",
      en: "Staff certified",
      ru: "Сотрудники сертифицированы",
    },
  },
];

export const tel = (p: string) => `tel:${p.replace(/\s/g, "")}`;
