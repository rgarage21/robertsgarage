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
  "Engine Diagnostics": "Using scanners to interpret \"check engine\" lights and sensor data.",
  "Fluid Services": "Checking/flushing coolants, brake fluid, transmission fluid, and power steering fluid.",
  "HVAC System": "Air conditioning and heating system repair and recharging.",
  "Suspension & Steering": "Shock absorber, strut, and steering linkage repair.",
  "Battery & Electrical": "Testing battery health, replacing batteries, and checking charging systems.",
  "Brake Service": "Inspection and replacement of brake pads, rotors, calipers, and fluid.",
  "Tune Up": "Replace spark plugs, filters, belts, and coils as needed.",
  "Headlight Restoration": "Polish cloudy headlights for clearer night visibility.",
};

export { SHOP };
