import { createFileRoute } from "@tanstack/react-router";
import heroBlue from "@/assets/hero-race-blue.jpg";
import { RaceConcept } from "@/components/race-concept";
import { SHOP } from "@/lib/shop";

export const Route = createFileRoute("/race-blue")({
  head: () => ({
    meta: [
      { title: `${SHOP.name} — Race Blue` },
      { name: "description", content: "Precision auto repair & performance in Rosharon, TX." },
      { property: "og:title", content: `${SHOP.name} — Race Blue` },
      { property: "og:description", content: "Precision repair & performance in Rosharon, TX." },
      { property: "og:image", content: heroBlue },
      { name: "twitter:image", content: heroBlue },
    ],
  }),
  component: () => (
    <RaceConcept variant="blue" hero={heroBlue} heroAlt="Electric blue muscle car in a race garage" />
  ),
});
