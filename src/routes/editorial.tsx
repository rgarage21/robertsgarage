import { createFileRoute, Link } from "@tanstack/react-router";
import heroEditorial from "@/assets/hero-editorial.jpg";
import corvette from "@/assets/corvette.jpg";
import mustang from "@/assets/mustang.jpg";
import {
  ConceptSwitcher,
  SERVICE_BLURBS,
  SHOP,
  StarRow,
} from "@/components/shop-shared";

export const Route = createFileRoute("/editorial")({
  head: () => ({
    meta: [
      { title: `${SHOP.name} — A Quieter Kind of Garage` },
      {
        name: "description",
        content:
          "Considered, careful auto repair and custom work in Rosharon, TX. Editorial-grade attention to your vehicle.",
      },
      { property: "og:title", content: `${SHOP.name} — A Quieter Kind of Garage` },
      {
        property: "og:description",
        content: "Considered, careful auto repair in Rosharon, TX.",
      },
      { property: "og:image", content: heroEditorial },
      { name: "twitter:image", content: heroEditorial },
    ],
  }),
  component: EditorialConcept,
});

function EditorialConcept() {
  return (
    <main
      className="min-h-screen"
      style={{
        background: "var(--edit-bone)",
        color: "var(--edit-ink)",
        fontFamily: "var(--font-body)",
      }}
    >
      {/* Top bar */}
      <header className="mx-auto max-w-7xl px-8 pt-8">
        <div
          className="flex items-center justify-between border-b pb-6"
          style={{ borderColor: "var(--edit-rule)" }}
        >
          <Link to="/" className="font-serif-2 text-2xl italic">
            {SHOP.name}
          </Link>
          <nav className="hidden items-center gap-8 text-xs uppercase tracking-[0.25em] md:flex">
            <a href="#work">Work</a>
            <a href="#services">Services</a>
            <a href="#words">Words</a>
            <Link to="/contact">Visit</Link>
          </nav>
          <a
            href={SHOP.phoneHref}
            className="font-serif-2 text-lg italic"
            style={{ color: "var(--edit-accent)" }}
          >
            {SHOP.phone}
          </a>
        </div>
      </header>

      {/* Hero — magazine cover */}
      <section className="mx-auto max-w-7xl px-8 pt-12">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="text-[11px] uppercase tracking-[0.3em] opacity-60">
              Issue №01 · Rosharon, Texas
            </p>
            <h1 className="mt-6 font-serif-2 text-6xl leading-[0.95] tracking-tight md:text-8xl">
              A quieter
              <br />
              kind of
              <br />
              <em className="opacity-90">garage.</em>
            </h1>
            <p className="mt-8 max-w-md text-base leading-relaxed opacity-80">
              We don't rush. We diagnose carefully, communicate clearly, and
              return your car better than we found it. Daily drivers, weekend
              builds, and everything between.
            </p>
            <div className="mt-10 flex items-center gap-6">
              <Link
                to="/contact"
                className="border px-6 py-3 text-xs uppercase tracking-[0.25em] transition hover:bg-[var(--edit-ink)] hover:text-[var(--edit-bone)]"
                style={{ borderColor: "var(--edit-ink)" }}
              >
                Book an appointment
              </Link>
              <a
                href={SHOP.smsHref}
                className="font-serif-2 text-lg italic underline-offset-4 hover:underline"
                style={{ color: "var(--edit-accent)" }}
              >
                or text us →
              </a>
            </div>
          </div>
          <div className="md:col-span-7">
            <figure>
              <img
                src={heroEditorial}
                alt="Black sports car in a quiet concrete studio"
                width={1920}
                height={1280}
                className="w-full"
              />
              <figcaption className="mt-3 flex items-center justify-between text-[11px] uppercase tracking-[0.25em] opacity-60">
                <span>Plate 01 — Customer detail, in for service</span>
                <span>16120 Hwy 6</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Quote band */}
      <section className="mx-auto max-w-5xl px-8 py-28 text-center">
        <p className="font-serif-2 text-3xl italic leading-snug md:text-5xl">
          "Took my Corvette in for a tune up and they treated it like their
          own. Knowledgeable on the custom side too."
        </p>
        <p className="mt-6 text-xs uppercase tracking-[0.3em] opacity-60">
          Ashley P. — C6 Corvette
        </p>
      </section>

      {/* Services */}
      <section
        id="services"
        className="border-t"
        style={{ borderColor: "var(--edit-rule)" }}
      >
        <div className="mx-auto max-w-7xl px-8 py-20">
          <div className="flex items-end justify-between border-b pb-6"
            style={{ borderColor: "var(--edit-rule)" }}>
            <h2 className="font-serif-2 text-4xl italic md:text-6xl">
              The work.
            </h2>
            <span className="text-xs uppercase tracking-[0.3em] opacity-60">
              §02
            </span>
          </div>
          <div className="grid gap-x-12 gap-y-10 md:grid-cols-2 md:py-12">
            {SHOP.services.map((s, i) => (
              <article
                key={s}
                className="grid grid-cols-[auto_1fr] gap-6 border-b pb-8"
                style={{ borderColor: "var(--edit-rule)" }}
              >
                <span className="font-serif-2 text-3xl italic opacity-50">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-serif-2 text-2xl">{s}</h3>
                  <p className="mt-2 text-sm leading-relaxed opacity-75">
                    {SERVICE_BLURBS[s] ??
                      "Done with care, explained in plain English."}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Plates */}
      <section id="work" className="mx-auto max-w-7xl px-8 pb-20">
        <div
          className="flex items-end justify-between border-b pb-6"
          style={{ borderColor: "var(--edit-rule)" }}
        >
          <h2 className="font-serif-2 text-4xl italic md:text-6xl">
            Recent plates.
          </h2>
          <span className="text-xs uppercase tracking-[0.3em] opacity-60">
            §03
          </span>
        </div>
        <div className="mt-10 grid gap-10 md:grid-cols-2">
          <figure>
            <img
              src={corvette}
              alt="Customer Corvette in for service"
              width={1600}
              height={1067}
              loading="lazy"
              className="w-full"
            />
            <figcaption className="mt-3 text-xs uppercase tracking-[0.25em] opacity-60">
              Plate 02 — C6, tune up & inspection
            </figcaption>
          </figure>
          <figure>
            <img
              src={mustang}
              alt="Customer Mustang in for service"
              width={1600}
              height={1067}
              loading="lazy"
              className="w-full"
            />
            <figcaption className="mt-3 text-xs uppercase tracking-[0.25em] opacity-60">
              Plate 03 — Mustang, suspension refresh
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Reviews */}
      <section
        id="words"
        className="border-t"
        style={{ borderColor: "var(--edit-rule)" }}
      >
        <div className="mx-auto max-w-7xl px-8 py-20">
          <div
            className="flex items-end justify-between border-b pb-6"
            style={{ borderColor: "var(--edit-rule)" }}
          >
            <h2 className="font-serif-2 text-4xl italic md:text-6xl">
              In their words.
            </h2>
            <a
              href={SHOP.reviewsHref}
              target="_blank"
              rel="noreferrer"
              className="text-xs uppercase tracking-[0.3em] underline-offset-4 hover:underline"
            >
              Read on Google →
            </a>
          </div>
          <div className="mt-10 grid gap-10 md:grid-cols-2">
            {SHOP.reviews.map((r) => (
              <blockquote
                key={r.name}
                className="border-l-2 pl-6"
                style={{ borderColor: "var(--edit-accent)" }}
              >
                <StarRow n={r.rating} />
                <p className="mt-4 font-serif-2 text-2xl italic leading-snug">
                  "{r.text}"
                </p>
                <footer className="mt-4 text-xs uppercase tracking-[0.25em] opacity-60">
                  {r.name} — {r.vehicle}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Visit */}
      <section
        className="border-t"
        style={{ borderColor: "var(--edit-rule)" }}
      >
        <div className="mx-auto grid max-w-7xl gap-10 px-8 py-20 md:grid-cols-3">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] opacity-60">
              Visit
            </p>
            <p className="mt-3 font-serif-2 text-2xl">{SHOP.address}</p>
            <a
              href={SHOP.mapsHref}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-block text-sm underline-offset-4 hover:underline"
            >
              Open in Maps →
            </a>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] opacity-60">
              Hours
            </p>
            <p className="mt-3 font-serif-2 text-2xl">{SHOP.hours}</p>
            <p className="mt-1 text-sm opacity-70">
              Walk-ins welcome. Appointments preferred.
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] opacity-60">
              Contact
            </p>
            <a
              href={SHOP.phoneHref}
              className="mt-3 block font-serif-2 text-2xl"
              style={{ color: "var(--edit-accent)" }}
            >
              {SHOP.phone}
            </a>
            <a
              href={SHOP.smsHref}
              className="text-sm underline-offset-4 hover:underline"
            >
              Send a text →
            </a>
          </div>
        </div>
        <div
          className="border-t"
          style={{ borderColor: "var(--edit-rule)" }}
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-8 text-xs uppercase tracking-[0.3em] opacity-60">
            <span>© {SHOP.name}</span>
            <span>{SHOP.city}</span>
          </div>
        </div>
      </section>

      <ConceptSwitcher current="editorial" />
    </main>
  );
}
