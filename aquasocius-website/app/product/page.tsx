import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/effects/ScrollReveal";
import ProductModel from "@/components/3d/ProductModelWrapper";

export const metadata: Metadata = {
  title: "Product",
  description: "The Aquasocius machine — specifications, installation, and modular scale.",
};

const specs = [
  { label: "Flow Rate",          value: "50–200 GPM" },
  { label: "Power Consumption",  value: "2.5–7.5 kW" },
  { label: "Operating Pressure", value: "40–80 PSI" },
  { label: "Inlet / Outlet",     value: '2" – 6" NPT' },
  { label: "Dimensions",         value: '48" × 24" × 36"' },
  { label: "Weight",             value: "385 lbs (dry)" },
  { label: "Control System",     value: "PLC with IoT Gateway" },
  { label: "Certifications",     value: "NSF/ANSI 61, UL Listed" },
];

export default function ProductPage() {
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
            background:
              "radial-gradient(ellipse 70% 60% at 50% 40%, rgba(0,212,255,0.08) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-7xl mx-auto">
          <ScrollReveal direction="up" threshold={0.1}>
            <div className="max-w-3xl mb-16">
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ color: "var(--secondary)" }}
              >
                The Machine
              </p>
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
                Engineered for<br />
                <span className="gradient-text-animated">Scale</span>
              </h1>
              <p className="text-lg" style={{ color: "var(--text-secondary)" }}>
                A modular cavitation system designed for seamless integration into commercial, residential, and hospitality water infrastructure.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2} threshold={0.1}>
            <ProductModel />
          </ScrollReveal>
        </div>
      </section>

      {/* Specifications */}
      <Section className="bg-surface">
        <ScrollReveal direction="up" threshold={0.1}>
          <div className="mb-10">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "var(--secondary)" }}
            >
              Specifications
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Technical Data Sheet
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.1} stagger={0.06} className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {specs.map(({ label, value }) => (
            <div
              key={label}
              className="flex items-center justify-between py-4 px-2"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
            >
              <span
                className="text-sm uppercase tracking-wider"
                style={{ fontFamily: "var(--font-mono, monospace)", color: "var(--text-secondary)" }}
              >
                {label}
              </span>
              <span
                className="text-base font-semibold text-white"
                style={{ fontFamily: "var(--font-mono, monospace)" }}
              >
                {value}
              </span>
            </div>
          ))}
        </ScrollReveal>
      </Section>

      {/* Installation */}
      <Section>
        <ScrollReveal direction="up" threshold={0.1}>
          <div className="text-center mb-12">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "var(--secondary)" }}
            >
              Installation
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Designed to Integrate
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--text-secondary)" }}>
              The Aquasocius system connects directly to existing building water infrastructure with minimal disruption.
            </p>
          </div>
        </ScrollReveal>

        {/* 3-step flow */}
        <div className="relative">
          <ScrollReveal direction="up" delay={0.1} stagger={0.12} className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {[
              {
                step: "01",
                title: "Site Assessment",
                desc: "Our engineering team surveys your building's water system and designs the optimal integration point.",
              },
              {
                step: "02",
                title: "Installation",
                desc: "The modular system installs in-line with existing plumbing. Typical installation completes in under one day.",
              },
              {
                step: "03",
                title: "Commissioning",
                desc: "System calibration, water quality verification, and IoT dashboard activation. You're live.",
              },
            ].map(({ step, title, desc }) => (
              <div key={step} className="glass rounded-card p-7 relative">
                <p className="text-5xl font-bold gradient-text mb-4" style={{ lineHeight: 1 }}>
                  {step}
                </p>
                <h3 className="text-lg font-semibold text-white mb-3">{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {desc}
                </p>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </Section>

      {/* Modular Scale */}
      <Section className="bg-surface">
        <ScrollReveal direction="up" threshold={0.1}>
          <div className="text-center mb-12">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "var(--secondary)" }}
            >
              Scalability
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              From Single Buildings to Campuses
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.1} stagger={0.12} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              tier: "Single Unit",
              range: "1 building, up to 200 units",
              svgSize: { w: 32, h: 48 },
              opacity: 0.5,
            },
            {
              tier: "Multi-Unit",
              range: "Building complexes, 200–1,000 units",
              svgSize: { w: 48, h: 64 },
              opacity: 0.75,
            },
            {
              tier: "Campus Scale",
              range: "Multi-building portfolios, 1,000+ units",
              svgSize: { w: 64, h: 80 },
              opacity: 1,
            },
          ].map(({ tier, range, svgSize, opacity }) => (
            <div
              key={tier}
              className="glass rounded-card p-8 text-center flex flex-col items-center gap-4"
            >
              {/* Building SVG silhouette */}
              <svg
                viewBox="0 0 40 60"
                width={svgSize.w}
                height={svgSize.h}
                style={{ opacity, color: "var(--secondary)" }}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <rect x="5" y="10" width="30" height="48" />
                <rect x="15" y="2" width="10" height="10" />
                {[15, 22, 30, 37, 44].map((y) => (
                  <g key={y}>
                    <rect x="10" y={y} width="5" height="4" strokeWidth="1" />
                    <rect x="25" y={y} width="5" height="4" strokeWidth="1" />
                  </g>
                ))}
              </svg>
              <div>
                <p className="font-bold text-white mb-1">{tier}</p>
                <p className="text-sm" style={{ color: "var(--text-secondary)" }}>{range}</p>
              </div>
            </div>
          ))}
        </ScrollReveal>
      </Section>

      {/* Product CTA */}
      <Section>
        <ScrollReveal direction="up" threshold={0.2}>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-bold text-white mb-6">
              Ready to spec Aquasocius for your property?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact">Request Specifications</Button>
              <Button href="/contact" variant="secondary">Schedule Site Assessment</Button>
            </div>
          </div>
        </ScrollReveal>
      </Section>
    </>
  );
}
