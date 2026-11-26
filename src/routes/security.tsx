import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";
import { services } from "@/lib/site";

const s = services[2]!;

export const Route = createFileRoute("/security")({
  head: () => ({
    meta: [
      { title: `${s.name} — AÝRATYN HYZMAT` },
      { name: "description", content: s.long },
      { property: "og:title", content: `${s.name} — AÝRATYN HYZMAT` },
      { property: "og:description", content: s.long },
    ],
  }),
  component: () => <ServicePage s={s} />,
});
