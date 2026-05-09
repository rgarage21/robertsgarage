import { createFileRoute, Link } from "@tanstack/react-router";
import heroNeighborhood from "@/assets/hero-neighborhood.jpg";
import { SERVICE_BLURBS, SHOP, StarRow } from "@/components/shop-shared";

const ACCENT = "oklch(0.58 0.24 27)"; // same race red, used as accent only
const INK = "oklch(0.18 0.01 30)";

export const Route = createFileRoute("/neighborhood-red")({
  head: () => ({
    meta: [
      { title: `${SHOP.name} — Honest Auto Repair in Rosharon, TX` },
      {
        name: "description",
        content:
          "Your neighborhood mechanic in Rosharon. Brakes, A/C, diagnostics, tune ups — fair pricing, clear explanations, work that lasts.",
      },
      { property: "og:title", content: `${SHOP.name} — Honest Auto Repair in Rosharon, TX` },
      {
        property: "og:description",
        content: "Friendly, dependable auto repair on Hwy 6. Brakes, A/C, diagnostics, tune ups.",
      },
      { property: "og:image", content: heroNeighborhood },
      { name: "twitter:image", content: heroNeighborhood },
    ],
  }),
  component: NeighborhoodRed,
});

const PROMISES = [
  {
    t: "We explain what we did",
    d: "No vague bills, no upsells. You'll know exactly what was wrong and why it cost what it cost.",
  },
  {
    t: "Fair, written estimates",
    d: "Approve the work before we start. If something else turns up, we call before touching it.",
  },
  {
    t: "Work that lasts",
    d: "Quality parts, careful labor, and a warranty on most repairs. Built to hold up.",
  },
];

const COMMON = [
  { q: "Car won't start?", a: "Battery, starter, or a deeper electrical issue — we'll find it the first time." },
  { q: "A/C blowing warm?", a: "Recharges, leaks, compressor swaps. Cold air, same day on most jobs." },
  { q: "Check engine light?", a: "Real diagnostics — not just a code read. We tell you what it actually means." },
  { q: "Squealing brakes?", a: "Pads, rotors, calipers, lines. Quiet, confident stops every time." },
];

function NeighborhoodRed() {
  return (
    <main
      className="min-h-screen bg-white text-neutral-900"
      style={{ color: INK }}
    >
      {/* Top utility bar */}
      <div
        className="text-center text-xs font-semibold tracking-wide text-white"
        style={{ background: ACCENT }}
      >
        <div className="mx-auto max-w-7xl px-6 py-2">
          {SHOP.hours} · Call or text — we answer fast
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-baseline gap-2">
            <span className="text-2xl font-black tracking-tight">
              <span style={{ color: ACCENT }}>Roberts</span> Garage
            </span>
            <span className="hidden text-xs font-medium text-neutral-500 sm:inline">
              · Rosharon, TX
            </span>
          </Link>
          <nav className="hidden items-center gap-7 text-sm font-medium text-neutral-700 md:flex">
            <a href="#services" className="hover:text-neutral-900">Services</a>
            <a href="#promise" className="hover:text-neutral-900">Our promise</a>
            <a href="#reviews" className="hover:text-neutral-900">Reviews</a>
            <a href="#visit" className="hover:text-neutral-900">Visit</a>
            <Link to="/contact" className="hover:text-neutral-900">Contact</Link>
          </nav>
          <a
            href={SHOP.phoneHref}
            className="rounded-full px-4 py-2 text-sm font-bold text-white shadow-sm transition hover:opacity-90"
            style={{ background: ACCENT }}
          >
            Call {SHOP.phone}
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-neutral-200">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
          <div>
            <h1 className="mt-5 text-5xl font-black leading-[1.05] tracking-tight md:text-6xl">
              The shop your{" "}
              <span style={{ color: ACCENT }}>neighbors trust.</span>
            </h1>
            <p className="mt-5 max-w-lg text-lg text-neutral-600">
              Diagnostics, brakes, A/C, and more — done right, with honest pricing and no surprises.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={SHOP.phoneHref}
                className="rounded-full px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:opacity-90"
                style={{ background: ACCENT }}
              >
                Call {SHOP.phone}
              </a>
              <a
                href={SHOP.smsHref}
                className="rounded-full border border-neutral-300 px-6 py-3 text-sm font-bold text-neutral-900 transition hover:border-neutral-900"
              >
                Text for a quote
              </a>
            </div>
            <div className="mt-8 flex items-center gap-3 text-sm text-neutral-600">
              <span style={{ color: ACCENT }}>
                <StarRow n={5} />
              </span>
              <span>
                <strong className="text-neutral-900">5.0</strong> on Google · trusted by drivers across Brazoria County
              </span>
            </div>
          </div>

          <div className="relative">
            <div
              className="absolute -left-3 -top-3 h-full w-full rounded-2xl"
              style={{ background: ACCENT }}
            />
            <img
              src={heroNeighborhood}
              alt="Friendly mechanic at Roberts Garage in Rosharon, TX"
              width={1920}
              height={1280}
              className="relative h-full w-full rounded-2xl object-cover shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Promise strip */}
      <section id="promise" className="bg-neutral-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p
                className="text-xs font-bold uppercase tracking-[0.2em]"
                style={{ color: ACCENT }}
              >
                Our promise
              </p>
              <h2 className="mt-2 max-w-xl text-4xl font-black tracking-tight md:text-5xl">
                The shop your neighbor told you about.
              </h2>
            </div>
            <p className="max-w-md text-neutral-600">
              We treat every car like it's parked in our own driveway. That means clear communication, fair prices, and repairs we'd trust on our own family.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {PROMISES.map((p, i) => (
              <article
                key={p.t}
                className="rounded-2xl border border-neutral-200 bg-white p-7 shadow-sm"
              >
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-black text-white"
                  style={{ background: ACCENT }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-5 text-xl font-bold">{p.t}</h3>
                <p className="mt-2 text-neutral-600">{p.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p
                className="text-xs font-bold uppercase tracking-[0.2em]"
                style={{ color: ACCENT }}
              >
                What we do
              </p>
              <h2 className="mt-2 text-4xl font-black tracking-tight md:text-5xl">
                Everyday repair. Done right.
              </h2>
            </div>
            <p className="max-w-md text-neutral-600">
              Same-day on most jobs. If we can't fix it today, you'll know before you leave the counter.
            </p>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-200 md:grid-cols-2 lg:grid-cols-4">
            {SHOP.services.map((s) => (
              <article key={s} className="bg-white p-6 transition hover:bg-neutral-50">
                <div
                  className="h-1 w-8 rounded-full"
                  style={{ background: ACCENT }}
                />
                <h3 className="mt-4 text-lg font-bold">{s}</h3>
                <p className="mt-2 text-sm text-neutral-600">
                  {SERVICE_BLURBS[s] ?? "Pro-level work, fair pricing, fast turnaround."}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Common questions / problems */}
      <section className="bg-neutral-900 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <p
            className="text-xs font-bold uppercase tracking-[0.2em]"
            style={{ color: ACCENT }}
          >
            Sound familiar?
          </p>
          <h2 className="mt-2 max-w-2xl text-4xl font-black tracking-tight md:text-5xl">
            We hear these every week — and we fix them.
          </h2>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {COMMON.map((c) => (
              <div
                key={c.q}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="text-xl font-bold" style={{ color: ACCENT }}>
                  {c.q}
                </h3>
                <p className="mt-2 text-white/80">{c.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <a
              href={SHOP.phoneHref}
              className="inline-flex rounded-full px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:opacity-90"
              style={{ background: ACCENT }}
            >
              Talk to a real mechanic — {SHOP.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p
                className="text-xs font-bold uppercase tracking-[0.2em]"
                style={{ color: ACCENT }}
              >
                Neighbors are talking
              </p>
              <h2 className="mt-2 text-4xl font-black tracking-tight md:text-5xl">
                Real reviews from real Rosharon drivers.
              </h2>
            </div>
            <a
              href={SHOP.reviewsHref}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-bold underline-offset-4 hover:underline"
              style={{ color: ACCENT }}
            >
              Read all reviews on Google →
            </a>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {SHOP.reviews.map((r) => (
              <article
                key={r.name}
                className="rounded-2xl border border-neutral-200 bg-white p-7 shadow-sm"
              >
                <span style={{ color: ACCENT }}>
                  <StarRow n={r.rating} />
                </span>
                <p className="mt-4 text-lg leading-snug text-neutral-800">
                  "{r.text}"
                </p>
                <footer className="mt-5 flex items-center justify-between border-t border-neutral-200 pt-4 text-sm">
                  <span className="font-bold">{r.name}</span>
                  <span className="text-neutral-500">{r.vehicle}</span>
                </footer>
              </article>
            ))}
          </div>
          <div className="mt-12 flex flex-col items-center gap-3 rounded-2xl border border-dashed border-neutral-300 bg-neutral-50 p-8 text-center">
            <p className="text-lg font-bold">Had a good experience with us?</p>
            <p className="max-w-md text-sm text-neutral-600">
              A quick review on Google helps your neighbors find an honest shop.
            </p>
            <a
              href={SHOP.writeReviewHref}
              target="_blank"
              rel="noreferrer"
              className="mt-2 rounded-full px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:opacity-90"
              style={{ background: ACCENT }}
            >
              Leave a review on Google
            </a>
          </div>
        </div>
      </section>

      {/* Visit / CTA */}
      <section id="visit" className="bg-neutral-50 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2">
          <div>
            <p
              className="text-xs font-bold uppercase tracking-[0.2em]"
              style={{ color: ACCENT }}
            >
              Visit the shop
            </p>
            <h2 className="mt-2 text-4xl font-black tracking-tight md:text-5xl">
              Easy to find. Easier to trust.
            </h2>
            <p className="mt-4 max-w-md text-neutral-600">
              We're on Hwy 6 in Rosharon. Call or text and we'll get you on the schedule, take a look, and tell you straight what your car needs — and what it doesn't.
            </p>
            <dl className="mt-8 space-y-4 text-base">
              <div>
                <dt className="text-xs font-bold uppercase tracking-widest text-neutral-500">Address</dt>
                <dd className="mt-1 font-medium">{SHOP.address}</dd>
              </div>
              <div>
                <dt className="text-xs font-bold uppercase tracking-widest text-neutral-500">Phone</dt>
                <dd className="mt-1 font-medium">
                  <a href={SHOP.phoneHref} className="hover:underline">{SHOP.phone}</a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-bold uppercase tracking-widest text-neutral-500">Hours</dt>
                <dd className="mt-1 font-medium">{SHOP.hours}</dd>
              </div>
            </dl>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={SHOP.mapsHref}
                target="_blank"
                rel="noreferrer"
                className="rounded-full px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:opacity-90"
                style={{ background: ACCENT }}
              >
                Get directions
              </a>
              <Link
                to="/contact"
                className="rounded-full border border-neutral-300 px-6 py-3 text-sm font-bold text-neutral-900 transition hover:border-neutral-900"
              >
                Send a message
              </Link>
            </div>
          </div>

          <div
            className="relative overflow-hidden rounded-2xl border border-neutral-200 p-10"
            style={{ background: "white" }}
          >
            <div
              className="absolute inset-x-0 top-0 h-2"
              style={{ background: ACCENT }}
            />
            <p
              className="text-xs font-bold uppercase tracking-[0.2em]"
              style={{ color: ACCENT }}
            >
              The deal
            </p>
            <h3 className="mt-3 text-3xl font-black leading-tight">
              Honest mechanics, on your block.
            </h3>
            <ul className="mt-6 space-y-4 text-neutral-700">
              {[
                "Free estimates before any work begins",
                "Warranty on most parts and labor",
                "Diagnostics done right the first time",
              ].map((line) => (
                <li key={line} className="flex items-start gap-3">
                  <span
                    className="mt-1 inline-block h-2 w-2 flex-shrink-0 rounded-full"
                    style={{ background: ACCENT }}
                  />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
            <a
              href={SHOP.phoneHref}
              className="mt-8 inline-flex rounded-full px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:opacity-90"
              style={{ background: ACCENT }}
            >
              Call {SHOP.phone}
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-neutral-200 bg-white py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 text-sm text-neutral-500 md:flex-row md:items-center md:justify-between">
          <span>© {SHOP.name} — {SHOP.city}</span>
          <span>{SHOP.address}</span>
        </div>
      </footer>

      {/* Variant switcher */}
      <div className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2 rounded-full border border-neutral-200 bg-white/95 px-2 py-1.5 text-xs shadow-lg backdrop-blur-md">
        <div className="flex items-center gap-1">
          <Link to="/" className="rounded-full px-3 py-1 text-neutral-500 hover:text-neutral-900">
            ← All
          </Link>
          <Link
            to="/race-red"
            className="flex items-center gap-2 rounded-full px-3 py-1 text-neutral-600 hover:text-neutral-900"
          >
            <span className="inline-block h-2 w-2 rounded-full" style={{ background: ACCENT }} />
            Race Red
          </Link>
          <Link
            to="/neighborhood-red"
            className="flex items-center gap-2 rounded-full bg-neutral-900 px-3 py-1 text-white"
          >
            <span className="inline-block h-2 w-2 rounded-full" style={{ background: ACCENT }} />
            Neighborhood
          </Link>
          <Link
            to="/neighborhood-dark"
            className="flex items-center gap-2 rounded-full px-3 py-1 text-neutral-600 hover:text-neutral-900"
          >
            <span className="inline-block h-2 w-2 rounded-full" style={{ background: ACCENT }} />
            Neighborhood Dark
          </Link>
        </div>
      </div>
    </main>
  );
}
