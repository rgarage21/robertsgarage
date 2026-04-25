import { Link } from "@tanstack/react-router";
import { SHOP } from "@/lib/shop";

type ConceptKey = "custom" | "trust" | "editorial" | "race" | "shop";

const CONCEPTS: { key: ConceptKey; to: string; label: string }[] = [
  { key: "custom", to: "/custom", label: "01" },
  { key: "trust", to: "/trust", label: "02" },
  { key: "editorial", to: "/editorial", label: "03" },
  { key: "race", to: "/race", label: "04" },
  { key: "shop", to: "/shop", label: "05" },
];

export function ConceptSwitcher({ current }: { current: ConceptKey }) {
  return (
    <div className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2 rounded-full border border-white/20 bg-black/70 px-2 py-1.5 text-xs backdrop-blur-md">
      <div className="flex items-center gap-1 text-white">
        <Link
          to="/"
          className="rounded-full px-3 py-1 text-white/70 hover:text-white"
        >
          ← All
        </Link>
        {CONCEPTS.map((c) => (
          <Link
            key={c.key}
            to={c.to}
            className={
              "rounded-full px-3 py-1 transition " +
              (current === c.key
                ? "bg-white text-black"
                : "text-white/70 hover:text-white")
            }
          >
            {c.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export function StarRow({ n = 5 }: { n?: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${n} out of 5 stars`}>
      {Array.from({ length: n }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          className="h-4 w-4 fill-current"
          aria-hidden
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export const SERVICE_BLURBS: Record<string, string> = {
  Electrical: "Shorts, parasitic draws, no-starts, wiring repair.",
  "A/C & Heating": "Recharges, compressor swaps, blower & heater core.",
  Suspension: "Struts, shocks, ball joints, alignments — smooth ride back.",
  Brakes: "Pads, rotors, calipers, lines, ABS diagnostics.",
  "Tune Ups": "Plugs, coils, fluids, filters — keep it running right.",
  Diagnostics: "Check-engine lights decoded, no guesswork.",
  "Engine Work": "Timing, gaskets, leaks, full rebuilds.",
  "Custom Builds": "Performance, audio, lighting, suspension — your vision.",
};

export { SHOP };
