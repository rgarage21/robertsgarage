import { createFileRoute, Link } from "@tanstack/react-router";
import heroCustom from "@/assets/hero-custom.jpg";
import heroTrust from "@/assets/hero-trust.jpg";
import { SHOP } from "@/lib/shop";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${SHOP.name} — Pick a Concept` },
      {
        name: "description",
        content:
          "Two design concepts for a Rosharon, TX auto repair & custom car shop. Pick the look and feel.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <div className="font-display text-lg font-bold tracking-tight">
          {SHOP.name}
        </div>
        <a
          href={SHOP.phoneHref}
          className="font-mono-2 text-sm text-muted-foreground hover:text-foreground"
        >
          {SHOP.phone}
        </a>
      </header>

      <section className="mx-auto max-w-7xl px-6 pb-10 pt-6">
        <p className="font-mono-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Two directions · pick a vibe
        </p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
          Same shop. Two very different front doors.
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Click a concept to see a full landing experience. Both pages share the
          same services, contact info, and Google reviews — only the look,
          tone, and storytelling change.
        </p>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 pb-24 md:grid-cols-2">
        <ConceptCard
          to="/custom"
          tag="Concept 01"
          title="Cutting-Edge Custom"
          desc="Dark, neon-lit, performance-shop energy. For custom builds, mods, and head-turning work."
          image={heroCustom}
          accent="neon"
        />
        <ConceptCard
          to="/trust"
          tag="Concept 02"
          title="Dependable Neighborhood Mechanic"
          desc="Warm, honest, Texas-friendly. Built on trust, fair pricing, and long-time customers."
          image={heroTrust}
          accent="trust"
        />
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <span>{SHOP.address}</span>
          <span>{SHOP.hours}</span>
        </div>
      </footer>
    </main>
  );
}

function ConceptCard({
  to,
  tag,
  title,
  desc,
  image,
  accent,
}: {
  to: string;
  tag: string;
  title: string;
  desc: string;
  image: string;
  accent: "neon" | "trust";
}) {
  return (
    <Link
      to={to}
      className="group relative block overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-2xl"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          width={1920}
          height={1080}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <span
          className={
            "absolute left-4 top-4 rounded-full border px-3 py-1 font-mono-2 text-[11px] uppercase tracking-[0.2em] text-white " +
            (accent === "neon"
              ? "border-white/30 bg-black/40 backdrop-blur"
              : "border-white/30 bg-black/40 backdrop-blur")
          }
        >
          {tag}
        </span>
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <h2
            className={
              "font-display text-2xl font-bold md:text-3xl " +
              (accent === "neon" ? "text-glow-neon" : "")
            }
          >
            {title}
          </h2>
          <p className="mt-1 text-sm text-white/80">{desc}</p>
        </div>
      </div>
      <div className="flex items-center justify-between px-5 py-4">
        <span className="font-mono-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          View concept
        </span>
        <span aria-hidden className="text-xl">
          →
        </span>
      </div>
    </Link>
  );
}
