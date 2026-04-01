"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

const ParticleField = dynamic(() => import("@/components/effects/ParticleField"), { ssr: false });

const EASE_OUT_EXPO = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: EASE_OUT_EXPO },
});

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16" style={{ backgroundColor: "var(--primary)" }}>

        {/* Particle field */}
        <ParticleField />

        {/* Radial glow behind headline */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(0,212,255,0.10) 0%, transparent 70%)",
          }}
        />

        {/* Dark vignette edges */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 120% 100% at 50% 50%, transparent 40%, rgba(10,22,40,0.85) 100%)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.p
            {...fadeUp(0.2)}
            className="text-xs font-semibold uppercase tracking-widest text-[#00D4FF] mb-6"
          >
            Hydrodynamic Cavitation Technology
          </motion.p>

          <motion.h1
            {...fadeUp(0.4)}
            className="text-5xl md:text-7xl font-bold text-white leading-[1.05] mb-6"
          >
            Pure Water.
            <br />
            <span className="gradient-text-animated">Zero Chemicals.</span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.6)}
            className="text-lg md:text-xl text-[#94A3B8] mb-10 max-w-2xl mx-auto"
          >
            A vortex-powered purification system engineered between Zürich and New York.
          </motion.p>

          <motion.div
            {...fadeUp(0.8)}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button href="/product">See the Machine</Button>
            <Button href="/technology" variant="secondary">How It Works</Button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
        >
          <motion.div
            animate={{ opacity: [0.3, 1, 0.3], y: [0, 6, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-1.5"
          >
            <div className="w-px h-8 bg-gradient-to-b from-transparent to-[#00D4FF]/60" />
            <div className="w-1 h-1 rounded-full bg-[#00D4FF]/80" />
          </motion.div>
        </motion.div>
      </section>

      {/* Value Proposition */}
      <Section>
        <SectionHeading
          eyebrow="Why Aquasocius"
          title="Water redefined at the molecular level"
          subtitle="Our proprietary cavitation process eliminates contaminants without a single chemical — delivering output so pure, minerals must be reintroduced."
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {[
            {
              icon: "🔬",
              title: "No Chemicals Required",
              desc: "Pure physics does the work. No chlorine, no additives, no byproducts.",
            },
            {
              icon: "💧",
              title: "Mineral-Pure Output",
              desc: "Water so clean, beneficial minerals are added back post-treatment.",
            },
            {
              icon: "⚡",
              title: "Energy Efficient",
              desc: "Cavitation physics requires a fraction of the energy of traditional systems.",
            },
          ].map((item) => (
            <Card key={item.title}>
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-[#94A3B8] text-sm leading-relaxed">{item.desc}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* How It Works */}
      <Section className="bg-surface" id="how-it-works">
        {/* TODO: GSAP ScrollTrigger parallax sequence */}
        <SectionHeading eyebrow="The Process" title="How cavitation purifies water" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { step: "01", title: "Water Enters",           desc: "Raw water flows into the system through precision-engineered intake." },
            { step: "02", title: "Vortex Forms",            desc: "Hydrodynamic forces create a sustained cavitation vortex inside clear tubing." },
            { step: "03", title: "Contaminants Destroyed",  desc: "Microscopic bubble collapse events destroy pathogens at the molecular level." },
            { step: "04", title: "Minerals Restored",       desc: "Purified water is remineralized for ideal drinking and building use." },
          ].map((item) => (
            <Card key={item.step}>
              <p className="font-mono text-[#00D4FF] text-sm mb-3">{item.step}</p>
              <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-[#94A3B8] text-sm leading-relaxed">{item.desc}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Markets Preview */}
      <Section>
        <SectionHeading eyebrow="Solutions" title="Built for premium properties" centered />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {[
            { label: "Commercial",  desc: "Office towers, mixed-use developments, and corporate campuses." },
            { label: "Residential", desc: "High-rise and large multi-family residential buildings." },
            { label: "Hospitality", desc: "Hotels, resorts, and premium guest experience properties." },
          ].map((m) => (
            <Card key={m.label} className="group cursor-pointer">
              <div className="h-40 rounded-lg bg-gradient-to-br from-[#0F1D2F] to-[#0A1628] mb-4 flex items-center justify-center border border-white/5 group-hover:border-[#00D4FF]/30 transition-colors">
                <span className="text-[#94A3B8] text-sm">[ Image placeholder ]</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{m.label}</h3>
              <p className="text-[#94A3B8] text-sm leading-relaxed mb-4">{m.desc}</p>
              <a href="/markets" className="text-[#00D4FF] text-sm font-medium hover:underline">
                Explore Solutions →
              </a>
            </Card>
          ))}
        </div>
      </Section>

      {/* Trust / Social Proof */}
      <Section className="bg-surface">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#94A3B8] mb-8">
            Trusted by forward-thinking property owners
          </p>
          {/* TODO: Client logos */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-8 w-24 bg-white/5 rounded animate-pulse" />
            ))}
          </div>
          <div className="flex justify-center gap-6">
            <div className="glass rounded-card px-6 py-3 text-center">
              <p className="text-xs text-[#94A3B8] uppercase tracking-wider mb-1">Engineered</p>
              <p className="text-sm font-semibold text-white">Zürich, Switzerland</p>
            </div>
            <div className="glass rounded-card px-6 py-3 text-center">
              <p className="text-xs text-[#94A3B8] uppercase tracking-wider mb-1">Innovated</p>
              <p className="text-sm font-semibold text-white">New York, USA</p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
