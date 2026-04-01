import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Markets",
  description: "Aquasocius solutions for commercial, residential, and hospitality properties.",
};

const segments = [
  {
    id: "commercial",
    label: "Commercial",
    desc: "Office towers, mixed-use developments, and corporate campuses demand water systems that match their standard of excellence.",
    painPoints: [
      "Tenant health and wellness expectations",
      "ESG and sustainability reporting requirements",
      "Reducing chemical procurement and handling",
      "Long-term OPEX reduction",
    ],
  },
  {
    id: "residential",
    label: "Residential",
    desc: "High-rise and large multi-family residential buildings can offer premium water quality as a genuine amenity.",
    painPoints: [
      "Resident health consciousness",
      "Differentiating premium units",
      "Eliminating water quality complaints",
      "Building certification requirements",
    ],
  },
  {
    id: "hospitality",
    label: "Hospitality",
    desc: "Hotels and resorts can deliver a guest experience where even the water reflects their commitment to quality.",
    painPoints: [
      "Guest experience differentiation",
      "Spa and F&B water quality standards",
      "Brand positioning as premium property",
      "Reducing reliance on bottled water",
    ],
  },
];

export default function MarketsPage() {
  return (
    <>
      <section className="pt-32 pb-24 px-6 bg-primary">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#00D4FF] mb-3">Solutions</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Built for<br /><span className="gradient-text">premium properties</span>
          </h1>
        </div>
      </section>

      {segments.map((seg, i) => (
        <Section key={seg.id} className={i % 2 === 1 ? "bg-surface" : ""}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className={i % 2 === 1 ? "md:order-2" : ""}>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#00D4FF] mb-3">{seg.label}</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{seg.desc}</h2>
              <ul className="space-y-3 mb-8">
                {seg.painPoints.map((pt) => (
                  <li key={pt} className="flex items-start gap-3">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#00D4FF] flex-shrink-0" />
                    <span className="text-[#94A3B8] text-sm">{pt}</span>
                  </li>
                ))}
              </ul>
              <Button href="/contact" variant="secondary">Talk to Us</Button>
            </div>
            <div className={`rounded-card border border-white/5 bg-primary h-80 flex items-center justify-center ${i % 2 === 1 ? "md:order-1" : ""}`}>
              <p className="text-[#94A3B8] text-sm">[ {seg.label} building image ]</p>
            </div>
          </div>
        </Section>
      ))}
    </>
  );
}
