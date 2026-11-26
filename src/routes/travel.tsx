import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";
import { services } from "@/lib/site";

const s = services[0]!;

export const Route = createFileRoute("/travel")({
  head: () => ({
    meta: [
      { title: `${s.name.en} — AÝRATYN HYZMAT` },
      { name: "description", content: s.long.en },
      { property: "og:title", content: `${s.name.en} — AÝRATYN HYZMAT` },
      { property: "og:description", content: s.long.en },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <ServicePage s={s} />,
});
