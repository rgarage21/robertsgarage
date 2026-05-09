import { createFileRoute, Link } from "@tanstack/react-router";
import { SHOP } from "@/lib/shop";

const ACCENT = "oklch(0.62 0.24 27)";
const ACCENT_GLOW = "oklch(0.7 0.22 25)";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: `Contact — ${SHOP.name}` },
      {
        name: "description",
        content: `Call, text, or visit ${SHOP.name} at ${SHOP.address}. Phone ${SHOP.phone}.`,
      },
      { property: "og:title", content: `Contact — ${SHOP.name}` },
      {
        property: "og:description",
        content: `Reach ${SHOP.name} in ${SHOP.city}.`,
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Top utility bar */}
      <div className="border-b border-white/10 text-center text-[11px] font-semibold uppercase tracking-[0.25em] text-white/70">
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
            <span className="text-2xl font-black tracking-tight">
              <span style={{ color: ACCENT }}>Roberts</span> Garage
            </span>
            <span className="hidden text-xs font-medium text-white/40 sm:inline">
              · Rosharon, TX
            </span>
          </Link>
          <nav className="hidden items-center gap-7 text-sm font-medium text-white/70 md:flex">
            <Link to="/" className="hover:text-white">Home</Link>
            <Link to="/contact" className="text-white">Contact</Link>
          </nav>
          <a
            href={SHOP.phoneHref}
            className="rounded-full px-4 py-2 text-sm font-bold text-white transition hover:opacity-90"
            style={{ background: ACCENT, boxShadow: `0 0 24px -6px ${ACCENT_GLOW}` }}
          >
            Call {SHOP.phone}
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute -left-32 top-1/3 h-96 w-96 rounded-full opacity-20 blur-3xl"
          style={{ background: ACCENT }}
        />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
          <div>
            <p
              className="text-xs font-bold uppercase tracking-[0.25em]"
              style={{ color: ACCENT_GLOW }}
            >
              Contact
            </p>
            <h1 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              Let's get your{" "}
              <span
                style={{
                  background: `linear-gradient(180deg, ${ACCENT_GLOW}, ${ACCENT})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                vehicle handled.
              </span>
            </h1>
            <p className="mt-5 max-w-md text-white/70">
              Specializing in Electrical, A/C, Suspension, Brakes, Tune Ups and
              much more. Give us a call or text — we answer fast.
            </p>

            <dl className="mt-8 space-y-5 text-lg">
              <Row label="Phone / Text">
                <a className="font-medium text-white hover:underline" href={SHOP.phoneHref}>
                  {SHOP.phone}
                </a>
                <span className="ml-2 text-sm text-white/50">
                  (<a className="hover:text-white hover:underline" href={SHOP.smsHref}>send a text</a>)
                </span>
              </Row>
              <Row label="Email">
                <a className="font-medium text-white hover:underline" href={SHOP.emailHref}>
                  {SHOP.email}
                </a>
              </Row>
              <Row label="Address">
                <a
                  className="font-medium text-white hover:underline"
                  href={SHOP.mapsHref}
                  target="_blank"
                  rel="noreferrer"
                >
                  {SHOP.address}
                </a>
              </Row>
              <Row label="Hours">
                <ul className="space-y-1 text-base">
                  {SHOP.hoursList.map((h) => (
                    <li key={h.day} className="grid grid-cols-[110px_1fr] gap-2">
                      <span className="font-semibold text-white/90">{h.day}</span>
                      <span className={h.time === "Closed" ? "text-white/40" : "text-white/80"}>
                        {h.time}
                      </span>
                    </li>
                  ))}
                </ul>
              </Row>
            </dl>

            <a
              href={SHOP.reviewsHref}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-block text-sm font-bold underline-offset-4 hover:underline"
              style={{ color: ACCENT_GLOW }}
            >
              ★ Read our Google reviews →
            </a>
          </div>

          <form
            className="relative h-fit overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-neutral-950 to-neutral-900 p-7"
            onSubmit={(e) => {
              e.preventDefault();
              const f = new FormData(e.currentTarget);
              const body = encodeURIComponent(
                `Name: ${f.get("name")}\nPhone: ${f.get("phone")}\nEmail: ${f.get("email")}\nVehicle: ${f.get("vehicle")}\n\n${f.get("message")}`,
              );
              window.location.href = `${SHOP.emailHref}?subject=Service%20request&body=${body}`;
            }}
          >
            <div
              className="absolute inset-x-0 top-0 h-px"
              style={{ background: `linear-gradient(90deg, transparent, ${ACCENT_GLOW}, transparent)` }}
            />
            <h2 className="text-xl font-black tracking-tight">Send a message</h2>
            <p className="mt-1 text-sm text-white/60">
              Tell us what's going on and we'll get back the same day.
            </p>

            <div className="mt-6 grid gap-4">
              <Field name="name" label="Your name" />
              <Field name="phone" label="Phone" type="tel" />
              <Field name="email" label="Email" type="email" />
              <Field name="vehicle" label="Vehicle (year, make, model)" />
              <Field name="message" label="What's going on?" textarea />
              <button
                type="submit"
                className="mt-2 rounded-full px-5 py-3 text-sm font-bold text-white transition hover:opacity-90"
                style={{ background: ACCENT, boxShadow: `0 0 32px -8px ${ACCENT_GLOW}` }}
              >
                Send request
              </button>
            </div>
          </form>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
          <span>© {SHOP.name} — {SHOP.city}</span>
          <span>{SHOP.address}</span>
        </div>
      </footer>
    </main>
  );
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[100px_1fr] items-baseline gap-3">
      <dt className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">
        {label}
      </dt>
      <dd>{children}</dd>
    </div>
  );
}

function Field({
  name,
  label,
  type = "text",
  textarea,
}: {
  name: string;
  label: string;
  type?: string;
  textarea?: boolean;
}) {
  const cls =
    "w-full rounded-md border border-white/15 bg-white/5 px-3 py-2 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-white/40 focus:bg-white/10";
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-bold uppercase tracking-[0.2em] text-white/50">
        {label}
      </span>
      {textarea ? (
        <textarea name={name} required rows={5} className={cls} />
      ) : (
        <input name={name} type={type} required className={cls} />
      )}
    </label>
  );
}
