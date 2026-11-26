import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";
import { services } from "@/lib/site";

const s = services[1]!;

export const Route = createFileRoute("/cleaning")({
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
