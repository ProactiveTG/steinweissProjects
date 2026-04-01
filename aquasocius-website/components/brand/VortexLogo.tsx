import React from "react";

interface VortexLogoProps {
  size?: number;
  animate?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export default function VortexLogo({ size = 32, animate = true, className = "", style }: VortexLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="vortex-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#00D4FF" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="arc-outer" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#7B61FF" stopOpacity="0.5" />
        </linearGradient>
        <linearGradient id="arc-mid1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#7B61FF" stopOpacity="0.65" />
        </linearGradient>
        <linearGradient id="arc-mid2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.75" />
          <stop offset="100%" stopColor="#7B61FF" stopOpacity="0.85" />
        </linearGradient>
        <linearGradient id="arc-inner" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00D4FF" />
          <stop offset="100%" stopColor="#7B61FF" />
        </linearGradient>
        <style>{`
          @keyframes vortex-outer  { from { transform-origin: 50px 50px; transform: rotate(0deg); }   to { transform-origin: 50px 50px; transform: rotate(360deg); } }
          @keyframes vortex-mid1   { from { transform-origin: 50px 50px; transform: rotate(0deg); }   to { transform-origin: 50px 50px; transform: rotate(360deg); } }
          @keyframes vortex-mid2   { from { transform-origin: 50px 50px; transform: rotate(0deg); }   to { transform-origin: 50px 50px; transform: rotate(360deg); } }
          @keyframes vortex-inner  { from { transform-origin: 50px 50px; transform: rotate(0deg); }   to { transform-origin: 50px 50px; transform: rotate(360deg); } }
          @keyframes glow-pulse    { 0%,100% { opacity: 0.15; } 50% { opacity: 0.28; } }
          .vortex-outer { animation: vortex-outer 12s linear infinite; }
          .vortex-mid1  { animation: vortex-mid1  9s  linear infinite; }
          .vortex-mid2  { animation: vortex-mid2  7s  linear infinite; }
          .vortex-inner { animation: vortex-inner 5s  linear infinite; }
          .glow-circle  { animation: glow-pulse   4s  ease-in-out infinite; }
        `}</style>
      </defs>

      {/* Radial glow */}
      <circle
        cx="50" cy="50" r="48"
        fill="url(#vortex-glow)"
        className={animate ? "glow-circle" : ""}
        opacity={animate ? 1 : 0.2}
      />

      {/* Outer arc */}
      <g className={animate ? "vortex-outer" : ""}>
        <path
          d="M 50 8 A 42 42 0 0 1 88 65"
          stroke="url(#arc-outer)"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
        />
      </g>

      {/* Mid arc 1 */}
      <g className={animate ? "vortex-mid1" : ""}>
        <path
          d="M 50 16 A 34 34 0 0 1 80 72"
          stroke="url(#arc-mid1)"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
      </g>

      {/* Mid arc 2 */}
      <g className={animate ? "vortex-mid2" : ""}>
        <path
          d="M 50 24 A 26 26 0 0 1 71 74"
          stroke="url(#arc-mid2)"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
      </g>

      {/* Inner arc */}
      <g className={animate ? "vortex-inner" : ""}>
        <path
          d="M 50 32 A 18 18 0 0 1 65 72"
          stroke="url(#arc-inner)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
      </g>

      {/* Core dot */}
      <circle cx="50" cy="50" r="4" fill="#00D4FF" opacity="0.9" />
      <circle cx="50" cy="50" r="2" fill="#ffffff" />
    </svg>
  );
}
