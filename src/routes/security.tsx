import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";
import { services } from "@/lib/site";

const s = services[2]!;

export const Route = createFileRoute("/security")({
  head: () => ({
    meta: [
      { title: `${s.name.tk} — AÝRATYN HYZMAT` },
      { name: "description", content: s.long.tk },
      { property: "og:title", content: `${s.name.tk} — AÝRATYN HYZMAT` },
      { property: "og:description", content: s.long.tk },
    ],
  }),
  component: () => <ServicePage s={s} />,
});
