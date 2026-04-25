import { createFileRoute, Link } from "@tanstack/react-router";
import heroRace from "@/assets/hero-race.jpg";
import corvette from "@/assets/corvette.jpg";
import mustang from "@/assets/mustang.jpg";
import {
  ConceptSwitcher,
  SERVICE_BLURBS,
  SHOP,
  StarRow,
} from "@/components/shop-shared";

export const Route = createFileRoute("/race")({
  head: () => ({
    meta: [
      { title: `${SHOP.name} — Race-Bred Auto Repair & Performance` },
      {
        name: "description",
        content:
          "High-octane auto repair and performance work in Rosharon, TX. Diagnostics, brakes, suspension, builds — done at race-shop pace.",
      },
      { property: "og:title", content: `${SHOP.name} — Race-Bred Performance` },
      {
        property: "og:description",
        content:
          "High-octane repair & performance in Rosharon, TX.",
      },
      { property: "og:image", content: heroRace },
      { name: "twitter:image", content: heroRace },
    ],
  }),
  component: RaceConcept,
});

function RaceConcept() {
  return (
    <main
      className="min-h-screen"
      style={{
        background: "var(--race-black)",
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
            <span style={{ color: "var(--race-red)" }}>R</span>OBERTS
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
            className="rounded-none px-4 py-2 text-sm font-black uppercase tracking-widest text-black"
            style={{ background: "var(--race-yellow)" }}
          >
            ☎ {SHOP.phone}
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <img
          src={heroRace}
          alt="Red Mustang on a lift in a race-style garage"
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
            style={{ borderColor: "var(--race-red)" }}
          >
            Pit Lane · Hwy 6 · Rosharon, TX
          </div>
          <h1 className="mt-6 max-w-5xl font-stencil text-7xl leading-[0.9] tracking-tight md:text-[10rem]">
            BUILT TO
            <br />
            <span style={{ color: "var(--race-red)" }}>FINISH</span> FIRST.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/80">
            Brakes that bite. Suspension that holds. Diagnostics that don't
            guess. Whether it's your daily or your weekend warrior — we wrench
            like every minute is a pit stop.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={SHOP.phoneHref}
              className="px-7 py-4 text-sm font-black uppercase tracking-widest text-white"
              style={{ background: "var(--race-red)" }}
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
        <div className="race-stripe absolute bottom-0 left-0 right-0 h-2 opacity-90" />
      </section>

      {/* Stats strip */}
      <section
        className="border-y border-white/10"
        style={{ background: "oklch(0.18 0.005 0)" }}
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
                style={{ color: "var(--race-yellow)" }}
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
              style={{ color: "var(--race-red)" }}
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
              className="group relative bg-black p-6 transition hover:bg-[oklch(0.2_0.01_0)]"
            >
              <div
                className="font-stencil text-2xl"
                style={{ color: "var(--race-yellow)" }}
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
                style={{ background: "var(--race-red)" }}
              />
            </article>
          ))}
        </div>
      </section>

      {/* Pit wall — gallery */}
      <section
        id="pit"
        className="border-y border-white/10 py-24"
        style={{ background: "oklch(0.16 0.005 0)" }}
      >
        <div className="mx-auto max-w-7xl px-6">
          <p
            className="text-xs font-black uppercase tracking-[0.3em]"
            style={{ color: "var(--race-red)" }}
          >
            § Pit Wall
          </p>
          <h2 className="mt-2 font-stencil text-6xl md:text-7xl">
            FROM THE FLOOR.
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <figure className="relative overflow-hidden md:col-span-2 md:row-span-2">
              <img
                src={heroRace}
                alt="Red Mustang on lift"
                width={1920}
                height={1280}
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <figcaption
                className="absolute bottom-4 left-4 px-3 py-1 text-xs font-black uppercase tracking-widest text-black"
                style={{ background: "var(--race-yellow)" }}
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
              style={{ color: "var(--race-red)" }}
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
              style={{ background: "oklch(0.18 0.005 0)" }}
            >
              <div
                className="flex items-center justify-between"
                style={{ color: "var(--race-yellow)" }}
              >
                <StarRow n={r.rating} />
                <span className="text-[10px] font-black uppercase tracking-widest text-white/50">
                  Verified
                </span>
              </div>
              <p className="mt-4 text-lg leading-snug">"{r.text}"</p>
              <footer className="mt-5 flex items-center justify-between border-t border-white/10 pt-4 text-xs font-black uppercase tracking-widest">
                <span>{r.name}</span>
                <span style={{ color: "var(--race-red)" }}>{r.vehicle}</span>
              </footer>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        className="relative overflow-hidden py-20"
        style={{ background: "var(--race-red)" }}
      >
        <div className="checker-flag absolute inset-y-0 left-0 w-6 opacity-30" />
        <div className="checker-flag absolute inset-y-0 right-0 w-6 opacity-30" />
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="font-stencil text-6xl md:text-8xl">
            START YOUR ENGINE.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/90">
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
              className="border-2 border-black px-8 py-4 text-sm font-black uppercase tracking-widest text-black hover:bg-black hover:text-white"
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

      <ConceptSwitcher current="race" />
    </main>
  );
}
