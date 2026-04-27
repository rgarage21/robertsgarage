import { Link } from "@tanstack/react-router";
import corvette from "@/assets/corvette.jpg";
import mustang from "@/assets/mustang.jpg";
import { SERVICE_BLURBS, SHOP, StarRow } from "@/components/shop-shared";

export type RaceVariant = "red" | "blue" | "yellow";

type Theme = {
  accent: string; // primary brand accent
  accentInk: string; // text color over accent button
  secondary: string; // secondary highlight (numerals, stats)
  bg: string; // base background
  panel: string; // dark panel bg
  panel2: string; // slightly lighter panel
  ctaText: string; // text color on the big CTA section
  tagline: string;
  headline: React.ReactNode;
};

const THEMES: Record<RaceVariant, Theme> = {
  red: {
    accent: "oklch(0.58 0.24 27)", // race red
    accentInk: "white",
    secondary: "oklch(0.88 0.18 95)", // yellow numerals
    bg: "oklch(0.14 0.005 0)",
    panel: "oklch(0.18 0.005 0)",
    panel2: "oklch(0.16 0.005 0)",
    ctaText: "white",
    tagline: "Pit Lane · Hwy 6 · Rosharon, TX",
    headline: (
      <>
        BUILT TO
        <br />
        <span style={{ color: "oklch(0.58 0.24 27)" }}>FINISH</span> FIRST.
      </>
    ),
  },
  blue: {
    accent: "oklch(0.55 0.22 255)", // electric blue
    accentInk: "white",
    secondary: "oklch(0.92 0.04 240)", // ice white-blue
    bg: "oklch(0.13 0.02 250)",
    panel: "oklch(0.18 0.04 252)",
    panel2: "oklch(0.16 0.03 252)",
    ctaText: "white",
    tagline: "Grid Position · Hwy 6 · Rosharon, TX",
    headline: (
      <>
        TUNED FOR
        <br />
        <span style={{ color: "oklch(0.7 0.18 245)" }}>PRECISION.</span>
      </>
    ),
  },
  yellow: {
    accent: "oklch(0.86 0.18 92)", // bold yellow
    accentInk: "black",
    secondary: "oklch(0.98 0.01 90)",
    bg: "oklch(0.13 0.005 80)",
    panel: "oklch(0.17 0.01 85)",
    panel2: "oklch(0.15 0.01 85)",
    ctaText: "black",
    tagline: "Hot Lap · Hwy 6 · Rosharon, TX",
    headline: (
      <>
        DRIVEN TO
        <br />
        <span style={{ color: "oklch(0.86 0.18 92)" }}>WIN.</span>
      </>
    ),
  },
};

export function RaceConcept({
  variant,
  hero,
  heroAlt,
}: {
  variant: RaceVariant;
  hero: string;
  heroAlt: string;
}) {
  const t = THEMES[variant];

  return (
    <main
      className="min-h-screen"
      style={{
        background: t.bg,
        color: "white",
        fontFamily: "var(--font-archivo)",
      }}
    >
      {/* Checker top bar */}
      <div className="checker-flag h-3 w-full" />

      <header className="sticky top-0 z-40 border-b border-white/10 bg-black/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link
            to="/"
            className="font-archivo text-xl font-black uppercase tracking-tight"
          >
            <span style={{ color: t.accent }}>R</span>OBERTS
            <span className="ml-2 opacity-50">/ GARAGE</span>
          </Link>
          <nav className="hidden items-center gap-8 text-xs font-bold uppercase tracking-widest md:flex">
            <a href="#pit">Pit Wall</a>
            <a href="#services">Services</a>
            <a href="#reviews">Wins</a>
            <Link to="/contact">Contact</Link>
          </nav>
          <a
            href={SHOP.phoneHref}
            className="rounded-none px-4 py-2 text-sm font-black uppercase tracking-widest"
            style={{ background: t.accent, color: t.accentInk }}
          >
            ☎ {SHOP.phone}
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <img
          src={hero}
          alt={heroAlt}
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.4), rgba(0,0,0,0.85) 80%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 pb-32 pt-28">
          <div
            className="inline-block border-l-4 px-3 py-1 text-xs font-black uppercase tracking-[0.3em]"
            style={{ borderColor: t.accent }}
          >
            {t.tagline}
          </div>
          <h1 className="mt-6 max-w-5xl font-stencil text-7xl leading-[0.9] tracking-tight md:text-[10rem]">
            {t.headline}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/80">
            Brakes that bite. Suspension that holds. Diagnostics that don't
            guess. Whether it's your daily or your weekend warrior — we wrench
            like every minute is a pit stop.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={SHOP.phoneHref}
              className="px-7 py-4 text-sm font-black uppercase tracking-widest"
              style={{ background: t.accent, color: t.accentInk }}
            >
              Call the pit → {SHOP.phone}
            </a>
            <a
              href={SHOP.smsHref}
              className="border-2 border-white px-7 py-4 text-sm font-black uppercase tracking-widest hover:bg-white hover:text-black"
            >
              Text for a quote
            </a>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section
        className="border-y border-white/10"
        style={{ background: t.panel }}
      >
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-white/10 md:grid-cols-4">
          {[
            ["15+", "Years on the grid"],
            ["8", "Service specialties"],
            ["★ 5.0", "Customer rating"],
            ["1 day", "Most jobs out the door"],
          ].map(([n, l]) => (
            <div key={l} className="px-6 py-8 text-center">
              <div
                className="font-stencil text-5xl"
                style={{ color: t.secondary }}
              >
                {n}
              </div>
              <div className="mt-1 text-[11px] font-bold uppercase tracking-widest text-white/60">
                {l}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex items-end justify-between">
          <div>
            <p
              className="text-xs font-black uppercase tracking-[0.3em]"
              style={{ color: t.accent }}
            >
              § Services
            </p>
            <h2 className="mt-2 font-stencil text-6xl md:text-7xl">
              THE TOOLBOX.
            </h2>
          </div>
          <span className="hidden font-stencil text-7xl opacity-10 md:block">
            01 / 08
          </span>
        </div>
        <div className="mt-10 grid gap-px bg-white/10 md:grid-cols-4">
          {SHOP.services.map((s, i) => (
            <article
              key={s}
              className="group relative p-6 transition"
              style={{ background: t.bg }}
            >
              <div
                className="font-stencil text-2xl"
                style={{ color: t.secondary }}
              >
                #{String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-3 font-archivo text-xl font-black uppercase">
                {s}
              </h3>
              <p className="mt-2 text-sm text-white/70">
                {SERVICE_BLURBS[s] ??
                  "Pro-level work, fair pricing, fast turnaround."}
              </p>
              <div
                className="mt-5 h-1 w-10 transition-all group-hover:w-full"
                style={{ background: t.accent }}
              />
            </article>
          ))}
        </div>
      </section>

      {/* Pit wall — gallery */}
      <section
        id="pit"
        className="border-y border-white/10 py-24"
        style={{ background: t.panel2 }}
      >
        <div className="mx-auto max-w-7xl px-6">
          <p
            className="text-xs font-black uppercase tracking-[0.3em]"
            style={{ color: t.accent }}
          >
            § Pit Wall
          </p>
          <h2 className="mt-2 font-stencil text-6xl md:text-7xl">
            FROM THE FLOOR.
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <figure className="relative overflow-hidden md:col-span-2 md:row-span-2">
              <img
                src={hero}
                alt={heroAlt}
                width={1920}
                height={1280}
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <figcaption
                className="absolute bottom-4 left-4 px-3 py-1 text-xs font-black uppercase tracking-widest"
                style={{ background: t.accent, color: t.accentInk }}
              >
                Build in progress
              </figcaption>
            </figure>
            <figure className="relative overflow-hidden">
              <img
                src={corvette}
                alt="Corvette"
                width={1600}
                height={1067}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </figure>
            <figure className="relative overflow-hidden">
              <img
                src={mustang}
                alt="Mustang"
                width={1600}
                height={1067}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </figure>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex items-end justify-between">
          <div>
            <p
              className="text-xs font-black uppercase tracking-[0.3em]"
              style={{ color: t.accent }}
            >
              § Wins
            </p>
            <h2 className="mt-2 font-stencil text-6xl md:text-7xl">
              CHECKERED FLAGS.
            </h2>
          </div>
          <a
            href={SHOP.reviewsHref}
            target="_blank"
            rel="noreferrer"
            className="text-xs font-black uppercase tracking-widest text-white/70 underline-offset-4 hover:text-white hover:underline"
          >
            All reviews on Google →
          </a>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {SHOP.reviews.map((r) => (
            <article
              key={r.name}
              className="border border-white/10 p-6"
              style={{ background: t.panel }}
            >
              <div
                className="flex items-center justify-between"
                style={{ color: t.secondary }}
              >
                <StarRow n={r.rating} />
                <span className="text-[10px] font-black uppercase tracking-widest text-white/50">
                  Verified
                </span>
              </div>
              <p className="mt-4 text-lg leading-snug">"{r.text}"</p>
              <footer className="mt-5 flex items-center justify-between border-t border-white/10 pt-4 text-xs font-black uppercase tracking-widest">
                <span>{r.name}</span>
                <span style={{ color: t.accent }}>{r.vehicle}</span>
              </footer>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        className="relative overflow-hidden py-20"
        style={{ background: t.accent, color: t.ctaText }}
      >
        <div className="checker-flag absolute inset-y-0 left-0 w-6 opacity-30" />
        <div className="checker-flag absolute inset-y-0 right-0 w-6 opacity-30" />
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="font-stencil text-6xl md:text-8xl">
            START YOUR ENGINE.
          </h2>
          <p className="mx-auto mt-4 max-w-xl opacity-90">
            Call, text, or roll in. {SHOP.address}.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={SHOP.phoneHref}
              className="bg-black px-8 py-4 text-sm font-black uppercase tracking-widest text-white"
            >
              ☎ {SHOP.phone}
            </a>
            <Link
              to="/contact"
              className="border-2 px-8 py-4 text-sm font-black uppercase tracking-widest hover:bg-black hover:text-white"
              style={{ borderColor: t.ctaText, color: t.ctaText }}
            >
              Send a message
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 text-xs font-bold uppercase tracking-widest text-white/60 md:flex-row md:items-center md:justify-between">
          <span>© {SHOP.name} — {SHOP.city}</span>
          <span>{SHOP.hours}</span>
        </div>
      </footer>

      <RaceSwitcher current={variant} />
    </main>
  );
}

function RaceSwitcher({ current: _current }: { current: RaceVariant }) {
  return (
    <div className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2 rounded-full border border-white/20 bg-black/80 px-2 py-1.5 text-xs backdrop-blur-md">
      <div className="flex items-center gap-1 text-white">
        <Link to="/" className="rounded-full px-3 py-1 text-white/70 hover:text-white">
          ← All
        </Link>
        <Link
          to="/race-red"
          className="flex items-center gap-2 rounded-full bg-white px-3 py-1 text-black"
        >
          <span aria-hidden className="inline-block h-2 w-2 rounded-full" style={{ background: "oklch(0.58 0.24 27)" }} />
          Race Red
        </Link>
        <Link
          to="/neighborhood-red"
          className="flex items-center gap-2 rounded-full px-3 py-1 text-white/70 hover:text-white"
        >
          <span aria-hidden className="inline-block h-2 w-2 rounded-full" style={{ background: "oklch(0.58 0.24 27)" }} />
          Neighborhood
        </Link>
        <Link
          to="/neighborhood-dark"
          className="flex items-center gap-2 rounded-full px-3 py-1 text-white/70 hover:text-white"
        >
          <span aria-hidden className="inline-block h-2 w-2 rounded-full" style={{ background: "oklch(0.62 0.24 27)" }} />
          Neighborhood Dark
        </Link>
      </div>
    </div>
  );
}
