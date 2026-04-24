import { createFileRoute, Link } from "@tanstack/react-router";
import heroCustom from "@/assets/hero-custom.jpg";
import corvette from "@/assets/corvette.jpg";
import mustang from "@/assets/mustang.jpg";
import {
  ConceptSwitcher,
  SERVICE_BLURBS,
  SHOP,
  StarRow,
} from "@/components/shop-shared";

export const Route = createFileRoute("/custom")({
  head: () => ({
    meta: [
      { title: `${SHOP.name} — Custom Builds & Performance | Rosharon, TX` },
      {
        name: "description",
        content:
          "Performance, custom builds, and dialed-in repair work in Rosharon, TX. Electrical, A/C, suspension, brakes, tune ups and full custom projects.",
      },
      { property: "og:title", content: `${SHOP.name} — Custom Builds` },
      {
        property: "og:description",
        content:
          "Cutting-edge custom car shop in Rosharon, TX. Built different.",
      },
    ],
  }),
  component: CustomConcept,
});

function CustomConcept() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-ink text-white" style={{ background: "var(--ink)" }}>
      {/* NAV */}
      <nav className="relative z-30 mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <div className="flex items-center gap-2">
          <span className="inline-block h-2 w-2 rounded-full bg-[var(--neon)] shadow-[0_0_12px_var(--neon)]" />
          <span className="font-stencil text-xl">ROSHARON / AUTO·CUSTOM</span>
        </div>
        <div className="hidden items-center gap-8 font-mono-2 text-xs uppercase tracking-[0.2em] text-white/70 md:flex">
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#reviews">Reviews</a>
          <a href="#contact">Contact</a>
        </div>
        <a
          href={SHOP.phoneHref}
          className="rounded-full border border-[var(--neon)]/60 bg-[var(--neon)]/10 px-4 py-2 font-mono-2 text-xs uppercase tracking-[0.2em] text-white ring-neon transition hover:bg-[var(--neon)]/20"
        >
          {SHOP.phone}
        </a>
      </nav>

      {/* HERO */}
      <section className="relative">
        <div className="absolute inset-0">
          <img
            src={heroCustom}
            alt="Custom performance car under neon lighting"
            width={1920}
            height={1080}
            className="h-full w-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-[var(--ink)]" />
          <div className="absolute inset-0 bg-grid-neon opacity-40" />
        </div>

        <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-6 pb-28 pt-20 md:pb-40 md:pt-28">
          <div>
            <p className="font-mono-2 text-[11px] uppercase tracking-[0.35em] text-[var(--neon)]">
              ◢ Rosharon, TX · Est. on Hwy 6
            </p>
            <h1 className="mt-5 max-w-4xl font-stencil text-6xl leading-[0.95] md:text-[8rem]">
              BUILT
              <span className="text-glow-neon text-[var(--neon)]"> DIFFERENT.</span>
              <br />
              FIXED RIGHT.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/80">
              From a hard-to-find electrical gremlin to a full custom build —
              we work on the cars other shops won't touch, and we do it like
              it's our own.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={SHOP.phoneHref}
                className="group relative inline-flex items-center gap-3 rounded-full bg-[var(--neon)] px-6 py-3 font-mono-2 text-xs font-semibold uppercase tracking-[0.25em] text-black ring-neon transition hover:scale-[1.02]"
              >
                Call Now
                <span className="transition group-hover:translate-x-1">→</span>
              </a>
              <a
                href={SHOP.smsHref}
                className="inline-flex items-center gap-3 rounded-full border border-white/30 px-6 py-3 font-mono-2 text-xs font-semibold uppercase tracking-[0.25em] text-white transition hover:border-white"
              >
                Text the Shop
              </a>
            </div>

            <div className="mt-14 grid max-w-2xl grid-cols-3 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 font-mono-2 text-xs uppercase tracking-[0.18em]">
              {[
                { k: "Years", v: "15+" },
                { k: "Specialties", v: "8" },
                { k: "Avg rating", v: "5.0★" },
              ].map((s) => (
                <div key={s.k} className="bg-[var(--ink)] px-4 py-5">
                  <div className="font-stencil text-3xl text-white">{s.v}</div>
                  <div className="mt-1 text-white/60">{s.k}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* warning stripe divider */}
        <div className="stripe-warning relative z-10 h-3 opacity-80" />
      </section>

      {/* SERVICES */}
      <section id="services" className="relative bg-noise py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-mono-2 text-[11px] uppercase tracking-[0.35em] text-[var(--neon)]">
                / 02 — Capabilities
              </p>
              <h2 className="mt-3 font-stencil text-5xl md:text-6xl">
                What we wrench on.
              </h2>
            </div>
            <p className="max-w-md text-white/70">
              Specializing in Electrical, A/C, Suspension, Brakes, Tune Ups —
              and full custom builds. Give us a call or text.
            </p>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {SHOP.services.map((s, i) => (
              <div
                key={s}
                className="group relative bg-[var(--ink)] p-6 transition hover:bg-white/5"
              >
                <div className="font-mono-2 text-[11px] text-white/40">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-2 font-display text-xl font-semibold">
                  {s}
                </h3>
                <p className="mt-2 text-sm text-white/60">
                  {SERVICE_BLURBS[s] ?? "Done right the first time."}
                </p>
                <div className="mt-6 h-px w-8 bg-[var(--neon)] transition-all group-hover:w-20" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="relative py-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="font-mono-2 text-[11px] uppercase tracking-[0.35em] text-[var(--neon)]">
            / 03 — Recent work
          </p>
          <h2 className="mt-3 font-stencil text-5xl md:text-6xl">
            In the bay.
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <WorkCard
              img={corvette}
              tag="C6 Corvette"
              title="Tune up & engine bay refresh"
              note="Plugs, coils, fluids, detailed bay — running like it just left the factory."
            />
            <WorkCard
              img={mustang}
              tag="Shelby GT500"
              title="Suspension dial-in"
              note="Lowered ride height, alignment, brake refresh. Daily-able and corner-ready."
            />
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="bg-white/5 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-mono-2 text-[11px] uppercase tracking-[0.35em] text-[var(--neon)]">
                / 04 — Word on the street
              </p>
              <h2 className="mt-3 font-stencil text-5xl md:text-6xl">
                Real reviews.
              </h2>
            </div>
            <a
              href={SHOP.reviewsHref}
              target="_blank"
              rel="noreferrer"
              className="font-mono-2 text-xs uppercase tracking-[0.2em] text-white/70 underline-offset-4 hover:text-white hover:underline"
            >
              See all on Google →
            </a>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {SHOP.reviews.map((r) => (
              <figure
                key={r.name}
                className="rounded-2xl border border-white/10 bg-[var(--ink)] p-6"
              >
                <div className="text-[var(--neon)]">
                  <StarRow n={r.rating} />
                </div>
                <blockquote className="mt-4 text-sm text-white/85">
                  "{r.text}"
                </blockquote>
                <figcaption className="mt-5 font-mono-2 text-[11px] uppercase tracking-[0.18em] text-white/50">
                  {r.name} · {r.vehicle}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section id="contact" className="relative overflow-hidden py-28">
        <div className="absolute inset-0 bg-grid-neon opacity-30" />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <p className="font-mono-2 text-[11px] uppercase tracking-[0.35em] text-[var(--neon)]">
            / 05 — Pull up
          </p>
          <h2 className="mt-4 font-stencil text-6xl leading-none md:text-8xl">
            ROLL IN.
            <br />
            <span className="text-[var(--neon)] text-glow-neon">DRIVE OUT BETTER.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-white/70">
            Call or text for a quote. We answer fast and we shoot straight on
            price.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <ContactTile label="Call" value={SHOP.phone} href={SHOP.phoneHref} />
            <ContactTile label="Text" value={SHOP.phone} href={SHOP.smsHref} />
            <ContactTile label="Email" value={SHOP.email} href={SHOP.emailHref} />
            <ContactTile
              label="Visit"
              value={SHOP.address}
              href={SHOP.mapsHref}
              external
            />
          </div>

          <div className="mt-10">
            <Link
              to="/contact"
              className="font-mono-2 text-xs uppercase tracking-[0.25em] text-white/70 underline-offset-4 hover:text-white hover:underline"
            >
              Full contact page →
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-10 text-center font-mono-2 text-[11px] uppercase tracking-[0.25em] text-white/40">
        © {new Date().getFullYear()} {SHOP.name} · {SHOP.city}
      </footer>

      <ConceptSwitcher current="custom" />
    </main>
  );
}

function WorkCard({
  img,
  tag,
  title,
  note,
}: {
  img: string;
  tag: string;
  title: string;
  note: string;
}) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[var(--ink)]">
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={img}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="font-mono-2 text-[11px] uppercase tracking-[0.25em] text-[var(--neon)]">
          {tag}
        </div>
        <h3 className="mt-2 font-display text-2xl font-semibold">{title}</h3>
        <p className="mt-2 text-sm text-white/70">{note}</p>
      </div>
    </article>
  );
}

function ContactTile({
  label,
  value,
  href,
  external,
}: {
  label: string;
  value: string;
  href: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="group rounded-2xl border border-white/15 bg-white/5 p-6 text-left transition hover:border-[var(--neon)] hover:bg-white/10"
    >
      <div className="font-mono-2 text-[11px] uppercase tracking-[0.25em] text-[var(--neon)]">
        {label}
      </div>
      <div className="mt-2 font-display text-lg text-white group-hover:text-glow-neon">
        {value}
      </div>
    </a>
  );
}
