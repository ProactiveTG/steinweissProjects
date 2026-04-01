"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const steps = [
  {
    number: "01",
    title: "Water Enters",
    description:
      "Raw water flows into the Aquasocius system through precision-engineered intake manifolds, beginning its transformation.",
  },
  {
    number: "02",
    title: "Vortex Forms",
    description:
      "Hydrodynamic forces generate a sustained cavitation vortex — visible through clear tubing — creating millions of microscopic vacuum bubbles.",
  },
  {
    number: "03",
    title: "Contaminants Destroyed",
    description:
      "Bubble collapse events release localized energy bursts that destroy pathogens, bacteria, and contaminants at the molecular level. No chemicals needed.",
  },
  {
    number: "04",
    title: "Minerals Restored",
    description:
      "The purified output is so clean that essential minerals are reintroduced post-treatment, delivering water that's both safe and optimally balanced.",
  },
];

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const pinWrapRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [activeStep, setActiveStep] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const pinWrap = pinWrapRef.current;
    if (!section || !pinWrap) return;

    const triggers: ScrollTrigger[] = [];

    // Pin the section for 4 steps worth of scrolling
    const pin = ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: `+=${steps.length * 100}%`,
      pin: pinWrap,
      anticipatePin: 1,
    });
    triggers.push(pin);

    // Animate each step in/out
    steps.forEach((_, i) => {
      const stepEl = stepsRef.current[i];
      if (!stepEl) return;

      // Set initial state
      if (i > 0) {
        gsap.set(stepEl, { opacity: 0, y: 30 });
      }

      if (i < steps.length - 1) {
        const t = ScrollTrigger.create({
          trigger: section,
          start: `top+=${i * 100}% top`,
          end: `top+=${(i + 1) * 100}% top`,
          onEnter: () => {
            setActiveStep(i);
            gsap.to(stepEl, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" });
          },
          onLeave: () => {
            gsap.to(stepEl, { opacity: 0, y: -30, duration: 0.5, ease: "power3.in" });
          },
          onEnterBack: () => {
            setActiveStep(i);
            gsap.to(stepEl, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" });
          },
          onLeaveBack: () => {
            if (i > 0) gsap.to(stepEl, { opacity: 0, y: 30, duration: 0.5 });
          },
        });
        triggers.push(t);
      } else {
        // Last step
        const t = ScrollTrigger.create({
          trigger: section,
          start: `top+=${i * 100}% top`,
          onEnter: () => {
            setActiveStep(i);
            gsap.to(stepEl, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" });
          },
          onLeaveBack: () => {
            setActiveStep(i - 1);
            gsap.to(stepEl, { opacity: 0, y: 30, duration: 0.5 });
          },
        });
        triggers.push(t);
      }
    });

    return () => {
      triggers.forEach((t) => t.kill());
    };
  }, [isMobile]);

  // Mobile fallback: simple vertical list
  if (isMobile) {
    return (
      <section style={{ backgroundColor: "var(--surface)" }} className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--secondary)" }}>
              The Process
            </p>
            <h2 className="text-3xl font-bold text-white">How cavitation purifies water</h2>
          </div>
          <div className="flex flex-col gap-8">
            {steps.map((step) => (
              <div key={step.number} className="glass rounded-card p-6">
                <p className="font-mono text-sm mb-3" style={{ color: "var(--secondary)" }}>{step.number}</p>
                <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Desktop: pinned scroll sequence
  return (
    <section
      ref={sectionRef}
      style={{ height: `${steps.length * 100 + 100}vh`, backgroundColor: "var(--surface)" }}
    >
      <div
        ref={pinWrapRef}
        className="h-screen flex items-center px-6"
      >
        <div className="max-w-7xl mx-auto w-full grid grid-cols-5 gap-16 items-center">

          {/* Left: step info — 2 cols */}
          <div className="col-span-2">
            <p className="text-xs font-semibold uppercase tracking-widest mb-6" style={{ color: "var(--secondary)" }}>
              The Process
            </p>
            <h2 className="text-3xl font-bold text-white mb-10">How cavitation purifies water</h2>

            {/* Progress indicator */}
            <div className="flex flex-col gap-0">
              {steps.map((step, i) => (
                <div key={step.number} className="flex items-start gap-4">
                  <div className="flex flex-col items-center">
                    <div
                      className="w-3 h-3 rounded-full transition-all duration-500 flex-shrink-0"
                      style={{
                        backgroundColor: i <= activeStep ? "var(--secondary)" : "rgba(148,163,184,0.3)",
                        boxShadow: i === activeStep ? "0 0 12px rgba(0,212,255,0.6)" : "none",
                        marginTop: "2px",
                      }}
                    />
                    {i < steps.length - 1 && (
                      <div
                        className="w-px flex-1 transition-all duration-500 my-1"
                        style={{
                          height: "40px",
                          backgroundColor: i < activeStep ? "var(--secondary)" : "rgba(148,163,184,0.15)",
                        }}
                      />
                    )}
                  </div>
                  <div className="pb-8">
                    <p
                      className="font-mono text-xs mb-0.5 transition-colors duration-300"
                      style={{ color: i === activeStep ? "var(--secondary)" : "rgba(148,163,184,0.5)" }}
                    >
                      {step.number}
                    </p>
                    <p
                      className="text-sm font-medium transition-colors duration-300"
                      style={{ color: i === activeStep ? "#fff" : "rgba(148,163,184,0.5)" }}
                    >
                      {step.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: content — 3 cols */}
          <div className="col-span-3 relative" style={{ minHeight: "360px" }}>
            {steps.map((step, i) => (
              <div
                key={step.number}
                ref={(el) => { stepsRef.current[i] = el; }}
                className="absolute inset-0 flex flex-col justify-center"
              >
                <p
                  className="font-mono text-7xl font-bold mb-6"
                  style={{ color: "rgba(0,212,255,0.12)" }}
                >
                  {step.number}
                </p>
                <h3 className="text-4xl font-bold text-white mb-6">{step.title}</h3>
                <p className="text-lg leading-relaxed mb-10" style={{ color: "var(--text-secondary)" }}>
                  {step.description}
                </p>
                {/* Visual placeholder */}
                <div
                  className="rounded-card border"
                  style={{
                    height: "120px",
                    background: "linear-gradient(135deg, rgba(0,212,255,0.05), rgba(123,97,255,0.05))",
                    borderColor: "rgba(0,212,255,0.15)",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(90deg, transparent, rgba(0,212,255,0.05), transparent)",
                      animation: "shimmer 3s ease-in-out infinite",
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-xs" style={{ color: "rgba(148,163,184,0.3)" }}>
                      [ Visual — Step {step.number} ]
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
