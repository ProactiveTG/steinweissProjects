"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollReveal from "@/components/effects/ScrollReveal";
import AnimatedCounter from "@/components/effects/AnimatedCounter";
import HowItWorks from "@/components/sections/HowItWorks";
import VortexLogo from "@/components/brand/VortexLogo";
import HeroVortexWrapper from "@/components/3d/HeroVortexWrapper";
import BeakerIcon from "@/components/icons/BeakerIcon";
import EnergyIcon from "@/components/icons/EnergyIcon";
import MineralDropIcon from "@/components/icons/MineralDropIcon";
import BuildingIcon from "@/components/icons/BuildingIcon";
import HighRiseIcon from "@/components/icons/HighRiseIcon";
import HotelIcon from "@/components/icons/HotelIcon";
import { ArrowRight, ChevronDown } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function HomePage() {
  const heroRef      = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const glowRef      = useRef<HTMLDivElement>(null);

  // Mouse glow on hero
  useEffect(() => {
    const el = heroRef.current;
    const glow = glowRef.current;
    if (!el || !glow) return;
    let lx = 0, ly = 0;
    let raf: number;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      lx = e.clientX - rect.left;
      ly = e.clientY - rect.top;
    };
    const tick = () => {
      gsap.to(glow, { x: lx, y: ly, duration: 1.2, ease: "power2.out" });
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    el.addEventListener("mousemove", onMove);
    return () => { el.removeEventListener("mousemove", onMove); cancelAnimationFrame(raf); };
  }, []);

  // Hero scroll fade + scale
  useEffect(() => {
    if (!heroContentRef.current) return;
    const ctx = gsap.context(() => {
      gsap.to(heroContentRef.current, {
        opacity: 0,
        scale: 0.96,
        y: -40,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* ──────────────────── HERO ──────────────────── */}
      <section
        ref={heroRef}
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          background: "var(--primary)",
        }}
      >
        {/* 3D vortex canvas background */}
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <HeroVortexWrapper />
        </div>

        {/* Gradient overlay for text readability */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 1,
          background: "linear-gradient(to top, rgba(10,22,40,0.95) 0%, rgba(10,22,40,0.4) 50%, rgba(10,22,40,0.2) 100%)",
          pointerEvents: "none",
        }} />

        {/* Mouse glow blob */}
        <div
          ref={glowRef}
          style={{
            position: "absolute",
            width: 600, height: 600,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)",
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
            zIndex: 1,
          }}
        />

        {/* Hero content */}
        <div
          ref={heroContentRef}
          style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "2rem", maxWidth: 800, width: "100%" }}
        >
          {/* Animated logo mark */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: EASE }}
            style={{ display: "flex", justifyContent: "center", marginBottom: "1.5rem" }}
          >
            <div style={{ position: "relative", display: "inline-block" }}>
              <VortexLogo size={80} animate />
              <div style={{
                position: "absolute", inset: -16,
                background: "radial-gradient(circle, rgba(0,212,255,0.15) 0%, transparent 70%)",
                borderRadius: "50%",
                pointerEvents: "none",
              }} />
            </div>
          </motion.div>

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: EASE }}
            style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.75rem", marginBottom: "1.5rem" }}
          >
            <div style={{ width: 32, height: 1, background: "var(--secondary)", opacity: 0.6 }} />
            <span style={{ fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.16em", color: "var(--secondary)", textTransform: "uppercase" }}>
              Hydrodynamic Cavitation
            </span>
            <div style={{ width: 32, height: 1, background: "var(--secondary)", opacity: 0.6 }} />
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
            style={{
              fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
              fontWeight: 800,
              lineHeight: 0.97,
              letterSpacing: "-0.04em",
              marginBottom: "1.5rem",
            }}
          >
            Pure Water.{" "}
            <span className="gradient-text-animated">Zero Chemicals.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45, ease: EASE }}
            style={{
              fontSize: "clamp(1rem, 2vw, 1.2rem)",
              color: "var(--text-secondary)",
              lineHeight: 1.65,
              maxWidth: 520,
              margin: "0 auto 2.5rem",
              fontWeight: 300,
            }}
          >
            Aquasocius neutralizes contaminants using the physics of controlled implosion — delivering pharmaceutical-grade water quality with zero chemicals and minimal energy.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6, ease: EASE }}
            style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}
          >
            <Link
              href="/contact/"
              style={{
                position: "relative",
                overflow: "hidden",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.9rem 2rem",
                borderRadius: 8,
                background: "linear-gradient(135deg, #00D4FF, #7B61FF)",
                color: "#fff",
                fontWeight: 700,
                fontSize: "0.95rem",
                textDecoration: "none",
                letterSpacing: "-0.01em",
              }}
              className="btn-shimmer"
            >
              Get a Demo <ArrowRight size={16} />
            </Link>
            <Link
              href="/technology/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.9rem 2rem",
                borderRadius: 8,
                border: "1px solid rgba(255,255,255,0.15)",
                color: "var(--text-secondary)",
                fontWeight: 500,
                fontSize: "0.95rem",
                textDecoration: "none",
                background: "rgba(255,255,255,0.03)",
                transition: "border-color 0.2s, color 0.2s",
              }}
            >
              How It Works
            </Link>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            style={{ position: "absolute", bottom: "-3rem", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.4rem" }}
          >
            <span style={{ fontSize: "0.68rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-secondary)", opacity: 0.5 }}>Scroll</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown size={16} style={{ color: "var(--text-secondary)", opacity: 0.5 }} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ──────────────────── VALUE PROPS ──────────────────── */}
      <section style={{ position: "relative", padding: "8rem 2rem", overflow: "hidden" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <ScrollReveal direction="up">
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
                <div style={{ height: 1, background: "linear-gradient(to right, transparent, rgba(0,212,255,0.4))", width: 80 }} />
                <span style={{ fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.16em", color: "var(--secondary)", textTransform: "uppercase" }}>Why Aquasocius</span>
                <div style={{ height: 1, background: "linear-gradient(to left, transparent, rgba(0,212,255,0.4))", width: 80 }} />
              </div>
              <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "1rem" }}>
                Water purification,<br />fundamentally rethought.
              </h2>
              <p style={{ color: "var(--text-secondary)", fontSize: "1.05rem", fontWeight: 300, maxWidth: 480, margin: "0 auto" }}>
                Three core advantages that redefine what&apos;s possible in commercial water treatment.
              </p>
            </div>
          </ScrollReveal>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
            {[
              {
                icon: BeakerIcon,
                label: "Zero Chemicals",
                title: "No chlorine. No additives. Ever.",
                desc: "Our hydrodynamic process eliminates pathogens through physics — not chemistry. The result is cleaner water with no chemical residue, taste, or environmental discharge.",
                color: "#00D4FF",
                delay: 0,
              },
              {
                icon: EnergyIcon,
                label: "60% Less Energy",
                title: "Radically more efficient.",
                desc: "Traditional chemical dosing systems require constant replenishment and disposal infrastructure. Our sealed system consumes a fraction of the energy with no consumable costs.",
                color: "#7B61FF",
                delay: 0.1,
              },
              {
                icon: MineralDropIcon,
                label: "Minerals Preserved",
                title: "Healthy water, not sterile water.",
                desc: "Unlike reverse osmosis, cavitation is selective. Beneficial minerals — calcium, magnesium, trace elements — pass through untouched. Only pathogens and organic compounds are destroyed.",
                color: "#00D4FF",
                delay: 0.2,
              },
            ].map(({ icon: Icon, label, title, desc, color, delay }) => (
              <ScrollReveal key={label} direction="up" delay={delay}>
                <div
                  className="gradient-border-animated"
                  style={{
                    background: "var(--surface)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: 12,
                    padding: "2rem",
                    height: "100%",
                    transition: "transform 0.3s, border-color 0.3s",
                    cursor: "default",
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
                >
                  {/* Icon with sonar rings */}
                  <div style={{ position: "relative", width: 52, height: 52, marginBottom: "1.5rem" }}>
                    <div style={{ width: 52, height: 52, borderRadius: "50%", background: `${color}14`, display: "flex", alignItems: "center", justifyContent: "center", position: "relative", zIndex: 1, color }}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="sonar-ring" style={{ position: "absolute", inset: 0, borderColor: color, opacity: 0.15 }} />
                    <div className="sonar-ring sonar-ring-2" style={{ position: "absolute", inset: 0, borderColor: color, opacity: 0.1 }} />
                  </div>
                  <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color, marginBottom: "0.5rem" }}>{label}</div>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.75rem", letterSpacing: "-0.02em" }}>{title}</h3>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.65, fontWeight: 300 }}>{desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────── HOW IT WORKS ──────────────────── */}
      <HowItWorks />

      {/* ──────────────────── MARKETS PREVIEW ──────────────────── */}
      <section style={{ padding: "8rem 2rem", position: "relative" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <ScrollReveal direction="up">
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
                <div style={{ height: 1, background: "linear-gradient(to right, transparent, rgba(0,212,255,0.4))", width: 80 }} />
                <span style={{ fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.16em", color: "var(--secondary)", textTransform: "uppercase" }}>Markets We Serve</span>
                <div style={{ height: 1, background: "linear-gradient(to left, transparent, rgba(0,212,255,0.4))", width: 80 }} />
              </div>
              <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.1 }}>
                Built for every scale.
              </h2>
            </div>
          </ScrollReveal>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {[
              {
                icon: BuildingIcon,
                label: "Commercial",
                title: "Office & Retail Properties",
                desc: "From single-floor suites to multi-tower campuses. Aquasocius scales to match your building's water demand — and your tenants will notice.",
                gradient: "linear-gradient(135deg, rgba(0,212,255,0.12) 0%, rgba(10,22,40,0.9) 100%)",
                delay: 0,
              },
              {
                icon: HighRiseIcon,
                label: "Residential",
                title: "High-Rise Apartments",
                desc: "Residents get pharmaceutical-grade water from every tap. No more complaints about taste or mineral deposits — just pure, consistent quality.",
                gradient: "linear-gradient(135deg, rgba(123,97,255,0.12) 0%, rgba(10,22,40,0.9) 100%)",
                delay: 0.1,
              },
              {
                icon: HotelIcon,
                label: "Hospitality",
                title: "Hotels & Resorts",
                desc: "Water quality is a guest experience. Aquasocius eliminates chlorine odor from pools and showers, protects equipment from scale, and reduces chemical procurement costs.",
                gradient: "linear-gradient(135deg, rgba(0,212,255,0.08) 0%, rgba(123,97,255,0.12) 50%, rgba(10,22,40,0.9) 100%)",
                delay: 0.2,
              },
            ].map(({ icon: Icon, label, title, desc, gradient, delay }) => (
              <ScrollReveal key={label} direction="up" delay={delay}>
                <div
                  style={{
                    background: "var(--surface)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: 16,
                    overflow: "hidden",
                    minHeight: 340,
                    display: "flex",
                    flexDirection: "column",
                    transition: "transform 0.3s, border-color 0.3s",
                    cursor: "pointer",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-4px) scale(1.01)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,212,255,0.2)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0) scale(1)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
                  }}
                >
                  {/* Gradient visual top */}
                  <div style={{ background: gradient, height: 160, display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden", color: "rgba(255,255,255,0.15)" }}>
                    <Icon className="w-16 h-16" />
                    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 40, background: "linear-gradient(to top, var(--surface), transparent)" }} />
                  </div>

                  {/* Content */}
                  <div style={{ padding: "1.5rem", flex: 1, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--secondary)" }}>{label}</div>
                    <h3 style={{ fontWeight: 700, fontSize: "1.05rem", letterSpacing: "-0.02em" }}>{title}</h3>
                    <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.65, fontWeight: 300, flex: 1 }}>{desc}</p>
                    <Link href="/markets/" style={{ display: "inline-flex", alignItems: "center", gap: "0.35rem", color: "var(--secondary)", fontSize: "0.85rem", fontWeight: 600, textDecoration: "none", marginTop: "0.5rem" }}>
                      Explore <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────── IMPACT NUMBERS ──────────────────── */}
      <section style={{ position: "relative", padding: "8rem 2rem", background: "var(--surface)", borderTop: "1px solid rgba(255,255,255,0.04)", borderBottom: "1px solid rgba(255,255,255,0.04)", overflow: "hidden" }}>
        {/* Decorative ripple rings */}
        {[240, 380, 520].map((r, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              width: r, height: r,
              borderRadius: "50%",
              border: "1px solid rgba(0,212,255,0.04)",
              top: "50%", left: "50%",
              transform: "translate(-50%, -50%)",
              pointerEvents: "none",
            }}
          />
        ))}

        <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative" }}>
          <ScrollReveal direction="up">
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
                <div style={{ height: 1, background: "linear-gradient(to right, transparent, rgba(0,212,255,0.4))", width: 80 }} />
                <span style={{ fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.16em", color: "var(--secondary)", textTransform: "uppercase" }}>The Impact</span>
                <div style={{ height: 1, background: "linear-gradient(to left, transparent, rgba(0,212,255,0.4))", width: 80 }} />
              </div>
              <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.1 }}>
                Numbers that matter.
              </h2>
            </div>
          </ScrollReveal>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "2rem" }}>
            {[
              { value: 60,   suffix: "%",  label: "Chemical Cost Reduction",   desc: "vs. traditional dosing",  delay: 0,    decimals: 0 },
              { value: 99.9, suffix: "%",  label: "Pathogen Elimination Rate",  desc: "lab-verified",           delay: 0.1,  decimals: 1 },
              { value: 40,   suffix: "+",  label: "Commercial Deployments",     desc: "across 8 countries",     delay: 0.2,  decimals: 0 },
              { value: 24,   suffix: "/7", label: "Remote Monitoring",          desc: "live sensor data",        delay: 0.3,  decimals: 0 },
            ].map(({ value, suffix, label, desc, delay, decimals }) => (
              <ScrollReveal key={label} direction="up" delay={delay}>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "clamp(3.5rem, 6vw, 5rem)", fontWeight: 800, lineHeight: 1, letterSpacing: "-0.04em", marginBottom: "0.5rem" }}>
                    <span className="gradient-text">
                      <AnimatedCounter target={value} suffix={suffix} duration={2} decimals={decimals} />
                    </span>
                  </div>
                  <div style={{ fontWeight: 600, fontSize: "0.95rem", marginBottom: "0.25rem" }}>{label}</div>
                  <div style={{ fontSize: "0.8rem", color: "var(--text-secondary)" }}>{desc}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────── TRUST / TESTIMONIAL ──────────────────── */}
      <section style={{ padding: "8rem 2rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          {/* Partner logo placeholders */}
          <ScrollReveal direction="up">
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <span style={{ fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.16em", color: "var(--text-secondary)", textTransform: "uppercase", opacity: 0.5 }}>Trusted by property operators across</span>
            </div>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "2.5rem", flexWrap: "wrap", marginBottom: "5rem", opacity: 0.35 }}>
              {["■  MERIDIAN PROPERTIES", "◆  HARBORVIEW GROUP", "▲  NEXUS REAL ESTATE", "●  SOLARIS HOTELS", "◉  VANTAGE DEVELOPMENTS"].map(name => (
                <div key={name} style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.12em", color: "var(--text-secondary)" }}>{name}</div>
              ))}
            </div>
          </ScrollReveal>

          {/* Testimonial */}
          <ScrollReveal direction="up">
            <div style={{
              background: "var(--surface)",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: 20,
              padding: "3.5rem",
              position: "relative",
              overflow: "hidden",
              maxWidth: 800,
              margin: "0 auto",
            }}>
              {/* Decorative quote marks */}
              <div style={{
                position: "absolute",
                top: "1.5rem", left: "2.5rem",
                fontSize: "8rem",
                lineHeight: 1,
                fontWeight: 800,
                background: "linear-gradient(135deg, #00D4FF, #7B61FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                opacity: 0.12,
                fontFamily: "Georgia, serif",
                pointerEvents: "none",
                userSelect: "none",
              }}>&ldquo;</div>

              <div style={{ position: "relative" }}>
                <p style={{ fontSize: "clamp(1.05rem, 2.5vw, 1.3rem)", lineHeight: 1.7, fontWeight: 300, fontStyle: "italic", color: "#e2e8f0", marginBottom: "2rem" }}>
                  &ldquo;We replaced our entire chemical dosing infrastructure across three towers. The water quality improvement was immediate — residents noticed within weeks. Operating costs dropped 52% in year one. Aquasocius is the kind of technology that makes you question why we did it the old way for so long.&rdquo;
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div style={{ width: 44, height: 44, borderRadius: "50%", background: "linear-gradient(135deg, #00D4FF, #7B61FF)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "0.9rem", color: "#fff" }}>JC</div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: "0.95rem" }}>James Chen</div>
                    <div style={{ fontSize: "0.8rem", color: "var(--text-secondary)" }}>Chief Operations Officer &middot; Meridian Properties Group</div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ──────────────────── CTA ──────────────────── */}
      <section style={{ padding: "8rem 2rem", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(135deg, rgba(0,212,255,0.08) 0%, rgba(123,97,255,0.08) 100%)",
          }} />
          <div style={{ position: "absolute", inset: 0, borderTop: "1px solid rgba(255,255,255,0.04)", borderBottom: "1px solid rgba(255,255,255,0.04)" }} />
        </div>

        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
          <ScrollReveal direction="up">
            <VortexLogo size={56} animate style={{ margin: "0 auto 2rem", display: "block" }} />
            <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.05, marginBottom: "1.25rem" }}>
              Ready to eliminate chemicals from your water system?
            </h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "1.05rem", fontWeight: 300, lineHeight: 1.6, maxWidth: 480, margin: "0 auto 2.5rem" }}>
              Join 40+ property operators across 8 countries who have made the switch. Our team will assess your building within 48 hours.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link
                href="/contact/"
                className="btn-shimmer"
                style={{
                  position: "relative",
                  overflow: "hidden",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "1rem 2.5rem",
                  borderRadius: 8,
                  background: "linear-gradient(135deg, #00D4FF, #7B61FF)",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: "1rem",
                  textDecoration: "none",
                }}
              >
                Schedule a Site Assessment <ArrowRight size={18} />
              </Link>
              <Link
                href="/technology/"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "1rem 2.5rem",
                  borderRadius: 8,
                  border: "1px solid rgba(255,255,255,0.15)",
                  color: "var(--text-secondary)",
                  fontWeight: 500,
                  fontSize: "1rem",
                  textDecoration: "none",
                  background: "rgba(255,255,255,0.03)",
                }}
              >
                Explore the Technology
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
