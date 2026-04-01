import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/effects/ScrollReveal";
import BuildingIcon from "@/components/icons/BuildingIcon";
import HighRiseIcon from "@/components/icons/HighRiseIcon";
import HotelIcon from "@/components/icons/HotelIcon";

export const metadata: Metadata = {
  title: "Markets",
  description: "Aquasocius solutions for commercial, residential, and hospitality properties.",
};

const segments = [
  {
    id: "commercial",
    label: "Commercial Properties",
    headline: "Protect Your Assets. Reduce Operating Costs.",
    Icon: BuildingIcon,
    painPoints: "Rising chemical treatment costs. Aging water infrastructure. Regulatory compliance pressure. Tenant health expectations.",
    valueProps: [
      "40% average reduction in water treatment costs",
      "Zero chemical storage requirements",
      "Real-time water quality monitoring",
    ],
    flip: false,
  },
  {
    id: "residential",
    label: "Residential Buildings",
    headline: "The Water Quality Residents Deserve",
    Icon: HighRiseIcon,
    painPoints: "Hard water complaints. Inconsistent quality across floors. Chemical treatment concerns from health-conscious residents.",
    valueProps: [
      "Consistent purity from penthouse to lobby",
      "Chemical-free — a selling point for health-conscious tenants",
      "Reduced maintenance on building plumbing",
    ],
    flip: true,
  },
  {
    id: "hospitality",
    label: "Hospitality Properties",
    headline: "A Guest Experience That Starts with Water",
    Icon: HotelIcon,
    painPoints: "Guest expectations for premium amenities. Brand reputation tied to facility quality. High water volume across rooms, kitchens, pools, and spa.",
    valueProps: [
      "Luxury water quality in every room",
      "Spa and pool systems without harsh chemicals",
      "A differentiator guests notice and remember",
    ],
    flip: false,
  },
];

export default function MarketsPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-32 pb-20 px-6 overflow-hidden"
        style={{ backgroundColor: "var(--primary)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 70% 50% at 50% 40%, rgba(0,212,255,0.07) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-7xl mx-auto">
          <ScrollReveal direction="up" threshold={0.1}>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: "var(--secondary)" }}
            >
              Solutions
            </p>
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              Purpose-Built for<br />
              <span className="gradient-text-animated">Premium Properties</span>
            </h1>
            <p className="text-lg max-w-2xl" style={{ color: "var(--text-secondary)" }}>
              Aquasocius serves the buildings where water quality is non-negotiable.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Segments */}
      {segments.map(({ id, label, headline, Icon, painPoints, valueProps, flip }, idx) => (
        <section
          key={id}
          className="py-20 md:py-28 px-6"
          style={{ backgroundColor: idx % 2 === 1 ? "var(--surface)" : "var(--primary)" }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
              {/* Visual */}
              <ScrollReveal direction={flip ? "right" : "left"} threshold={0.1} className={flip ? "md:order-2" : ""}>
                <div
                  className="rounded-card flex flex-col items-center justify-center"
                  style={{
                    aspectRatio: "4/3",
                    background: "linear-gradient(135deg, rgba(15,29,47,0.9), rgba(0,212,255,0.04))",
                    border: "1px solid rgba(0,212,255,0.1)",
                  }}
                >
                  <div style={{ color: "rgba(0,212,255,0.25)" }}>
                    <Icon className="w-24 h-24" />
                  </div>
                </div>
              </ScrollReveal>

              {/* Content */}
              <ScrollReveal direction={flip ? "left" : "right"} delay={0.1} threshold={0.1} className={flip ? "md:order-1" : ""}>
                <p
                  className="text-xs font-semibold uppercase tracking-widest mb-3"
                  style={{ color: "var(--secondary)" }}
                >
                  {label}
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
                  {headline}
                </h2>

                {/* Pain points */}
                <div
                  className="mb-8 pl-4 py-3"
                  style={{ borderLeft: "2px solid rgba(0,212,255,0.3)" }}
                >
                  <p className="text-sm italic leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    {painPoints}
                  </p>
                </div>

                {/* Value props */}
                <ul className="flex flex-col gap-3 mb-8">
                  {valueProps.map((vp) => (
                    <li key={vp} className="flex items-start gap-3">
                      <span
                        className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: "var(--secondary)" }}
                      />
                      <span className="text-sm text-white">{vp}</span>
                    </li>
                  ))}
                </ul>

                <Button href="/contact" variant="secondary">
                  Learn More →
                </Button>
              </ScrollReveal>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <Section>
        <ScrollReveal direction="up" threshold={0.2}>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-bold text-white mb-6">
              Which property type is yours?
            </p>
            <Button href="/contact">
              Tell Us About Your Building →
            </Button>
          </div>
        </ScrollReveal>
      </Section>
    </>
  );
}
