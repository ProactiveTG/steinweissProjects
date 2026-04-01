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
    iconGradient: "linear-gradient(135deg, rgba(0,212,255,0.15) 0%, rgba(10,22,40,0.9) 100%)",
    iconAccent: "#00D4FF",
    painPoints: [
      "Rising chemical treatment costs",
      "Aging water infrastructure",
      "Regulatory compliance pressure",
      "Tenant health expectations",
    ],
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
    iconGradient: "linear-gradient(135deg, rgba(123,97,255,0.15) 0%, rgba(10,22,40,0.9) 100%)",
    iconAccent: "#7B61FF",
    painPoints: [
      "Hard water complaints",
      "Inconsistent quality across floors",
      "Chemical treatment concerns from health-conscious residents",
    ],
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
    iconGradient: "linear-gradient(135deg, rgba(0,212,255,0.1) 0%, rgba(123,97,255,0.1) 50%, rgba(10,22,40,0.95) 100%)",
    iconAccent: "#00D4FF",
    painPoints: [
      "Guest expectations for premium amenities",
      "Brand reputation tied to facility quality",
      "High water volume across rooms, kitchens, pools, and spa",
    ],
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
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
              <div style={{ height: 1, background: "linear-gradient(to right, transparent, rgba(0,212,255,0.4))", width: 60 }} />
              <span
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: "var(--secondary)" }}
              >
                Solutions
              </span>
            </div>
            <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.05, marginBottom: "1.5rem" }}>
              Purpose-Built for<br />
              <span className="gradient-text-animated">Premium Properties</span>
            </h1>
            <p className="text-lg max-w-2xl" style={{ color: "var(--text-secondary)", fontWeight: 300 }}>
              Aquasocius serves the buildings where water quality is non-negotiable.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Segments */}
      {segments.map(({ id, label, headline, Icon, iconGradient, iconAccent, painPoints, valueProps, flip }, idx) => (
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
                    background: iconGradient,
                    border: `1px solid ${iconAccent}22`,
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div style={{ color: iconAccent, opacity: 0.25 }}>
                    <Icon className="w-24 h-24" />
                  </div>
                  {/* Decorative circles */}
                  {[100, 160, 220].map((size, i) => (
                    <div
                      key={i}
                      style={{
                        position: "absolute",
                        width: size, height: size,
                        borderRadius: "50%",
                        border: `1px solid ${iconAccent}`,
                        opacity: 0.04 + (i * 0.02),
                        top: "50%", left: "50%",
                        transform: "translate(-50%, -50%)",
                        pointerEvents: "none",
                      }}
                    />
                  ))}
                </div>
              </ScrollReveal>

              {/* Content */}
              <ScrollReveal direction={flip ? "left" : "right"} delay={0.1} threshold={0.1} className={flip ? "md:order-1" : ""}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                  <div style={{ height: 1, background: `linear-gradient(to right, transparent, ${iconAccent}60)`, width: 48 }} />
                  <span
                    className="text-xs font-semibold uppercase tracking-widest"
                    style={{ color: iconAccent }}
                  >
                    {label}
                  </span>
                </div>
                <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "1.5rem" }}>
                  {headline}
                </h2>

                {/* Pain points */}
                <div
                  className="mb-8 pl-4 py-3"
                  style={{ borderLeft: `2px solid ${iconAccent}40` }}
                >
                  <ul className="flex flex-col gap-1.5">
                    {painPoints.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-sm italic" style={{ color: "var(--text-secondary)" }}>
                        <span style={{ color: iconAccent, opacity: 0.6, flexShrink: 0, marginTop: "0.1rem" }}>—</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Value props */}
                <ul className="flex flex-col gap-3 mb-8">
                  {valueProps.map((vp) => (
                    <li key={vp} className="flex items-start gap-3">
                      <span
                        className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: iconAccent }}
                      />
                      <span className="text-sm text-white">{vp}</span>
                    </li>
                  ))}
                </ul>

                <Button href="/contact/" variant="secondary">
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
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
              <div style={{ height: 1, background: "linear-gradient(to right, transparent, rgba(0,212,255,0.4))", width: 80 }} />
              <span
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: "var(--secondary)" }}
              >
                Get Started
              </span>
              <div style={{ height: 1, background: "linear-gradient(to left, transparent, rgba(0,212,255,0.4))", width: 80 }} />
            </div>
            <p style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: "1.5rem" }}>
              Which property type is yours?
            </p>
            <Button href="/contact/">
              Tell Us About Your Building →
            </Button>
          </div>
        </ScrollReveal>
      </Section>
    </>
  );
}
