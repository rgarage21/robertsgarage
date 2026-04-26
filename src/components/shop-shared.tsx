import { SHOP } from "@/lib/shop";

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
