"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function CavitationDiagram() {
  const containerRef = useRef<HTMLDivElement>(null);
  const zone1Ref = useRef<SVGGElement>(null);
  const zone2Ref = useRef<SVGGElement>(null);
  const zone3Ref = useRef<SVGGElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    if (!container) return;

    // Set initial hidden state
    [zone1Ref.current, zone2Ref.current, zone3Ref.current].forEach((el) => {
      if (el) gsap.set(el, { opacity: 0 });
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 75%",
        once: true,
      },
    });

    if (zone1Ref.current) {
      tl.to(zone1Ref.current, { opacity: 1, duration: 0.6, ease: "power2.out" });
    }
    if (zone2Ref.current) {
      tl.to(zone2Ref.current, { opacity: 1, duration: 0.6, ease: "power2.out" }, "-=0.2");
    }
    if (zone3Ref.current) {
      tl.to(zone3Ref.current, { opacity: 1, duration: 0.6, ease: "power2.out" }, "-=0.2");
    }

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full">
      {/* Desktop SVG diagram */}
      <div className="hidden md:block w-full overflow-hidden rounded-card glass p-6">
        <svg viewBox="0 0 900 200" className="w-full" style={{ height: "200px" }}>
          {/* Pipe outline */}
          <rect x="10" y="70" width="880" height="60" rx="30" fill="none" stroke="rgba(148,163,184,0.15)" strokeWidth="2" />

          {/* Zone 1: High Pressure — smooth flow */}
          <g ref={zone1Ref}>
            {[80, 95, 110].map((y, i) => (
              <path
                key={i}
                d={`M 20 ${y} Q 100 ${y} 200 ${y}`}
                fill="none"
                stroke="rgba(0,212,255,0.6)"
                strokeWidth="1.5"
                strokeDasharray="8 4"
              >
                <animate attributeName="stroke-dashoffset" from="0" to="-24" dur="2s" repeatCount="indefinite" />
              </path>
            ))}
            <text x="110" y="155" fill="rgba(148,163,184,0.7)" fontSize="11" textAnchor="middle" fontFamily="var(--font-mono, monospace)">HIGH PRESSURE</text>
          </g>

          {/* Zone 2: Constriction — bubbles form */}
          <g ref={zone2Ref}>
            {/* Constriction walls */}
            <path d="M 280 70 Q 350 85 430 80 Q 510 75 580 70" fill="none" stroke="rgba(148,163,184,0.2)" strokeWidth="1.5" />
            <path d="M 280 130 Q 350 115 430 120 Q 510 125 580 130" fill="none" stroke="rgba(148,163,184,0.2)" strokeWidth="1.5" />

            {/* Compressed flow lines */}
            {[98, 100, 102].map((y, i) => (
              <path
                key={i}
                d={`M 280 ${y + i * 2} Q 430 ${100 + (i - 1) * 3} 580 ${y + i * 2}`}
                fill="none"
                stroke="rgba(0,212,255,0.5)"
                strokeWidth="1"
                strokeDasharray="6 3"
              >
                <animate attributeName="stroke-dashoffset" from="0" to="-18" dur="1.2s" repeatCount="indefinite" />
              </path>
            ))}

            {/* Cavitation bubbles */}
            {[
              { cx: 360, cy: 100, r: 8 },
              { cx: 400, cy: 95, r: 5 },
              { cx: 430, cy: 105, r: 10 },
              { cx: 470, cy: 98, r: 6 },
              { cx: 510, cy: 103, r: 7 },
            ].map(({ cx, cy, r }, i) => (
              <circle key={i} cx={cx} cy={cy} r={r} fill="none" stroke="rgba(0,212,255,0.5)" strokeWidth="1.2">
                <animate
                  attributeName="r"
                  values={`${r * 0.5};${r};${r * 0.5}`}
                  dur={`${1.5 + i * 0.3}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0.3;0.8;0.3"
                  dur={`${1.5 + i * 0.3}s`}
                  repeatCount="indefinite"
                />
              </circle>
            ))}

            {/* Glow in center */}
            <ellipse cx="430" cy="100" rx="80" ry="25" fill="rgba(0,212,255,0.04)">
              <animate attributeName="rx" values="70;90;70" dur="2s" repeatCount="indefinite" />
            </ellipse>

            <text x="430" y="155" fill="rgba(148,163,184,0.7)" fontSize="11" textAnchor="middle" fontFamily="var(--font-mono, monospace)">LOW PRESSURE (CAVITATION)</text>
          </g>

          {/* Zone 3: High Pressure — bubbles collapse */}
          <g ref={zone3Ref}>
            {[80, 95, 110].map((y, i) => (
              <path
                key={i}
                d={`M 680 ${y} Q 780 ${y} 880 ${y}`}
                fill="none"
                stroke="rgba(0,212,255,0.6)"
                strokeWidth="1.5"
                strokeDasharray="8 4"
              >
                <animate attributeName="stroke-dashoffset" from="0" to="-24" dur="2s" repeatCount="indefinite" />
              </path>
            ))}

            {/* Collapse sparkles */}
            {[700, 730, 760, 790].map((x, i) => (
              <g key={i}>
                <line x1={x} y1="93" x2={x} y2="87" stroke="rgba(0,212,255,0.6)" strokeWidth="1">
                  <animate attributeName="opacity" values="0;1;0" dur={`${0.8 + i * 0.2}s`} repeatCount="indefinite" begin={`${i * 0.2}s`} />
                </line>
                <line x1={x - 5} y1="97" x2={x - 10} y2="97" stroke="rgba(0,212,255,0.6)" strokeWidth="1">
                  <animate attributeName="opacity" values="0;1;0" dur={`${0.8 + i * 0.2}s`} repeatCount="indefinite" begin={`${i * 0.2}s`} />
                </line>
                <line x1={x + 5} y1="97" x2={x + 10} y2="97" stroke="rgba(0,212,255,0.6)" strokeWidth="1">
                  <animate attributeName="opacity" values="0;1;0" dur={`${0.8 + i * 0.2}s`} repeatCount="indefinite" begin={`${i * 0.2}s`} />
                </line>
              </g>
            ))}

            <text x="780" y="155" fill="rgba(148,163,184,0.7)" fontSize="11" textAnchor="middle" fontFamily="var(--font-mono, monospace)">HIGH PRESSURE (COLLAPSE)</text>
          </g>

          {/* Zone dividers */}
          <line x1="300" y1="55" x2="300" y2="145" stroke="rgba(148,163,184,0.1)" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="600" y1="55" x2="600" y2="145" stroke="rgba(148,163,184,0.1)" strokeWidth="1" strokeDasharray="4 4" />
        </svg>
      </div>

      {/* Mobile: stacked zones */}
      <div className="md:hidden flex flex-col gap-4">
        {[
          { label: "HIGH PRESSURE", desc: "Water enters at high pressure, flowing smoothly through intake.", color: "rgba(0,212,255,0.3)" },
          { label: "LOW PRESSURE (CAVITATION)", desc: "Constriction drops pressure — millions of vacuum bubbles form.", color: "rgba(123,97,255,0.3)" },
          { label: "HIGH PRESSURE (COLLAPSE)", desc: "Pressure restores — bubbles implode, destroying contaminants.", color: "rgba(0,212,255,0.3)" },
        ].map(({ label, desc }) => (
          <div key={label} className="glass rounded-card p-4">
            <p className="text-xs font-mono mb-2" style={{ color: "var(--secondary)" }}>{label}</p>
            <p className="text-sm" style={{ color: "var(--text-secondary)" }}>{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
