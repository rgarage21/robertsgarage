import { createFileRoute, Link } from "@tanstack/react-router";
import heroTrust from "@/assets/hero-trust.jpg";
import {
  ConceptSwitcher,
  SERVICE_BLURBS,
  SHOP,
  StarRow,
} from "@/components/shop-shared";

export const Route = createFileRoute("/trust")({
  head: () => ({
    meta: [
      {
        title: `${SHOP.name} — Honest Auto Repair in Rosharon, TX`,
      },
      {
        name: "description",
        content:
          "Your dependable neighborhood mechanic in Rosharon, TX. Electrical, A/C, suspension, brakes, tune ups. Fair prices, straight talk, work that lasts.",
      },
      {
        property: "og:title",
        content: `${SHOP.name} — Honest Auto Repair`,
      },
      {
        property: "og:description",
        content:
          "Trusted neighborhood mechanic on Hwy 6 in Rosharon, TX. Family-friendly, fairly priced.",
      },
    ],
  }),
  component: TrustConcept,
});

function TrustConcept() {
  return (
    <main
      className="min-h-screen"
      style={{ background: "var(--trust-cream)", color: "var(--trust-navy)" }}
    >
      {/* TOP STRIP */}
      <div
        className="w-full text-center font-medium"
        style={{ background: "var(--trust-navy)", color: "var(--trust-cream)" }}
      >
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-1 px-6 py-2 text-xs sm:flex-row">
          <span>📍 {SHOP.address}</span>
          <span>🕒 {SHOP.hours}</span>
          <a href={SHOP.phoneHref} className="font-bold">
            ☎ {SHOP.phone}
          </a>
        </div>
      </div>

      {/* NAV */}
      <nav className="border-b" style={{ borderColor: "color-mix(in oklab, var(--trust-navy) 15%, transparent)" }}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <div
              className="flex h-11 w-11 items-center justify-center rounded-full font-stencil text-xl text-white"
              style={{ background: "var(--trust-red)" }}
            >
              R
            </div>
            <div>
              <div className="font-display text-base font-bold leading-tight">
                {SHOP.name}
              </div>
              <div className="text-xs" style={{ color: "var(--trust-steel)" }}>
                Family-run · {SHOP.city}
              </div>
            </div>
          </div>
          <div className="hidden items-center gap-7 text-sm font-medium md:flex">
            <a href="#services">Services</a>
            <a href="#why">Why us</a>
            <a href="#reviews">Reviews</a>
            <a href="#contact">Contact</a>
          </div>
          <a
            href={SHOP.phoneHref}
            className="rounded-md px-4 py-2 text-sm font-bold text-white shadow-sm transition hover:opacity-90"
            style={{ background: "var(--trust-red)" }}
          >
            Call Today
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
          <div>
            <span
              className="inline-block rounded-full px-3 py-1 text-xs font-semibold"
              style={{
                background: "color-mix(in oklab, var(--trust-red) 15%, transparent)",
                color: "var(--trust-red)",
              }}
            >
              Trusted on Hwy 6 since day one
            </span>
            <h1 className="mt-5 font-display text-5xl font-bold leading-[1.05] md:text-6xl">
              The honest mechanic
              <br />
              your neighbors{" "}
              <span style={{ color: "var(--trust-red)" }}>recommend.</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg" style={{ color: "var(--trust-steel)" }}>
              Specializing in Electrical, A/C, Suspension, Brakes, Tune Ups and
              much more. We treat your truck like it's our own — fair prices,
              clear answers, no surprises.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={SHOP.phoneHref}
                className="rounded-md px-6 py-3 font-bold text-white shadow-md transition hover:opacity-90"
                style={{ background: "var(--trust-red)" }}
              >
                Call {SHOP.phone}
              </a>
              <a
                href={SHOP.smsHref}
                className="rounded-md border-2 px-6 py-3 font-bold transition hover:bg-white"
                style={{
                  borderColor: "var(--trust-navy)",
                  color: "var(--trust-navy)",
                }}
              >
                Text Us
              </a>
            </div>

            <div className="mt-8 flex items-center gap-4 text-sm" style={{ color: "var(--trust-steel)" }}>
              <div style={{ color: "var(--trust-red)" }}>
                <StarRow />
              </div>
              <span>
                <strong style={{ color: "var(--trust-navy)" }}>5.0</strong> on
                Google · loved by Rosharon drivers
              </span>
            </div>
          </div>

          <div className="relative">
            <div
              className="absolute -inset-3 rounded-3xl"
              style={{ background: "var(--trust-navy)", opacity: 0.08 }}
            />
            <img
              src={heroTrust}
              alt="Friendly mechanic shaking customer's hand at the shop"
              width={1920}
              height={1080}
              className="relative aspect-[5/4] w-full rounded-3xl object-cover shadow-xl"
            />
            <div
              className="absolute -bottom-6 -left-6 max-w-[230px] rounded-2xl bg-white p-4 shadow-xl"
            >
              <div style={{ color: "var(--trust-red)" }}>
                <StarRow />
              </div>
              <p className="mt-2 text-sm font-medium">
                "Honest, fast, and fair. Won't take my truck anywhere else."
              </p>
              <p className="mt-1 text-xs" style={{ color: "var(--trust-steel)" }}>
                — Marcus T., Rosharon
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section id="why" className="py-20" style={{ background: "white" }}>
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-widest" style={{ color: "var(--trust-red)" }}>
              Why drivers stay with us
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
              Repairs done right. Prices that make sense.
            </h2>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              {
                t: "Straight talk",
                d: "We explain what's wrong in plain English — and what can wait.",
                icon: "🤝",
              },
              {
                t: "Fair pricing",
                d: "Up-front quotes. No surprise charges when you pick up your vehicle.",
                icon: "💵",
              },
              {
                t: "Work that lasts",
                d: "Quality parts and careful work, backed by our word.",
                icon: "🔧",
              },
            ].map((f) => (
              <div
                key={f.t}
                className="rounded-2xl border p-7 transition hover:shadow-md"
                style={{
                  borderColor:
                    "color-mix(in oklab, var(--trust-navy) 12%, transparent)",
                  background: "var(--trust-cream)",
                }}
              >
                <div className="text-3xl">{f.icon}</div>
                <h3 className="mt-4 font-display text-xl font-bold">{f.t}</h3>
                <p className="mt-2" style={{ color: "var(--trust-steel)" }}>
                  {f.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest" style={{ color: "var(--trust-red)" }}>
                Services
              </p>
              <h2 className="mt-2 font-display text-4xl font-bold md:text-5xl">
                Everything your vehicle needs.
              </h2>
            </div>
            <p className="max-w-md" style={{ color: "var(--trust-steel)" }}>
              From a quick tune up to a tough electrical diagnostic, we've got
              you covered. Don't see it listed? Just call — chances are we do
              that too.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {SHOP.services.map((s) => (
              <div
                key={s}
                className="rounded-xl border bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-md"
                style={{
                  borderColor:
                    "color-mix(in oklab, var(--trust-navy) 12%, transparent)",
                }}
              >
                <div
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-sm font-bold text-white"
                  style={{ background: "var(--trust-navy)" }}
                >
                  ✓
                </div>
                <h3 className="mt-3 font-display text-lg font-bold">{s}</h3>
                <p className="mt-1 text-sm" style={{ color: "var(--trust-steel)" }}>
                  {SERVICE_BLURBS[s] ?? "Done right the first time."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-20" style={{ background: "white" }}>
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest" style={{ color: "var(--trust-red)" }}>
                Google reviews
              </p>
              <h2 className="mt-2 font-display text-4xl font-bold md:text-5xl">
                What neighbors are saying.
              </h2>
            </div>
            <a
              href={SHOP.reviewsHref}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-bold underline-offset-4 hover:underline"
              style={{ color: "var(--trust-red)" }}
            >
              Read all reviews on Google →
            </a>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {SHOP.reviews.map((r) => (
              <figure
                key={r.name}
                className="rounded-2xl border p-6"
                style={{
                  borderColor:
                    "color-mix(in oklab, var(--trust-navy) 12%, transparent)",
                  background: "var(--trust-cream)",
                }}
              >
                <div style={{ color: "var(--trust-red)" }}>
                  <StarRow n={r.rating} />
                </div>
                <blockquote className="mt-3 text-lg" style={{ color: "var(--trust-navy)" }}>
                  "{r.text}"
                </blockquote>
                <figcaption
                  className="mt-4 text-sm font-semibold"
                  style={{ color: "var(--trust-steel)" }}
                >
                  {r.name} · {r.vehicle}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20" style={{ background: "var(--trust-navy)", color: "var(--trust-cream)" }}>
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest" style={{ color: "var(--trust-red)" }}>
              Get in touch
            </p>
            <h2 className="mt-2 font-display text-4xl font-bold md:text-5xl">
              Ready when you are.
            </h2>
            <p className="mt-4 max-w-md opacity-80">
              Give us a call or text and we'll get you on the schedule. Walk-ins
              welcome too — pull right up to the bay on Hwy 6.
            </p>

            <div className="mt-8 space-y-4 text-lg">
              <a href={SHOP.phoneHref} className="flex items-center gap-3 hover:underline">
                <span>📞</span> {SHOP.phone}
              </a>
              <a href={SHOP.emailHref} className="flex items-center gap-3 hover:underline">
                <span>✉️</span> {SHOP.email}
              </a>
              <a
                href={SHOP.mapsHref}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 hover:underline"
              >
                <span>📍</span> {SHOP.address}
              </a>
              <div className="flex items-center gap-3 opacity-80">
                <span>🕒</span> {SHOP.hours}
              </div>
            </div>

            <div className="mt-8">
              <Link
                to="/contact"
                className="text-sm font-bold underline-offset-4 hover:underline"
                style={{ color: "var(--trust-red)" }}
              >
                Full contact page →
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border-4 shadow-xl" style={{ borderColor: "var(--trust-cream)" }}>
            <iframe
              title="Shop location map"
              src="https://www.google.com/maps?q=16120+Hwy+6+Rosharon+TX+77583&output=embed"
              className="h-full min-h-[360px] w-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <footer
        className="py-6 text-center text-sm"
        style={{ background: "var(--trust-navy)", color: "color-mix(in oklab, var(--trust-cream) 70%, transparent)" }}
      >
        © {new Date().getFullYear()} {SHOP.name} · {SHOP.city}
      </footer>

      <ConceptSwitcher current="trust" />
    </main>
  );
}
