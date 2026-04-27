import { createFileRoute, Link } from "@tanstack/react-router";
import heroRed from "@/assets/hero-race.jpg";
import heroNeighborhood from "@/assets/hero-neighborhood.jpg";
import heroNeighborhoodDark from "@/assets/hero-neighborhood-dark.jpg";
import { SHOP } from "@/lib/shop";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${SHOP.name} — Concept Directions` },
      {
        name: "description",
        content:
          "Two red concept directions for Roberts Garage in Rosharon, TX.",
      },
    ],
  }),
  component: Index,
});

const VARIANTS = [
  {
    to: "/race-red",
    tag: "Concept 01 · Race",
    title: "Race Red",
    desc: "Bold motorsport energy — stencil type, race photography, performance-first voice.",
    image: heroRed,
    accent: "oklch(0.58 0.24 27)",
  },
  {
    to: "/neighborhood-red",
    tag: "Concept 02 · Neighborhood",
    title: "Neighborhood Red",
    desc: "Same red, dialed for trust — friendly mechanic, clean type, everyday repair.",
    image: heroNeighborhood,
    accent: "oklch(0.58 0.24 27)",
  },
  {
    to: "/neighborhood-dark",
    tag: "Concept 03 · Neighborhood Dark",
    title: "Neighborhood Dark",
    desc: "Trustworthy mechanic tone in a cooler, hi-tech dark aesthetic with red glow accents.",
    image: heroNeighborhoodDark,
    accent: "oklch(0.62 0.24 27)",
  },
] as const;

function Index() {
  return (
    <main className="min-h-screen bg-black text-white">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <div className="font-archivo text-lg font-black uppercase tracking-tight">
          {SHOP.name}
        </div>
        <a
          href={SHOP.phoneHref}
          className="font-mono-2 text-sm text-white/70 hover:text-white"
        >
          {SHOP.phone}
        </a>
      </header>

      <section className="mx-auto max-w-7xl px-6 pb-10 pt-6">
        <p className="font-mono-2 text-xs uppercase tracking-[0.3em] text-white/60">
          Roberts Garage · concept directions
        </p>
        <h1 className="mt-3 max-w-3xl font-stencil text-5xl leading-[0.95] tracking-tight md:text-7xl">
          Two red directions. Same brand.
        </h1>
        <p className="mt-4 max-w-2xl text-white/70">
          Click a concept to see the full landing page. Both share the same
          services, contact info, and Google reviews — the difference is tone:
          performance-first vs. neighborhood-first.
        </p>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 pb-24 md:grid-cols-3">
        {VARIANTS.map((v) => (
          <Link
            key={v.to}
            to={v.to}
            className="group relative block overflow-hidden border border-white/10 bg-neutral-950 transition-all hover:-translate-y-1 hover:border-white/30"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={v.image}
                alt={v.title}
                width={1920}
                height={1280}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              <span
                className="absolute left-4 top-4 px-3 py-1 font-mono-2 text-[11px] uppercase tracking-[0.2em] text-black"
                style={{ background: v.accent }}
              >
                {v.tag}
              </span>
              <div className="absolute bottom-5 left-5 right-5">
                <h2 className="font-stencil text-4xl tracking-tight md:text-5xl">
                  {v.title}
                </h2>
                <p className="mt-2 text-sm text-white/80">{v.desc}</p>
              </div>
            </div>
            <div className="flex items-center justify-between px-5 py-4">
              <span className="font-mono-2 text-xs uppercase tracking-[0.3em] text-white/60">
                View variant
              </span>
              <span aria-hidden className="text-xl">→</span>
            </div>
            <div
              className="absolute inset-x-0 bottom-0 h-1"
              style={{ background: v.accent }}
            />
          </Link>
        ))}
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-8 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
          <span>{SHOP.address}</span>
          <span>{SHOP.hours}</span>
        </div>
      </footer>
    </main>
  );
}
