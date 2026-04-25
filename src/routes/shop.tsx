import { createFileRoute, Link } from "@tanstack/react-router";
import heroShop from "@/assets/hero-shop.jpg";
import corvette from "@/assets/corvette.jpg";
import mustang from "@/assets/mustang.jpg";
import {
  ConceptSwitcher,
  SERVICE_BLURBS,
  SHOP,
  StarRow,
} from "@/components/shop-shared";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: `${SHOP.name} — Fix It Right. Build It Loud.` },
      {
        name: "description",
        content:
          "Roberts Garage in Rosharon, TX. Electrical, A/C, suspension, brakes, tune-ups, and custom builds. Call or text — fast, honest, and done right.",
      },
      { property: "og:title", content: `${SHOP.name} — Fix It Right. Build It Loud.` },
      { property: "og:description", content: "Auto repair & custom builds in Rosharon, TX." },
      { property: "og:image", content: heroShop },
      { name: "twitter:image", content: heroShop },
    ],
  }),
  component: ShopConcept,
});

const NAV = [
  { label: "Home", to: "#top" },
  { label: "Services", to: "#services" },
  { label: "Builds", to: "#builds" },
  { label: "Reviews", to: "#reviews" },
  { label: "Contact", to: "#visit" },
];

function ShopConcept() {
  return (
    <main
      id="top"
      className="min-h-screen bg-[#f3f4f6] text-black"
      style={{ fontFamily: "var(--font-archivo)" }}
    >
      {/* Hazard top strip with center pill */}
      <div className="hazard-stripe relative h-12">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-black px-5 py-1.5 text-[11px] font-black uppercase tracking-[0.25em] text-white">
            <span style={{ color: "#f5c518" }}>Direction E</span> · Hwy 6 ·{" "}
            <Link to="/" className="underline underline-offset-4">Switch Preview</Link>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="border-b border-black/10 bg-[#fafafa]">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-5">
          <Link to="/" className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center bg-black font-stencil text-2xl text-[#f5c518]">
              R
            </span>
            <span className="font-archivo text-base font-black uppercase tracking-[0.18em]">
              Roberts Garage
            </span>
          </Link>
          <nav className="hidden items-center gap-9 text-[13px] font-black uppercase tracking-[0.18em] md:flex">
            {NAV.map((n, i) => (
              <a
                key={n.label}
                href={n.to}
                className={
                  "relative pb-1 " +
                  (i === 0
                    ? "after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:bg-[#f5c518]"
                    : "hover:text-black/70")
                }
              >
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href={SHOP.phoneHref}
            className="flex items-center gap-2 border-2 border-black bg-[#f5c518] px-4 py-2 text-[13px] font-black uppercase tracking-[0.18em] shadow-[4px_4px_0_0_#000] transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
          >
            <span aria-hidden>📞</span> Call / Text
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b border-black/10">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-12 md:py-20">
          <div className="md:col-span-7">
            <span className="inline-block bg-black px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.25em] text-white">
              Rosharon, TX · Open Today
            </span>
            <h1 className="mt-7 font-archivo text-[64px] font-black uppercase leading-[0.92] tracking-tight md:text-[120px]">
              Fix it{" "}
              <span className="bg-[#f5c518] px-3 box-decoration-clone">
                right.
              </span>
              <br />
              Build it{" "}
              <em className="not-italic md:italic">loud.</em>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-black/75">
              Electrical. A/C. Suspension. Brakes. Tune-ups. Custom builds. No
              run-around, no upsells — just real fixes from a real shop on Hwy
              6. Call or text and we'll get you on the schedule.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href={SHOP.phoneHref}
                className="bg-black px-6 py-3.5 text-sm font-black uppercase tracking-[0.18em] text-white shadow-[4px_4px_0_0_#f5c518] transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
              >
                {SHOP.phone}
              </a>
              <a
                href={SHOP.smsHref}
                className="border-2 border-black px-6 py-3.5 text-sm font-black uppercase tracking-[0.18em] hover:bg-black hover:text-white"
              >
                Text the shop
              </a>
              <span className="text-xs font-bold uppercase tracking-widest text-black/50">
                Avg. reply &lt; 1 hr
              </span>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="relative">
              <div className="absolute -left-3 -top-3 h-full w-full bg-[#f5c518]" aria-hidden />
              <img
                src={heroShop}
                alt="Red car with hood up at Roberts Garage"
                width={1600}
                height={1280}
                className="relative w-full border-2 border-black object-cover"
              />
              <div className="absolute -bottom-3 -right-3 bg-black px-3 py-1.5 text-[11px] font-black uppercase tracking-widest text-[#f5c518]">
                In the bay · today
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee strip */}
      <div className="border-b-2 border-black bg-black py-4 text-[#f5c518] overflow-hidden">
        <div className="flex animate-[marquee_30s_linear_infinite] gap-12 whitespace-nowrap font-stencil text-3xl tracking-wider">
          {Array.from({ length: 2 }).flatMap((_, k) =>
            SHOP.services.map((s) => (
              <span key={`${k}-${s}`} className="flex items-center gap-12">
                {s}
                <span className="text-white">✦</span>
              </span>
            ))
          )}
        </div>
      </div>

      {/* Services */}
      <section id="services" className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.3em] text-black/60">
                / 01 — What we do
              </p>
              <h2 className="mt-3 font-archivo text-5xl font-black uppercase tracking-tight md:text-6xl">
                Services, no fluff.
              </h2>
            </div>
            <a
              href={SHOP.phoneHref}
              className="text-[13px] font-black uppercase tracking-[0.18em] underline underline-offset-[6px] decoration-[#f5c518] decoration-[3px]"
            >
              Don't see it? Call us →
            </a>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SHOP.services.map((s, i) => (
              <article
                key={s}
                className="group border-2 border-black bg-white p-6 transition hover:bg-[#f5c518]"
              >
                <div className="flex items-center justify-between">
                  <span className="font-stencil text-3xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="grid h-7 w-7 place-items-center border-2 border-black text-sm">
                    →
                  </span>
                </div>
                <h3 className="mt-6 font-archivo text-xl font-black uppercase">
                  {s}
                </h3>
                <p className="mt-2 text-sm text-black/70 group-hover:text-black">
                  {SERVICE_BLURBS[s] ?? "Done right, the first time."}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Builds */}
      <section id="builds" className="border-b border-black/10 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.3em] text-black/60">
                / 02 — From the shop
              </p>
              <h2 className="mt-3 font-archivo text-5xl font-black uppercase tracking-tight md:text-6xl">
                Recent builds.
              </h2>
            </div>
            <span className="text-[13px] font-black uppercase tracking-[0.18em] text-black/60">
              Custom · repair · daily drivers
            </span>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <BuildCard image={corvette} title="C6 Corvette" tag="Tune-up + inspection" />
            <BuildCard image={mustang} title="Mustang GT" tag="Suspension refresh" />
            <BuildCard image={heroShop} title="Daily driver" tag="Diagnostics" />
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.3em] text-black/60">
                / 03 — From the neighbors
              </p>
              <h2 className="mt-3 font-archivo text-5xl font-black uppercase tracking-tight md:text-6xl">
                What folks say.
              </h2>
            </div>
            <a
              href={SHOP.reviewsHref}
              target="_blank"
              rel="noreferrer"
              className="text-[13px] font-black uppercase tracking-[0.18em] underline underline-offset-[6px] decoration-[#f5c518] decoration-[3px]"
            >
              Read on Google →
            </a>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {SHOP.reviews.map((r) => (
              <article
                key={r.name}
                className="border-2 border-black bg-white p-6"
              >
                <div className="flex items-center justify-between text-black">
                  <StarRow n={r.rating} />
                  <span className="text-[10px] font-black uppercase tracking-widest text-black/50">
                    Verified · Google
                  </span>
                </div>
                <p className="mt-4 text-lg leading-snug">"{r.text}"</p>
                <footer className="mt-5 flex items-center justify-between border-t-2 border-black/10 pt-4 text-xs font-black uppercase tracking-widest">
                  <span>{r.name}</span>
                  <span className="bg-black px-2 py-1 text-[#f5c518]">
                    {r.vehicle}
                  </span>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Visit / CTA */}
      <section id="visit" className="bg-black text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-3">
          <div className="md:col-span-2">
            <p className="text-[11px] font-black uppercase tracking-[0.3em] text-[#f5c518]">
              / 04 — Visit the shop
            </p>
            <h2 className="mt-3 font-archivo text-5xl font-black uppercase tracking-tight md:text-7xl">
              Roll in.<br />Or just{" "}
              <span className="bg-[#f5c518] px-3 text-black box-decoration-clone">
                call.
              </span>
            </h2>
            <p className="mt-6 max-w-md text-white/70">
              {SHOP.address}. Walk-ins welcome — appointments get you in faster.
            </p>
          </div>
          <div className="space-y-5 border-2 border-[#f5c518] p-6">
            <div>
              <p className="text-[11px] font-black uppercase tracking-widest text-[#f5c518]">
                Phone / Text
              </p>
              <a href={SHOP.phoneHref} className="font-stencil text-4xl">
                {SHOP.phone}
              </a>
            </div>
            <div>
              <p className="text-[11px] font-black uppercase tracking-widest text-[#f5c518]">
                Hours
              </p>
              <p className="font-archivo text-lg font-black">{SHOP.hours}</p>
            </div>
            <a
              href={SHOP.mapsHref}
              target="_blank"
              rel="noreferrer"
              className="block border-2 border-[#f5c518] bg-[#f5c518] px-4 py-3 text-center text-sm font-black uppercase tracking-widest text-black hover:bg-transparent hover:text-[#f5c518]"
            >
              Get Directions →
            </a>
          </div>
        </div>
        <div className="hazard-stripe h-6" />
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6 text-[11px] font-black uppercase tracking-widest text-white/60 md:flex-row md:items-center md:justify-between">
          <span>© {SHOP.name} · {SHOP.city}</span>
          <span>Built with grease & coffee</span>
        </div>
      </section>

      <ConceptSwitcher current="shop" />

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </main>
  );
}

function BuildCard({
  image,
  title,
  tag,
}: {
  image: string;
  title: string;
  tag: string;
}) {
  return (
    <article className="group relative overflow-hidden border-2 border-black bg-black">
      <img
        src={image}
        alt={title}
        width={1200}
        height={900}
        loading="lazy"
        className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105 group-hover:opacity-80"
      />
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/90 to-transparent p-4 text-white">
        <div>
          <p className="text-[10px] font-black uppercase tracking-widest text-[#f5c518]">
            {tag}
          </p>
          <h3 className="font-archivo text-xl font-black uppercase">{title}</h3>
        </div>
        <span className="grid h-8 w-8 place-items-center bg-[#f5c518] text-black">
          →
        </span>
      </div>
    </article>
  );
}
