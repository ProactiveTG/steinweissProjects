import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import ScrollReveal from "@/components/effects/ScrollReveal";
import FlagUS from "@/components/icons/FlagUS";
import FlagCH from "@/components/icons/FlagCH";
import VortexLogo from "@/components/brand/VortexLogo";

export const metadata: Metadata = {
  title: "About",
  description: "The founding story of Aquasocius — Swiss precision meets New York innovation.",
};

const teamPlaceholders = [
  { name: "Founder", title: "Co-Founder & CEO",   initials: "CF", gradient: "linear-gradient(135deg, #00D4FF, #7B61FF)" },
  { name: "Founder", title: "Co-Founder & CTO",   initials: "CT", gradient: "linear-gradient(135deg, #7B61FF, #00D4FF)" },
  { name: "Founder", title: "Co-Founder & COO",   initials: "CO", gradient: "linear-gradient(135deg, #00D4FF 20%, #7B61FF 80%)" },
  { name: "Advisor", title: "Technical Advisor",  initials: "TA", gradient: "linear-gradient(135deg, rgba(0,212,255,0.6), rgba(123,97,255,0.6))" },
];

const principles = [
  {
    title: "Engineering First",
    desc: "Every decision starts with the physics. If the science doesn't support it, we don't ship it.",
    color: "#00D4FF",
  },
  {
    title: "Zero Compromise",
    desc: "No chemicals means no chemicals. Not 'reduced chemicals.' Not 'minimal chemicals.' Zero.",
    color: "#7B61FF",
  },
  {
    title: "Built to Last",
    desc: "Our systems are designed for decades of continuous operation. We engineer for permanence, not planned obsolescence.",
    color: "#00D4FF",
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
            <div style={{ marginBottom: "1.5rem" }}>
              <VortexLogo size={40} animate />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
              <div style={{ height: 1, background: "linear-gradient(to right, transparent, rgba(123,97,255,0.4))", width: 60 }} />
              <span
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: "var(--secondary)" }}
              >
                Our Story
              </span>
            </div>
            <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.05, marginBottom: "1.5rem" }}>
              Born Between<br />
              <span className="gradient-text-animated">Two Cities</span>
            </h1>
            <p className="text-lg max-w-2xl" style={{ color: "var(--text-secondary)", fontWeight: 300 }}>
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
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
              <div style={{ height: 1, background: "linear-gradient(to right, transparent, rgba(0,212,255,0.4))", width: 60 }} />
              <span
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: "var(--secondary)" }}
              >
                The Founding
              </span>
            </div>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "2rem" }}>
              A different way
            </h2>
            <div className="flex flex-col gap-6">
              {[
                "Aquasocius began with a simple observation: the water purification industry was stuck. Chemical treatment — a century-old approach — remained the default for commercial buildings, despite its costs, complexity, and health concerns.",
                "Our founding team of engineers and entrepreneurs set out to build something better. Working between Zürich, Switzerland and New York City, they developed a proprietary hydrodynamic cavitation system through hands-on R&D — prototyping, testing, and iterating until the physics delivered results no chemical process could match.",
                "The result is a machine that purifies water using nothing but controlled vortex energy. No chemicals enter the water. No membranes need replacing. No UV bulbs burn out. Just physics, engineered to perfection.",
                "Today, Aquasocius serves commercial, residential, and hospitality properties across the United States and mid-market Europe — delivering water quality that building owners proudly mention to their tenants.",
              ].map((para, i) => (
                <p key={i} className="leading-relaxed" style={{ color: "var(--text-secondary)", fontWeight: 300 }}>
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
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
              <div style={{ height: 1, background: "linear-gradient(to right, transparent, rgba(0,212,255,0.4))", width: 80 }} />
              <span
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: "var(--secondary)" }}
              >
                Principles
              </span>
              <div style={{ height: 1, background: "linear-gradient(to left, transparent, rgba(0,212,255,0.4))", width: 80 }} />
            </div>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.1 }}>
              What Drives Us
            </h2>
          </div>
        </ScrollReveal>
        <ScrollReveal direction="up" stagger={0.12} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {principles.map(({ title, desc, color }) => (
            <div
              key={title}
              className="glass rounded-card p-8 gradient-border-animated"
              style={{ borderColor: "rgba(255,255,255,0.06)" }}
            >
              <div style={{ width: 4, height: 32, background: color, borderRadius: 2, marginBottom: "1.25rem" }} />
              <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
              <p className="leading-relaxed" style={{ color: "var(--text-secondary)", fontWeight: 300 }}>
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
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
              <div style={{ height: 1, background: "linear-gradient(to right, transparent, rgba(0,212,255,0.4))", width: 80 }} />
              <span
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: "var(--secondary)" }}
              >
                The Team
              </span>
              <div style={{ height: 1, background: "linear-gradient(to left, transparent, rgba(0,212,255,0.4))", width: 80 }} />
            </div>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "1rem" }}>
              Small team. Big ambition.
            </h2>
            <p style={{ color: "var(--text-secondary)", fontWeight: 300 }}>
              A focused group of engineers, entrepreneurs, and innovators.
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal direction="up" stagger={0.1} className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {teamPlaceholders.map((member, i) => (
            <div key={i} className="glass rounded-card p-6 text-center">
              <div
                className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center relative"
                style={{
                  background: member.gradient,
                  boxShadow: "0 0 24px rgba(0,212,255,0.2)",
                }}
              >
                <div
                  className="absolute inset-0 rounded-full"
                  style={{ background: "rgba(10,22,40,0.3)" }}
                />
                <span
                  className="relative text-xl font-bold"
                  style={{ color: "#fff", letterSpacing: "-0.02em" }}
                >
                  {member.initials}
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
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.75rem", marginBottom: "2rem" }}>
              <div style={{ height: 1, background: "linear-gradient(to right, transparent, rgba(0,212,255,0.4))", width: 80 }} />
              <span
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: "var(--secondary)" }}
              >
                Mission
              </span>
              <div style={{ height: 1, background: "linear-gradient(to left, transparent, rgba(0,212,255,0.4))", width: 80 }} />
            </div>
            <p style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.1, maxWidth: "3xl", margin: "0 auto" }}>
              &ldquo;To make chemical-free water purification the global standard for premium buildings.&rdquo;
            </p>
          </div>
        </ScrollReveal>
      </Section>
    </>
  );
}
