export type Service = {
  slug: "travel" | "cleaning" | "security";
  no: string;
  name: string;
  title: string;
  short: string;
  long: string;
  note?: string;
  phone: string;
  email?: string;
};

export const services: Service[] = [
  {
    slug: "travel",
    no: "01",
    name: "Syýahatçylyk",
    title: "Uçar petekleri we syýahat goldawy",
    short: "Uçar petekleri, myhmanhana bronlamak we syýahat goldawy.",
    long: "Şahsy we iş saparlary üçin uçar petekleri, myhmanhana bronlamak we sapary meýilleşdirmek boýunça kömek edýäris.",
    note: "Turkish Airlines awiakompaniýasynyň ygtyýarly agentligi.",
    phone: "+993 12 46 84 04",
    email: "tickets@ayratyn.com",
  },
  {
    slug: "cleaning",
    no: "02",
    name: "Arassaçylyk",
    title: "Jaýlaryň we fasadlaryň arassalanyşy",
    short: "Binalaryň içini we daşky ýüzüni arassalamak.",
    long: "Kärhanalar we edaralar üçin jaýlaryň içini hem-de binalaryň daşky ýüzüni arassalaýarys.",
    note: "Daşky ýüzleri arassalaýan toparymyzda IRATA şahadatnamaly işgärler bar.",
    phone: "+993 12 92 19 80",
  },
  {
    slug: "security",
    no: "03",
    name: "Gorag",
    title: "Kärhanalar we edaralar üçin gorag",
    short: "Kärhanalar we edaralar üçin gorag hyzmatlary.",
    long: "Gorag hyzmatlary barada maglumat almak we zerurlyklaryňyzy ara alyp maslahatlaşmak üçin baş edaramyz bilen habarlaşyň.",
    phone: "+993 12 92 05 10",
    email: "info@ayratyn.com",
  },
];

export const clients = ["Daewoo E&C", "Bouygues Bâtiment International", "BMG-niň Türkmenistandaky edarasy"];

export const tel = (p: string) => `tel:${p.replace(/\s/g, "")}`;
