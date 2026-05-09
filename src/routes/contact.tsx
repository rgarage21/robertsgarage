import { createFileRoute, Link } from "@tanstack/react-router";
import { SHOP } from "@/lib/shop";

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
    <main className="min-h-screen bg-background text-foreground">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <Link to="/" className="font-display text-base font-bold">
          {SHOP.name}
        </Link>
        <nav className="flex gap-5 text-sm text-muted-foreground">
          <Link to="/race-red" className="hover:text-foreground">Race</Link>
          <Link to="/neighborhood-red" className="hover:text-foreground">Neighborhood</Link>
        </nav>
      </header>

      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-12 md:grid-cols-2 md:py-20">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Contact
          </p>
          <h1 className="mt-2 font-display text-4xl font-bold md:text-5xl">
            Let's get your vehicle handled.
          </h1>
          <p className="mt-4 max-w-md text-muted-foreground">
            Specializing in Electrical, A/C, Suspension, Brakes, Tune Ups and
            much more. Give us a call or text — we answer fast.
          </p>

          <dl className="mt-8 space-y-5 text-lg">
            <Row label="Phone / Text">
              <a className="hover:underline" href={SHOP.phoneHref}>{SHOP.phone}</a>
              <span className="ml-2 text-sm text-muted-foreground">
                (<a className="hover:underline" href={SHOP.smsHref}>send a text</a>)
              </span>
            </Row>
            <Row label="Email">
              <a className="hover:underline" href={SHOP.emailHref}>{SHOP.email}</a>
            </Row>
            <Row label="Address">
              <a
                className="hover:underline"
                href={SHOP.mapsHref}
                target="_blank"
                rel="noreferrer"
              >
                {SHOP.address}
              </a>
            </Row>
            <Row label="Hours">{SHOP.hours}</Row>
          </dl>

          <a
            href={SHOP.reviewsHref}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-block text-sm font-semibold text-primary underline-offset-4 hover:underline"
          >
            ★ Read our Google reviews →
          </a>
        </div>

        <form
          className="rounded-2xl border border-border bg-card p-6 shadow-sm"
          onSubmit={(e) => {
            e.preventDefault();
            const f = new FormData(e.currentTarget);
            const body = encodeURIComponent(
              `Name: ${f.get("name")}\nPhone: ${f.get("phone")}\nVehicle: ${f.get("vehicle")}\n\n${f.get("message")}`,
            );
            window.location.href = `${SHOP.emailHref}?subject=Service%20request&body=${body}`;
          }}
        >
          <h2 className="font-display text-xl font-bold">Send a message</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Tell us what's going on and we'll get back the same day.
          </p>

          <div className="mt-5 grid gap-4">
            <Field name="name" label="Your name" />
            <Field name="phone" label="Phone" type="tel" />
            <Field name="vehicle" label="Vehicle (year, make, model)" />
            <Field name="message" label="What's going on?" textarea />
            <button
              type="submit"
              className="mt-2 rounded-md bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition hover:opacity-90"
            >
              Send request
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[100px_1fr] items-baseline gap-3">
      <dt className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
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
    "w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary";
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
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
