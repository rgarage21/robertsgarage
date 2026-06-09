import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { SHOP } from "@/lib/shop";

const ACCENT = "oklch(0.62 0.24 27)";
const ACCENT_GLOW = "oklch(0.7 0.22 25)";
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xjgdrdrd";

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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    vehicle: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Message sent! We'll get back to you soon.");
        setSubmitted(true);
        setFormData({ name: "", email: "", phone: "", vehicle: "", message: "" });
      } else {
        const data = await response.json().catch(() => null);
        toast.error(
          data?.error || "Something went wrong. Please try again later."
        );
      }
    } catch {
      toast.error("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
      <header className="sticky top-0 z-40 border-b border-white/10 bg-black">
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
          className="pointer-events-none absolute -left-32 top-1/3 h-96 w-96 rounded-full opacity-10"
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
            onSubmit={handleSubmit}
          >
            <div
              className="absolute inset-x-0 top-0 h-px"
              style={{ background: `linear-gradient(90deg, transparent, ${ACCENT_GLOW}, transparent)` }}
            />
            {submitted ? (
              <div className="py-8 text-center">
                <div
                  className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full text-lg font-bold"
                  style={{ background: ACCENT, color: "white" }}
                >
                  ✓
                </div>
                <h2 className="text-xl font-black tracking-tight">Message sent!</h2>
                <p className="mt-2 text-sm text-white/60">
                  Thanks for reaching out. We'll get back to you as soon as possible.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm font-bold underline-offset-4 hover:underline"
                  style={{ color: ACCENT_GLOW }}
                >
                  Send another message →
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-xl font-black tracking-tight">Send a message</h2>
                <p className="mt-1 text-sm text-white/60">
                  Tell us what's going on and we'll get back the same day.
                </p>

                <div className="mt-6 grid gap-4">
                  <Field
                    name="name"
                    label="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <Field
                    name="email"
                    label="Email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <Field
                    name="phone"
                    label="Phone number"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                  <Field
                    name="vehicle"
                    label="Vehicle make & model"
                    value={formData.vehicle}
                    onChange={handleChange}
                  />
                  <Field
                    name="message"
                    label="What's going on?"
                    textarea
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-2 rounded-full px-5 py-3 text-sm font-bold text-white transition hover:opacity-90 disabled:opacity-50"
                    style={{ background: ACCENT, boxShadow: `0 0 32px -8px ${ACCENT_GLOW}` }}
                  >
                    {isSubmitting ? "Sending…" : "Send request"}
                  </button>
                </div>
              </>
            )}
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
  value,
  onChange,
  required,
}: {
  name: string;
  label: string;
  type?: string;
  textarea?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  required?: boolean;
}) {
  const cls =
    "w-full rounded-md border border-white/15 bg-white/5 px-3 py-2 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-white/40 focus:bg-white/10";
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-bold uppercase tracking-[0.2em] text-white/50">
        {label}
      </span>
      {textarea ? (
        <textarea
          name={name}
          required={required}
          rows={5}
          className={cls}
          value={value}
          onChange={onChange}
        />
      ) : (
        <input
          name={name}
          type={type}
          required={required}
          className={cls}
          value={value}
          onChange={onChange}
        />
      )}
    </label>
  );
}
