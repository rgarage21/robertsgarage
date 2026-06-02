import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import heroDark from "@/assets/hero-neighborhood-dark.jpg";
import { SERVICE_BLURBS, SHOP, StarRow } from "@/components/shop-shared";
import { getGoogleReviews } from "@/lib/reviews.functions";

const ACCENT = "oklch(0.62 0.24 27)"; // race red, slightly brighter for dark bg
const ACCENT_GLOW = "oklch(0.7 0.22 25)";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${SHOP.name} — Modern Auto Repair · Rosharon, TX` },
      {
        name: "description",
        content:
          "Precision diagnostics, honest pricing, and modern auto repair in Rosharon. Brakes, A/C, electrical, tune ups — done right the first time.",
      },
      { property: "og:title", content: `${SHOP.name} — Modern Auto Repair · Rosharon, TX` },
      {
        property: "og:description",
        content: "Modern, dependable auto repair on Hwy 6. Real diagnostics, fair pricing, lasting work.",
      },
      { property: "og:image", content: heroDark },
      { name: "twitter:image", content: heroDark },
    ],
  }),
  component: NeighborhoodDark,
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


function NeighborhoodDark() {
  const fetchReviews = useServerFn(getGoogleReviews);
  const { data } = useQuery({
    queryKey: ["google-reviews"],
    queryFn: () => fetchReviews(),
    staleTime: 1000 * 60 * 60, // 1 hour
  });
  const reviews =
    data?.source === "google" && data.reviews.length
      ? data.reviews
      : SHOP.reviews;

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Top utility bar */}
      <div
        className="border-b border-white/10 text-center text-[11px] font-semibold uppercase tracking-[0.25em] text-white/70"
      >
        <div className="mx-auto max-w-7xl px-6 py-2">
          <span
            className="mr-2 inline-block h-1.5 w-1.5 translate-y-[-1px] rounded-full"
            style={{ background: ACCENT, boxShadow: `0 0 8px ${ACCENT_GLOW}` }}
          />
          {SHOP.hours} · Call or text — we answer fast
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-black/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-baseline gap-2">
            <span className="font-black tracking-tight text-3xl">
              <span style={{ color: ACCENT }}>Roberts</span> Garage
            </span>
            <span className="hidden text-xs font-medium text-white/40 sm:inline">
              · Rosharon, TX
            </span>
          </Link>
          <nav className="hidden items-center gap-7 text-sm font-medium text-white/70 md:flex">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#reviews" className="hover:text-white">Reviews</a>
            <a href="#visit" className="hover:text-white">Visit</a>
            <Link to="/contact" className="hover:text-white">Contact</Link>
          </nav>
          <div className="flex flex-col items-end gap-1.5 md:flex-row md:items-center md:gap-2">
            <a
              href={SHOP.phoneHref}
              className="whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-bold text-white transition hover:opacity-90 md:px-4 md:py-2 md:text-sm"
              style={{ background: ACCENT, boxShadow: `0 0 24px -6px ${ACCENT_GLOW}` }}
            >
              Call {SHOP.phone}
            </a>
            <Link
              to="/contact"
              className="rounded-full border border-white/25 px-3 py-1.5 text-xs font-bold text-white transition hover:border-white/60 md:hidden"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10">
        <img
          src={heroDark}
          alt="Modern auto repair shop interior at Roberts Garage in Rosharon, TX"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover opacity-50"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.85) 100%)",
          }}
        />
        <div
          className="pointer-events-none absolute -left-32 top-1/3 h-96 w-96 rounded-full opacity-30 blur-3xl"
          style={{ background: ACCENT }}
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 md:py-32 py-[96px] pt-[48px] pb-[48px]">
          <div className="max-w-3xl">
            <h1 className="mt-6 text-5xl font-black leading-[1.02] tracking-tight md:text-7xl">
              The shop your{" "}
              <span
                style={{
                  background: `linear-gradient(180deg, ${ACCENT_GLOW}, ${ACCENT})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                neighbors trust.
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/70">
              Diagnostics, brakes, A/C, and more — done right, with honest pricing and no surprises.
            </p>
            <p className="mt-6 text-sm text-white/60">
              Feel free to call or text for a quote.
            </p>
            <div className="mt-6">
              <a
                href={SHOP.phoneHref}
                className="inline-flex rounded-full px-6 py-3 text-sm font-bold text-white transition hover:opacity-90"
                style={{ background: ACCENT, boxShadow: `0 0 32px -8px ${ACCENT_GLOW}` }}
              >
                Call {SHOP.phone}
              </a>
            </div>
            <div className="mt-9 flex items-center gap-3 text-sm text-white/60">
              <span style={{ color: ACCENT_GLOW }}>
                <StarRow n={5} />
              </span>
              <span>
                <strong className="text-white">5.0</strong> on Google · trusted by drivers across Fort Bend and Brazoria County
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Promise strip */}
      <section id="promise" className="border-b border-white/10 py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p
                className="text-xs font-bold uppercase tracking-[0.25em]"
                style={{ color: ACCENT_GLOW }}
              >
                Our promise
              </p>
              <h2 className="mt-3 max-w-xl text-4xl font-black tracking-tight md:text-5xl">
                Treated like family. Priced like a friend.
              </h2>
            </div>
            <p className="max-w-md text-white/60">
              We treat every car like it's parked in our own driveway — clear communication, fair prices, and repairs we'd trust on our own family.
            </p>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-3">
            {PROMISES.map((p, i) => (
              <article
                key={p.t}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition hover:border-white/20 py-[16px]"
              >
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-black text-white"
                  style={{ background: ACCENT, boxShadow: `0 0 20px -4px ${ACCENT_GLOW}` }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-5 text-xl font-bold">{p.t}</h3>
                <p className="mt-2 text-white/60">{p.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="border-b border-white/10 py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p
                className="text-xs font-bold uppercase tracking-[0.25em]"
                style={{ color: ACCENT_GLOW }}
              >
                Services
              </p>
              <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
                What we fix at Roberts Garage
              </h2>
            </div>
            <p className="max-w-md text-white/60">
              Same-day on most jobs. If we can't fix it today, you'll know before you leave the counter.
            </p>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-4">
            {SHOP.services.map((s) => (
              <article key={s} className="group bg-neutral-950 p-6 transition hover:bg-neutral-900 py-[16px]">
                <div
                  className="h-1 w-8 rounded-full transition-all group-hover:w-16"
                  style={{ background: ACCENT, boxShadow: `0 0 12px ${ACCENT_GLOW}` }}
                />
                <h3 className="mt-4 text-lg font-bold">{s}</h3>
                <p className="mt-2 text-sm text-white/60">
                  {SERVICE_BLURBS[s] ?? "Pro-level work, fair pricing, fast turnaround."}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>


      {/* Reviews */}
      <section id="reviews" className="border-b border-white/10 py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p
                className="text-xs font-bold uppercase tracking-[0.25em]"
                style={{ color: ACCENT_GLOW }}
              >
                Neighbors are talking
              </p>
              <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
                Real reviews from real Rosharon drivers.
              </h2>
            </div>
            <a
              href={SHOP.reviewsHref}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-bold underline-offset-4 hover:underline"
              style={{ color: ACCENT_GLOW }}
            >
              Read all reviews on Google →
            </a>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {reviews.map((r) => (
              <article
                key={r.name}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition hover:border-white/20"
              >
                <span style={{ color: ACCENT_GLOW }}>
                  <StarRow n={r.rating} />
                </span>
                <p className="mt-4 text-lg leading-snug text-white/90">
                  "{r.text}"
                </p>
                <footer className="mt-5 flex items-center justify-between border-t border-white/10 pt-4 text-sm">
                  <span className="font-bold">{r.name}</span>
                  <span className="text-white/50">{r.vehicle}</span>
                </footer>
              </article>
            ))}
          </div>
          <div className="mt-12 flex flex-col items-center gap-3 rounded-2xl border border-dashed border-white/15 bg-white/[0.02] p-8 text-center">
            <p className="text-lg font-bold">Had a good experience with us?</p>
            <p className="max-w-md text-sm text-white/60">
              A quick review on Google helps your neighbors find an honest shop.
            </p>
            <a
              href={SHOP.writeReviewHref}
              target="_blank"
              rel="noreferrer"
              className="mt-2 rounded-full px-6 py-3 text-sm font-bold text-black shadow-sm transition hover:opacity-90"
              style={{ background: ACCENT_GLOW }}
            >
              Leave a review on Google
            </a>
          </div>
        </div>
      </section>

      {/* Visit / CTA */}
      <section id="visit" className="py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div>
            <p
              className="text-xs font-bold uppercase tracking-[0.25em]"
              style={{ color: ACCENT_GLOW }}
            >
              Visit the shop
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              Easy to find. Easier to trust.
            </h2>
            <p className="mt-5 max-w-md text-white/60">
              We're on Hwy 6 in Rosharon. Call or text and we'll get you on the schedule, take a look, and tell you straight what your car needs — and what it doesn't.
            </p>
            <dl className="mt-8 space-y-5 text-base">
              <div>
                <dt className="text-xs font-bold uppercase tracking-widest text-white/40">Address</dt>
                <dd className="mt-1 font-medium text-white/90">{SHOP.address}</dd>
              </div>
              <div>
                <dt className="text-xs font-bold uppercase tracking-widest text-white/40">Phone</dt>
                <dd className="mt-1 font-medium text-white/90">
                  <a href={SHOP.phoneHref} className="hover:underline">{SHOP.phone}</a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-bold uppercase tracking-widest text-white/40">Hours</dt>
                <dd className="mt-1 font-medium text-white/90">{SHOP.hours}</dd>
              </div>
            </dl>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={SHOP.mapsHref}
                target="_blank"
                rel="noreferrer"
                className="rounded-full px-6 py-3 text-sm font-bold text-white transition hover:opacity-90"
                style={{ background: ACCENT, boxShadow: `0 0 32px -8px ${ACCENT_GLOW}` }}
              >
                Get directions
              </a>
              <Link
                to="/contact"
                className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-bold text-white transition hover:border-white/50"
              >
                Send a message
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
          <span>© {SHOP.name} — {SHOP.city}</span>
          <span>{SHOP.address}</span>
          <nav className="flex items-center gap-4 text-xs uppercase tracking-widest text-white/40">
            <span className="text-white/30">Other concepts:</span>
            <Link to="/race-red" className="hover:text-white">Race Red</Link>
            <Link to="/neighborhood-red" className="hover:text-white">Neighborhood Red</Link>
          </nav>
        </div>
      </footer>
    </main>
  );
}
