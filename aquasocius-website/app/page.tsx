"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/effects/ScrollReveal";
import AnimatedCounter from "@/components/effects/AnimatedCounter";
import BeakerIcon from "@/components/icons/BeakerIcon";
import MineralDropIcon from "@/components/icons/MineralDropIcon";
import EnergyIcon from "@/components/icons/EnergyIcon";
import BuildingIcon from "@/components/icons/BuildingIcon";
import HighRiseIcon from "@/components/icons/HighRiseIcon";
import HotelIcon from "@/components/icons/HotelIcon";
import HowItWorks from "@/components/sections/HowItWorks";

const ParticleField = dynamic(() => import("@/components/effects/ParticleField"), { ssr: false });

const EASE_OUT_EXPO = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: EASE_OUT_EXPO },
});

export default function HomePage() {
  const glowRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const particleWrapRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0.5, y: 0.5 });
  const currentPos = useRef({ x: 0.5, y: 0.5 });
  const rafRef = useRef<number>(0);

  // Mouse-reactive glow
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      };
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      currentPos.current.x = lerp(currentPos.current.x, mousePos.current.x, 0.04);
      currentPos.current.y = lerp(currentPos.current.y, mousePos.current.y, 0.04);

      if (glowRef.current) {
        const x = currentPos.current.x * 100;
        const y = currentPos.current.y * 100;
        glowRef.current.style.background = `radial-gradient(ellipse 60% 50% at ${x}% ${y}%, rgba(0,212,255,0.12) 0%, transparent 70%)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Parallax on scroll
  useEffect(() => {
    let ctx: { revert: () => void } | undefined;

    const initParallax = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        if (heroContentRef.current) {
          gsap.to(heroContentRef.current, {
            y: "-12%",
            ease: "none",
            scrollTrigger: {
              trigger: heroContentRef.current,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          });
        }

        if (particleWrapRef.current) {
          gsap.to(particleWrapRef.current, {
            y: "-6%",
            ease: "none",
            scrollTrigger: {
              trigger: particleWrapRef.current,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          });
        }
      });
    };

    initParallax();

    return () => {
      ctx?.revert();
    };
  }, []);

  return (
    <>
      {/* ─── HERO ───────────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
        style={{ backgroundColor: "var(--primary)" }}
      >
        {/* Particle field layer */}
        <div ref={particleWrapRef} className="absolute inset-0">
          <ParticleField />
        </div>

        {/* Mouse-reactive glow */}
        <div ref={glowRef} className="absolute inset-0 pointer-events-none transition-none" />

        {/* Static depth vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 120% 100% at 50% 50%, transparent 35%, rgba(10,22,40,0.9) 100%)",
          }}
        />

        {/* Hero content */}
        <div ref={heroContentRef} className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.p
            {...fadeUp(0.2)}
            className="text-xs font-semibold uppercase tracking-widest mb-6"
            style={{ color: "var(--secondary)" }}
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
            className="text-lg md:text-xl mb-10 max-w-2xl mx-auto"
            style={{ color: "var(--text-secondary)" }}
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

        {/* Scroll indicator — growing line */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
        >
          <motion.div
            style={{
              width: "1px",
              backgroundColor: "rgba(0,212,255,0.7)",
              transformOrigin: "top",
            }}
            animate={{
              height: ["0px", "40px", "40px", "0px"],
              opacity: [0, 1, 1, 0],
              y: [0, 0, 8, 8],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.3, 0.7, 1],
            }}
          />
        </motion.div>
      </section>

      {/* ─── VALUE PROPOSITION ──────────────────────────────────── */}
      <Section>
        <ScrollReveal direction="up" threshold={0.1}>
          <div className="text-center mb-16">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "var(--secondary)" }}
            >
              Why Aquasocius
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Water redefined at the molecular level
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: "var(--text-secondary)" }}
            >
              Our proprietary cavitation process eliminates contaminants without a single chemical — delivering output so pure, minerals must be reintroduced.
            </p>
          </div>
        </ScrollReveal>

        {/* Connector line behind cards */}
        <div className="relative">
          <ScrollReveal direction="left" threshold={0.2} delay={0.1}>
            <div
              className="absolute top-1/2 left-12 right-12 h-px pointer-events-none hidden md:block"
              style={{
                background: "linear-gradient(90deg, transparent, rgba(0,212,255,0.15), rgba(123,97,255,0.15), transparent)",
                transform: "translateY(-50%)",
                zIndex: 0,
              }}
            />
          </ScrollReveal>

          <ScrollReveal stagger={0.15} className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {[
              {
                Icon: BeakerIcon,
                title: "No Chemicals Required",
                desc: "Pure physics does the work. No chlorine, no additives, no byproducts.",
              },
              {
                Icon: MineralDropIcon,
                title: "Mineral-Pure Output",
                desc: "Water so clean, beneficial minerals are added back post-treatment.",
              },
              {
                Icon: EnergyIcon,
                title: "Energy Efficient",
                desc: "Cavitation physics requires a fraction of the energy of traditional systems.",
              },
            ].map(({ Icon, title, desc }) => (
              <div
                key={title}
                className="glass rounded-card p-6 group cursor-default transition-all duration-300"
                style={{ transitionProperty: "transform, border-color, box-shadow" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(0,212,255,0.2)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 0 20px rgba(0,212,255,0.1)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLDivElement).style.borderColor = "";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "";
                }}
              >
                <div
                  className="w-12 h-12 mb-5 transition-colors duration-300"
                  style={{ color: "var(--text-secondary)" }}
                >
                  <Icon className="w-full h-full group-hover:text-[#00D4FF] transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {desc}
                </p>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </Section>

      {/* ─── HOW IT WORKS (pinned scroll) ───────────────────────── */}
      <HowItWorks />

      {/* ─── MARKETS PREVIEW ────────────────────────────────────── */}
      <Section>
        <ScrollReveal direction="up" threshold={0.1}>
          <div className="text-center mb-12">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "var(--secondary)" }}
            >
              Solutions
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Built for premium properties
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal stagger={0.15} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              Icon: BuildingIcon,
              label: "Commercial",
              desc: "Office towers, mixed-use developments, and corporate campuses demand water systems that match their standard of excellence.",
              stat: "Up to 40% reduction in water treatment costs",
              href: "/markets",
            },
            {
              Icon: HighRiseIcon,
              label: "Residential",
              desc: "High-rise and large multi-family buildings can offer premium water quality as a genuine amenity.",
              stat: "Serving 500+ unit buildings across the US",
              href: "/markets",
            },
            {
              Icon: HotelIcon,
              label: "Hospitality",
              desc: "Hotels and resorts can deliver a guest experience where even the water reflects their commitment to quality.",
              stat: "Premium water quality your guests notice",
              href: "/markets",
            },
          ].map(({ Icon, label, desc, stat, href }) => (
            <div
              key={label}
              className="glass rounded-card p-6 group cursor-pointer flex flex-col transition-all duration-300"
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = "translateY(-4px)";
                el.style.borderColor = "rgba(0,212,255,0.2)";
                el.style.background = "linear-gradient(135deg, rgba(15,29,47,0.8), rgba(0,212,255,0.04))";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = "";
                el.style.borderColor = "";
                el.style.background = "";
              }}
            >
              <div
                className="w-16 h-16 mb-6 transition-colors duration-300"
                style={{ color: "rgba(148,163,184,0.4)" }}
              >
                <Icon className="w-full h-full group-hover:text-[#00D4FF] transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{label}</h3>
              <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: "var(--text-secondary)" }}>
                {desc}
              </p>
              <p
                className="text-xs font-medium mb-4 py-2 px-3 rounded-btn"
                style={{
                  color: "var(--secondary)",
                  backgroundColor: "rgba(0,212,255,0.06)",
                  border: "1px solid rgba(0,212,255,0.12)",
                }}
              >
                {stat}
              </p>
              <a
                href={href}
                className="text-sm font-medium inline-flex items-center gap-1 transition-all duration-200 group/link"
                style={{ color: "var(--secondary)" }}
              >
                Explore Solutions
                <span className="inline-block transition-transform duration-200 group-hover/link:translate-x-1">
                  →
                </span>
              </a>
            </div>
          ))}
        </ScrollReveal>
      </Section>

      {/* ─── IMPACT NUMBERS ─────────────────────────────────────── */}
      <section style={{ backgroundColor: "var(--surface)" }} className="py-24 px-6 relative overflow-hidden">
        {/* Center glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(0,212,255,0.06) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollReveal stagger={0.1} className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center">
            <div className="flex flex-col items-center gap-3">
              <p className="text-5xl md:text-6xl font-bold gradient-text-animated">
                <AnimatedCounter target={0} suffix="%" />
              </p>
              <p className="text-xs uppercase tracking-widest" style={{ color: "var(--text-secondary)" }}>
                Chemicals used
              </p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <p className="text-5xl md:text-6xl font-bold gradient-text-animated">
                <AnimatedCounter target={99.9} suffix="%" decimals={1} duration={2.5} />
              </p>
              <p className="text-xs uppercase tracking-widest" style={{ color: "var(--text-secondary)" }}>
                Contaminant elimination
              </p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <p className="text-5xl md:text-6xl font-bold gradient-text-animated">
                <AnimatedCounter target={40} suffix="%" duration={1.8} />
              </p>
              <p className="text-xs uppercase tracking-widest" style={{ color: "var(--text-secondary)" }}>
                Average cost reduction
              </p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <p className="text-5xl md:text-6xl font-bold gradient-text-animated">24/7</p>
              <p className="text-xs uppercase tracking-widest" style={{ color: "var(--text-secondary)" }}>
                Continuous operation
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── TRUST / SOCIAL PROOF ───────────────────────────────── */}
      <Section>
        <ScrollReveal direction="up" threshold={0.1}>
          <p
            className="text-center text-xs font-semibold uppercase tracking-widest mb-10"
            style={{ color: "var(--text-secondary)" }}
          >
            Trusted by forward-thinking property owners
          </p>
        </ScrollReveal>

        {/* Logo slots */}
        <ScrollReveal stagger={0.08} className="flex flex-wrap justify-center gap-6 mb-14">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="glass rounded-card flex items-center justify-center"
              style={{ width: "140px", height: "56px" }}
            >
              <span className="text-xs" style={{ color: "rgba(148,163,184,0.3)" }}>
                Partner Logo
              </span>
            </div>
          ))}
        </ScrollReveal>

        {/* Testimonial */}
        <ScrollReveal direction="up" threshold={0.15} delay={0.1}>
          <div
            className="max-w-3xl mx-auto glass rounded-card p-10 text-center"
            style={{ borderColor: "rgba(0,212,255,0.08)" }}
          >
            <p
              className="text-xl italic leading-relaxed mb-6"
              style={{ color: "var(--text-secondary)" }}
            >
              &ldquo;The Aquasocius system transformed our building&rsquo;s water infrastructure. The quality improvement was immediate, and the operational savings exceeded our projections.&rdquo;
            </p>
            <div>
              <p className="text-sm font-semibold text-white">James Chen</p>
              <p className="text-xs mt-1" style={{ color: "rgba(148,163,184,0.6)" }}>
                Director of Facilities, [Client Name]
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Origin badges */}
        <ScrollReveal direction="up" delay={0.2} threshold={0.1}>
          <div className="flex justify-center gap-6 mt-14">
            {[
              { label: "Engineered", location: "Zürich, Switzerland" },
              { label: "Innovated",  location: "New York, USA" },
            ].map(({ label, location }) => (
              <div
                key={label}
                className="glass rounded-card px-8 py-4 text-center"
                style={{ borderColor: "rgba(0,212,255,0.15)", boxShadow: "0 0 20px rgba(0,212,255,0.04)" }}
              >
                <p className="text-xs uppercase tracking-wider mb-1" style={{ color: "var(--text-secondary)" }}>
                  {label}
                </p>
                <p className="text-sm font-semibold text-white">{location}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </Section>

      {/* ─── CTA ────────────────────────────────────────────────── */}
      <section className="py-28 px-6 relative overflow-hidden">
        {/* Animated gradient background */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, #00D4FF 0%, #7B61FF 50%, #00D4FF 100%)",
            backgroundSize: "200% 200%",
            animation: "gradient-shimmer 8s ease infinite",
          }}
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0" style={{ background: "rgba(10,22,40,0.55)" }} />
        {/* Noise/texture */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <ScrollReveal direction="up" threshold={0.2}>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Ready to eliminate chemicals from your water system?
            </h2>
            <p className="text-lg mb-10" style={{ color: "rgba(255,255,255,0.75)" }}>
              Join the buildings already running on Aquasocius technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 rounded-btn text-sm font-semibold transition-all duration-200 hover:scale-[1.02]"
                style={{ backgroundColor: "#fff", color: "var(--primary)" }}
              >
                Schedule a Demo
              </a>
              <a
                href="/technology"
                className="inline-flex items-center justify-center px-8 py-3 rounded-btn text-sm font-semibold border transition-all duration-200 hover:scale-[1.02]"
                style={{ borderColor: "rgba(255,255,255,0.4)", color: "#fff" }}
              >
                Learn More
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
