import { createFileRoute } from "@tanstack/react-router";
import heroYellow from "@/assets/hero-race-yellow.jpg";
import { RaceConcept } from "@/components/race-concept";
import { SHOP } from "@/lib/shop";

export const Route = createFileRoute("/race-yellow")({
  head: () => ({
    meta: [
      { title: `${SHOP.name} — Race Yellow` },
      { name: "description", content: "Bold race-shop auto repair & performance in Rosharon, TX." },
      { property: "og:title", content: `${SHOP.name} — Race Yellow` },
      { property: "og:description", content: "Bold race-shop repair & performance in Rosharon, TX." },
      { property: "og:image", content: heroYellow },
      { name: "twitter:image", content: heroYellow },
    ],
  }),
  component: () => (
    <RaceConcept variant="yellow" hero={heroYellow} heroAlt="Yellow widebody race car in a garage" />
  ),
});
