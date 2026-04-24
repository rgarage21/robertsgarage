import { Link } from "@tanstack/react-router";
import { SHOP } from "@/lib/shop";

export function ConceptSwitcher({ current }: { current: "custom" | "trust" }) {
  return (
    <div className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2 rounded-full border border-white/20 bg-black/70 px-2 py-1.5 text-xs backdrop-blur-md">
      <div className="flex items-center gap-1 text-white">
        <Link
          to="/"
          className="rounded-full px-3 py-1 text-white/70 hover:text-white"
        >
          ← All concepts
        </Link>
        <Link
          to="/custom"
          className={
            "rounded-full px-3 py-1 transition " +
            (current === "custom"
              ? "bg-white text-black"
              : "text-white/70 hover:text-white")
          }
        >
          01 Custom
        </Link>
        <Link
          to="/trust"
          className={
            "rounded-full px-3 py-1 transition " +
            (current === "trust"
              ? "bg-white text-black"
              : "text-white/70 hover:text-white")
          }
        >
          02 Trust
        </Link>
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
