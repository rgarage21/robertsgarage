import { createFileRoute } from "@tanstack/react-router";
import heroRace from "@/assets/hero-race.jpg";
import { RaceConcept } from "@/components/race-concept";
import { SHOP } from "@/lib/shop";

export const Route = createFileRoute("/race-red")({
  head: () => ({
    meta: [
      { title: `${SHOP.name} — Race Red` },
      { name: "description", content: "Race-bred auto repair & performance in Rosharon, TX." },
      { property: "og:title", content: `${SHOP.name} — Race Red` },
      { property: "og:description", content: "High-octane repair & performance in Rosharon, TX." },
      { property: "og:image", content: heroRace },
      { name: "twitter:image", content: heroRace },
    ],
  }),
  component: () => (
    <RaceConcept variant="red" hero={heroRace} heroAlt="Red Mustang on a lift in a race-style garage" />
  ),
});
