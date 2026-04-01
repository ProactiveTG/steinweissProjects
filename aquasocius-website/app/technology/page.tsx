import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/effects/ScrollReveal";
import CavitationDiagram from "@/components/diagrams/CavitationDiagramWrapper";
import VortexLogo from "@/components/brand/VortexLogo";

export const metadata: Metadata = {
  title: "Technology",
  description: "Hydrodynamic cavitation water purification — the science behind Aquasocius.",
};

const tableRows = [
  {
    feature: "Chemical additives required",
    aq: { val: "No",       icon: "✓", type: "good" },
    chem: { val: "Yes",      icon: "✗", type: "bad" },
    uv:   { val: "No",       icon: "✓", type: "good" },
    ro:   { val: "No",       icon: "✓", type: "good" },
  },
  {
    feature: "Removes dissolved contaminants",
    aq: { val: "Yes",      icon: "✓", type: "good" },
    chem: { val: "Partial", icon: "~", type: "mid" },
    uv:   { val: "No",      icon: "✗", type: "bad" },
    ro:   { val: "Yes",     icon: "✓", type: "good" },
  },
  {
    feature: "Destroys pathogens",
    aq: { val: "Yes",      icon: "✓", type: "good" },
    chem: { val: "Yes",     icon: "✓", type: "good" },
    uv:   { val: "Yes",     icon: "✓", type: "good" },
    ro:   { val: "No",      icon: "✗", type: "bad" },
  },
  {
    feature: "Water waste generated",
    aq: { val: "None",     icon: "✓", type: "good" },
    chem: { val: "Moderate",icon: "✗", type: "bad" },
    uv:   { val: "None",    icon: "✓", type: "good" },
    ro:   { val: "High",    icon: "✗", type: "bad" },
  },
  {
    feature: "Energy consumption",
    aq: { val: "Low",      icon: "✓", type: "good" },
    chem: { val: "Low",     icon: "✓", type: "good" },
    uv:   { val: "Low",     icon: "✓", type: "good" },
    ro:   { val: "High",    icon: "✗", type: "bad" },
  },
  {
    feature: "Ongoing consumables",
    aq: { val: "None",     icon: "✓", type: "good" },
    chem: { val: "Chemicals",icon: "✗", type: "bad" },
    uv:   { val: "UV bulbs",icon: "~", type: "mid" },
    ro:   { val: "Membranes",icon: "✗", type: "bad" },
  },
  {
    feature: "Mineral retention",
    aq: { val: "Controlled",icon: "✓", type: "good" },
    chem: { val: "Variable", icon: "~", type: "mid" },
    uv:   { val: "Yes",      icon: "✓", type: "good" },
    ro:   { val: "Stripped", icon: "✗", type: "bad" },
  },
];

const iconColor = (type: string) =>
  type === "good" ? "#10B981" : type === "bad" ? "#EF4444" : "#F59E0B";

export default function TechnologyPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-[70vh] flex items-center px-6 pt-32 pb-20 overflow-hidden"
        style={{ backgroundColor: "var(--primary)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(0,212,255,0.07) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-4xl mx-auto w-full text-center">
          <ScrollReveal direction="up" threshold={0.1}>
            <div className="mb-16">
              <div style={{ display: "flex", justifyContent: "center", marginBottom: "1.5rem" }}>
                <VortexLogo size={40} animate />
              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
                <div style={{ height: 1, background: "linear-gradient(to right, transparent, rgba(0,212,255,0.4))", width: 60 }} />
                <span
                  className="text-xs font-semibold uppercase tracking-widest"
                  style={{ color: "var(--secondary)" }}
                >
                  The Science
                </span>
                <div style={{ height: 1, background: "linear-gradient(to left, transparent, rgba(0,212,255,0.4))", width: 60 }} />
              </div>
              <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.05, marginBottom: "1.5rem" }}>
                Hydrodynamic<br />
                <span className="gradient-text-animated">Cavitation</span>
              </h1>
              <p className="text-lg max-w-xl mx-auto" style={{ color: "var(--text-secondary)", fontWeight: 300 }}>
                A physics-based purification process that eliminates contaminants through controlled vortex energy — no chemicals, no filters, no compromise.
              </p>
            </div>
          </ScrollReveal>

          {/* Animated pipe diagram */}
          <ScrollReveal direction="up" delay={0.2} threshold={0.1}>
            <div
              className="w-full rounded-card overflow-hidden"
              style={{
                border: "1px solid rgba(0,212,255,0.2)",
              }}
            >
              <CavitationDiagram />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* What Is Cavitation */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-16 items-start">
          {/* Text — 3 cols */}
          <ScrollReveal direction="up" className="md:col-span-3">
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
              <div style={{ height: 1, background: "linear-gradient(to right, transparent, rgba(0,212,255,0.4))", width: 60 }} />
              <span
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: "var(--secondary)" }}
              >
                What Is Cavitation
              </span>
            </div>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "2rem" }}>
              The physics of<br />pure water
            </h2>
            <div className="flex flex-col gap-5">
              {[
                "When water is forced through a precisely engineered constriction at high velocity, the local pressure drops below the water's vapor pressure. This creates millions of microscopic vacuum cavities — bubbles formed not by heat, but by physics.",
                "These cavitation bubbles are inherently unstable. As they move downstream into higher-pressure zones, they collapse violently — each implosion generating localized temperatures exceeding 4,700°C and pressures above 1,000 atmospheres.",
                "At this scale, the energy released is sufficient to rupture cell walls, destroy bacterial membranes, and break down organic contaminants at the molecular level. The process is purely mechanical — no chemical additives enter the water at any stage.",
                "The result is water of extraordinary purity. So pure, in fact, that essential minerals must be reintroduced post-treatment to achieve optimal composition for drinking and building system compatibility.",
              ].map((para, i) => (
                <p key={i} className="leading-relaxed" style={{ color: "var(--text-secondary)", fontWeight: 300 }}>
                  {para}
                </p>
              ))}
            </div>
          </ScrollReveal>

          {/* Stat cards — 2 cols */}
          <ScrollReveal direction="up" delay={0.2} stagger={0.12} className="md:col-span-2 flex flex-col gap-4">
            {[
              { stat: "4,700°C",    label: "Localized collapse temperature" },
              { stat: "1,000+ atm", label: "Implosion pressure generated"   },
              { stat: "0 chemicals",label: "Added during purification"       },
            ].map(({ stat, label }) => (
              <div
                key={stat}
                className="glass rounded-card p-6 gradient-border-animated"
                style={{ borderColor: "rgba(0,212,255,0.1)" }}
              >
                <p style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1 }} className="gradient-text mb-2">{stat}</p>
                <p className="text-sm" style={{ color: "var(--text-secondary)" }}>{label}</p>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </Section>

      {/* Pressure Zone Diagram */}
      <Section className="bg-surface">
        <ScrollReveal direction="up" threshold={0.1}>
          <div className="text-center mb-10">
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
              <div style={{ height: 1, background: "linear-gradient(to right, transparent, rgba(0,212,255,0.4))", width: 80 }} />
              <span
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: "var(--secondary)" }}
              >
                The Process
              </span>
              <div style={{ height: 1, background: "linear-gradient(to left, transparent, rgba(0,212,255,0.4))", width: 80 }} />
            </div>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.1 }}>
              Three zones. One transformation.
            </h2>
          </div>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.15} threshold={0.1}>
          <CavitationDiagram />
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.2} stagger={0.1} className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {[
            { zone: "01", title: "High Pressure Intake",    desc: "Water enters the system under controlled pressure, flowing through the intake manifold toward the cavitation chamber." },
            { zone: "02", title: "Cavitation Zone",          desc: "Pressure drops as water passes through the engineered constriction. Millions of vacuum bubbles form instantly." },
            { zone: "03", title: "Contaminant Destruction",  desc: "Returning pressure causes violent bubble collapse. The energy released destroys all biological and chemical contaminants." },
          ].map(({ zone, title, desc }) => (
            <div key={zone} className="glass rounded-card p-5">
              <p className="font-mono text-xs mb-2" style={{ color: "var(--secondary)" }}>{zone}</p>
              <p className="font-semibold text-white mb-2 text-sm">{title}</p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{desc}</p>
            </div>
          ))}
        </ScrollReveal>
      </Section>

      {/* Comparison Table */}
      <Section>
        <ScrollReveal direction="up" threshold={0.1}>
          <div className="mb-10">
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
              <div style={{ height: 1, background: "linear-gradient(to right, transparent, rgba(0,212,255,0.4))", width: 60 }} />
              <span
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: "var(--secondary)" }}
              >
                Comparison
              </span>
            </div>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.1 }}>
              How Aquasocius compares
            </h2>
          </div>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.1} threshold={0.1}>
          <div className="overflow-x-auto">
            <p className="text-xs mb-3 md:hidden" style={{ color: "rgba(148,163,184,0.5)" }}>
              Scroll → to see full table
            </p>
            <table className="w-full min-w-[640px] text-sm border-collapse">
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                  <th className="text-left py-4 px-4 font-medium" style={{ color: "var(--text-secondary)" }}>
                    Feature
                  </th>
                  <th
                    className="text-center py-4 px-4 font-semibold"
                    style={{
                      color: "var(--secondary)",
                      borderLeft: "2px solid rgba(0,212,255,0.3)",
                      borderTop: "2px solid rgba(0,212,255,0.3)",
                      backgroundColor: "rgba(0,212,255,0.06)",
                    }}
                  >
                    Aquasocius
                  </th>
                  <th className="text-center py-4 px-4 font-medium" style={{ color: "var(--text-secondary)" }}>Chemical</th>
                  <th className="text-center py-4 px-4 font-medium" style={{ color: "var(--text-secondary)" }}>UV</th>
                  <th className="text-center py-4 px-4 font-medium" style={{ color: "var(--text-secondary)" }}>Reverse Osmosis</th>
                </tr>
              </thead>
              <tbody>
                {tableRows.map((row) => (
                  <tr
                    key={row.feature}
                    style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
                  >
                    <td className="py-4 px-4 text-white">{row.feature}</td>
                    {[row.aq, row.chem, row.uv, row.ro].map((cell, i) => (
                      <td
                        key={i}
                        className="py-4 px-4 text-center"
                        style={
                          i === 0
                            ? {
                                borderLeft: "2px solid rgba(0,212,255,0.3)",
                                backgroundColor: "rgba(0,212,255,0.03)",
                              }
                            : {}
                        }
                      >
                        <span style={{ color: iconColor(cell.type), fontWeight: 600 }}>
                          {cell.icon}
                        </span>
                        <span className="ml-2" style={{ color: "var(--text-secondary)", fontSize: "12px" }}>
                          {cell.val}
                        </span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollReveal>
      </Section>

      {/* Technology CTA */}
      <Section className="bg-surface">
        <ScrollReveal direction="up" threshold={0.2}>
          <div className="text-center">
            <p style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: "1.5rem" }}>
              See the machine that makes it possible
            </p>
            <Button href="/product/">
              Explore the Product →
            </Button>
          </div>
        </ScrollReveal>
      </Section>
    </>
  );
}
