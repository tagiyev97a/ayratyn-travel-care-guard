import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "tk" | "en" | "ru";
export const langs: Lang[] = ["tk", "en", "ru"];
export type T = Record<Lang, string>;

const Ctx = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({ lang: "tk", setLang: () => {} });

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("tk");
  useEffect(() => {
    const s = localStorage.getItem("lang") as Lang | null;
    if (s && langs.includes(s)) setLangState(s);
  }, []);
  useEffect(() => { document.documentElement.lang = lang; }, [lang]);
  const setLang = (l: Lang) => { setLangState(l); localStorage.setItem("lang", l); };
  return <Ctx.Provider value={{ lang, setLang }}>{children}</Ctx.Provider>;
}

export function useLang() {
  const c = useContext(Ctx);
  return { ...c, t: (x: T) => x[c.lang] };
}

export const ui = {
  city: { tk: "Aşgabat · Türkmenistan", en: "Ashgabat · Turkmenistan", ru: "Ашхабад · Туркменистан" },
  heroA: { tk: "Syýahatçylyk, arassaçylyk", en: "Travel, cleaning", ru: "Туризм, клининг" },
  heroAnd: { tk: "we", en: "and", ru: "и" },
  heroB: { tk: "gorag hyzmatlary", en: "security services", ru: "охранные услуги" },
  intro: {
    tk: "Şahsy we korporatiw müşderiler üçin uçar petekleri, myhmanhana bronlamak we syýahat goldawy. Kärhanalar we edaralar üçin arassaçylyk we gorag hyzmatlary.",
    en: "Air tickets, hotel booking and travel support for private and corporate clients. Cleaning and security services for companies and organisations.",
    ru: "Авиабилеты, бронирование отелей и поддержка в поездках для частных и корпоративных клиентов. Клининг и охрана для предприятий и организаций.",
  },
  more: { tk: "Hyzmat barada →", en: "About the service →", ru: "Подробнее →" },
  clients: { tk: "Biziň bilen işleýän guramalar", en: "Organisations we work with", ru: "Организации, с которыми мы работаем" },
  contact: { tk: "Habarlaşmak", en: "Contact", ru: "Контакты" },
  services: { tk: "Hyzmatlarymyz", en: "Our services", ru: "Наши услуги" },
  rights: { tk: "Ähli hukuklar goralan.", en: "All rights reserved.", ru: "Все права защищены." },
  other: { tk: "Beýleki hyzmat", en: "Other service", ru: "Другая услуга" },
} satisfies Record<string, T>;
