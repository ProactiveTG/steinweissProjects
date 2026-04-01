"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Edges } from "@react-three/drei";
import type { Mesh } from "three";

function WireframeCube() {
  const meshRef = useRef<Mesh>(null);
  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.3;
      meshRef.current.rotation.y += delta * 0.5;
    }
  });
  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshBasicMaterial color="#0A1628" transparent opacity={0} />
      <Edges color="#00D4FF" threshold={1} />
    </mesh>
  );
}

export default function ProductModel() {
  return (
    <div
      className="w-full rounded-card glass relative overflow-hidden"
      style={{
        aspectRatio: "16/9",
        maxWidth: "900px",
        margin: "0 auto",
        boxShadow: "0 0 60px rgba(0,212,255,0.08)",
      }}
    >
      {/* Border overlay */}
      <div
        className="absolute inset-0 rounded-card pointer-events-none z-10"
        style={{
          background: "transparent",
          border: "1px solid rgba(0,212,255,0.2)",
        }}
      />
      {/* Glow behind */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(0,212,255,0.06) 0%, transparent 70%)",
        }}
      />
      <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <WireframeCube />
      </Canvas>
      <div
        className="absolute bottom-6 left-0 right-0 text-center pointer-events-none z-10"
      >
        <p className="text-xs" style={{ color: "rgba(148,163,184,0.4)" }}>
          Interactive 3D Model — Coming Soon
        </p>
      </div>
    </div>
  );
}
