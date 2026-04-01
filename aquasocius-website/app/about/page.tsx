import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import ScrollReveal from "@/components/effects/ScrollReveal";
import FlagUS from "@/components/icons/FlagUS";
import FlagCH from "@/components/icons/FlagCH";

export const metadata: Metadata = {
  title: "About",
  description: "The founding story of Aquasocius — Swiss precision meets New York innovation.",
};

const teamPlaceholders = [
  { name: "Founder", title: "Co-Founder & CEO" },
  { name: "Founder", title: "Co-Founder & CTO" },
  { name: "Founder", title: "Co-Founder & COO" },
  { name: "Advisor", title: "Technical Advisor" },
];

const principles = [
  {
    title: "Engineering First",
    desc: "Every decision starts with the physics. If the science doesn't support it, we don't ship it.",
  },
  {
    title: "Zero Compromise",
    desc: "No chemicals means no chemicals. Not 'reduced chemicals.' Not 'minimal chemicals.' Zero.",
  },
  {
    title: "Built to Last",
    desc: "Our systems are designed for decades of continuous operation. We engineer for permanence, not planned obsolescence.",
  },
];

export default function AboutPage() {
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
            background: "radial-gradient(ellipse 70% 50% at 50% 40%, rgba(123,97,255,0.07) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-7xl mx-auto">
          <ScrollReveal direction="up" threshold={0.1}>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: "var(--secondary)" }}
            >
              Our Story
            </p>
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              Born Between<br />
              <span className="gradient-text-animated">Two Cities</span>
            </h1>
            <p className="text-lg max-w-2xl" style={{ color: "var(--text-secondary)" }}>
              Aquasocius was founded by engineers and entrepreneurs who believed water purification deserved a fundamental rethink.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Founding Story */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-16 items-start">
          {/* Narrative — 3 cols */}
          <ScrollReveal direction="up" threshold={0.1} className="md:col-span-3">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-6"
              style={{ color: "var(--secondary)" }}
            >
              The Founding
            </p>
            <div className="flex flex-col gap-6">
              {[
                "Aquasocius began with a simple observation: the water purification industry was stuck. Chemical treatment — a century-old approach — remained the default for commercial buildings, despite its costs, complexity, and health concerns.",
                "Our founding team of engineers and entrepreneurs set out to build something better. Working between Zürich, Switzerland and New York City, they developed a proprietary hydrodynamic cavitation system through hands-on R&D — prototyping, testing, and iterating until the physics delivered results no chemical process could match.",
                "The result is a machine that purifies water using nothing but controlled vortex energy. No chemicals enter the water. No membranes need replacing. No UV bulbs burn out. Just physics, engineered to perfection.",
                "Today, Aquasocius serves commercial, residential, and hospitality properties across the United States and mid-market Europe — delivering water quality that building owners proudly mention to their tenants.",
              ].map((para, i) => (
                <p key={i} className="leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {para}
                </p>
              ))}
            </div>
          </ScrollReveal>

          {/* Origin cards — 2 cols */}
          <ScrollReveal direction="up" delay={0.2} stagger={0.12} className="md:col-span-2 flex flex-col gap-4">
            <div
              className="glass rounded-card p-6"
              style={{ borderColor: "rgba(0,212,255,0.1)" }}
            >
              <div className="flex items-center gap-3 mb-3">
                <FlagCH className="w-8 h-8 rounded-sm flex-shrink-0" />
                <p className="font-semibold text-white">Zürich, Switzerland</p>
              </div>
              <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                Precision engineering &amp; R&amp;D
              </p>
            </div>
            <div
              className="glass rounded-card p-6"
              style={{ borderColor: "rgba(0,212,255,0.1)" }}
            >
              <div className="flex items-center gap-3 mb-3">
                <FlagUS className="w-8 h-5 rounded-sm flex-shrink-0" />
                <p className="font-semibold text-white">New York, USA</p>
              </div>
              <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                Innovation &amp; market operations
              </p>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* Values */}
      <Section className="bg-surface">
        <ScrollReveal direction="up" threshold={0.1}>
          <div className="text-center mb-12">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "var(--secondary)" }}
            >
              Principles
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              What Drives Us
            </h2>
          </div>
        </ScrollReveal>
        <ScrollReveal direction="up" stagger={0.12} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {principles.map(({ title, desc }) => (
            <div key={title} className="glass rounded-card p-8">
              <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
              <p className="leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                {desc}
              </p>
            </div>
          ))}
        </ScrollReveal>
      </Section>

      {/* Team */}
      <Section>
        <ScrollReveal direction="up" threshold={0.1}>
          <div className="text-center mb-12">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "var(--secondary)" }}
            >
              The Team
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Small team. Big ambition.
            </h2>
            <p style={{ color: "var(--text-secondary)" }}>
              A focused group of engineers, entrepreneurs, and innovators.
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal direction="up" stagger={0.1} className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {teamPlaceholders.map((member, i) => (
            <div key={i} className="glass rounded-card p-6 text-center">
              <div
                className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, rgba(0,212,255,0.15), rgba(123,97,255,0.15))",
                  border: "1px solid rgba(0,212,255,0.15)",
                }}
              >
                <span
                  className="text-2xl font-bold"
                  style={{ color: "var(--secondary)" }}
                >
                  {member.name[0]}
                </span>
              </div>
              <p className="font-semibold text-white text-sm mb-1">{member.name}</p>
              <p className="text-xs" style={{ color: "var(--text-secondary)" }}>{member.title}</p>
            </div>
          ))}
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.2} threshold={0.1}>
          <p className="text-center text-sm mt-8" style={{ color: "rgba(148,163,184,0.4)" }}>
            Full team profiles coming soon.
          </p>
        </ScrollReveal>
      </Section>

      {/* Mission */}
      <Section className="bg-surface">
        <ScrollReveal direction="up" threshold={0.2}>
          <div
            className="rounded-card p-12 text-center"
            style={{
              background: "linear-gradient(135deg, rgba(0,212,255,0.05), rgba(123,97,255,0.05))",
              border: "1px solid rgba(0,212,255,0.15)",
            }}
          >
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-6"
              style={{ color: "var(--secondary)" }}
            >
              Mission
            </p>
            <p className="text-2xl md:text-3xl font-bold text-white max-w-3xl mx-auto leading-tight">
              &ldquo;To make chemical-free water purification the global standard for premium buildings.&rdquo;
            </p>
          </div>
        </ScrollReveal>
      </Section>
    </>
  );
}
