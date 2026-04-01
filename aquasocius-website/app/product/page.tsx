import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/effects/ScrollReveal";
import ProductModel from "@/components/3d/ProductModelWrapper";
import { Gauge, Zap, ArrowUpDown, Ruler, Weight, Cpu, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Product",
  description: "The Aquasocius machine — specifications, installation, and modular scale.",
};

const specs = [
  { label: "Flow Rate",          value: "50–200 GPM",       icon: Gauge  },
  { label: "Power Consumption",  value: "2.5–7.5 kW",       icon: Zap    },
  { label: "Operating Pressure", value: "40–80 PSI",         icon: ArrowUpDown },
  { label: "Inlet / Outlet",     value: '2" – 6" NPT',       icon: Ruler  },
  { label: "Dimensions",         value: '48" × 24" × 36"',   icon: Ruler  },
  { label: "Weight",             value: "385 lbs (dry)",     icon: Weight },
  { label: "Control System",     value: "PLC with IoT Gateway", icon: Cpu },
  { label: "Certifications",     value: "NSF/ANSI 61, UL Listed", icon: Award },
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
        <div className="max-w-4xl mx-auto w-full text-center">
          <ScrollReveal direction="up" threshold={0.1}>
            <div className="mb-16">
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
                <div style={{ height: 1, background: "linear-gradient(to right, transparent, rgba(0,212,255,0.4))", width: 60 }} />
                <span
                  className="text-xs font-semibold uppercase tracking-widest"
                  style={{ color: "var(--secondary)" }}
                >
                  The Machine
                </span>
                <div style={{ height: 1, background: "linear-gradient(to left, transparent, rgba(0,212,255,0.4))", width: 60 }} />
              </div>
              <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.05, marginBottom: "1.5rem" }}>
                Engineered for<br />
                <span className="gradient-text-animated">Scale</span>
              </h1>
              <p className="text-lg max-w-xl mx-auto" style={{ color: "var(--text-secondary)", fontWeight: 300 }}>
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
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
              <div style={{ height: 1, background: "linear-gradient(to right, transparent, rgba(0,212,255,0.4))", width: 60 }} />
              <span
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: "var(--secondary)" }}
              >
                Specifications
              </span>
            </div>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.1 }}>
              Technical Data Sheet
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.1} threshold={0.1}>
          <div className="max-w-2xl mx-auto glass rounded-card overflow-hidden">
            {specs.map(({ label, value, icon: Icon }, i) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "1rem 1.5rem",
                  borderBottom: i < specs.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <Icon size={14} style={{ color: "var(--secondary)", opacity: 0.65, flexShrink: 0 }} />
                  <span style={{
                    fontSize: "0.78rem",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    color: "var(--text-secondary)",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}>
                    {label}
                  </span>
                </div>
                <span style={{
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  fontFamily: "var(--font-jetbrains-mono, monospace)",
                  color: "#fff",
                  textAlign: "right",
                }}>
                  {value}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </Section>

      {/* Installation */}
      <Section>
        <ScrollReveal direction="up" threshold={0.1}>
          <div className="text-center mb-12">
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
              <div style={{ height: 1, background: "linear-gradient(to right, transparent, rgba(0,212,255,0.4))", width: 80 }} />
              <span
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: "var(--secondary)" }}
              >
                Installation
              </span>
              <div style={{ height: 1, background: "linear-gradient(to left, transparent, rgba(0,212,255,0.4))", width: 80 }} />
            </div>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "1rem" }}>
              Designed to Integrate
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--text-secondary)", fontWeight: 300 }}>
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
                <p style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1 }} className="gradient-text mb-4">
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
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
              <div style={{ height: 1, background: "linear-gradient(to right, transparent, rgba(0,212,255,0.4))", width: 80 }} />
              <span
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: "var(--secondary)" }}
              >
                Scalability
              </span>
              <div style={{ height: 1, background: "linear-gradient(to left, transparent, rgba(0,212,255,0.4))", width: 80 }} />
            </div>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.1 }}>
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
            <p style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: "1.5rem" }}>
              Ready to spec Aquasocius for your property?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact/">Request Specifications</Button>
              <Button href="/contact/" variant="secondary">Schedule Site Assessment</Button>
            </div>
          </div>
        </ScrollReveal>
      </Section>
    </>
  );
}
