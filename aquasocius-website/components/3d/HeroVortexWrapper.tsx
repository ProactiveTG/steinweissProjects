"use client";

import dynamic from "next/dynamic";

const HeroVortexScene = dynamic(
  () => import("./HeroVortexScene"),
  {
    ssr: false,
    loading: () => (
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 40%, rgba(0,212,255,0.08) 0%, transparent 60%)" }} />
    ),
  }
);

export default function HeroVortexWrapper() {
  return <HeroVortexScene />;
}
