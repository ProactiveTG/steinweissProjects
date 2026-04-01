"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function GlassCylinder() {
  const meshRef = useRef<THREE.Mesh>(null);
  const innerRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (innerRef.current) {
      innerRef.current.rotation.y += 0.008;
      const mat = innerRef.current.material as THREE.MeshPhysicalMaterial;
      mat.emissiveIntensity = 0.3 + Math.sin(t * 0.8) * 0.15;
    }
    if (ringRef.current) {
      ringRef.current.rotation.y += 0.012;
      ringRef.current.rotation.x = Math.sin(t * 0.3) * 0.1;
    }
  });

  return (
    <group>
      {/* Outer glass cylinder */}
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <cylinderGeometry args={[0.9, 0.9, 2.8, 64, 1, true]} />
        <meshPhysicalMaterial
          color="#00D4FF"
          transparent
          opacity={0.12}
          roughness={0.0}
          metalness={0.0}
          transmission={0.9}
          thickness={0.5}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Top cap */}
      <mesh position={[0, 1.4, 0]}>
        <circleGeometry args={[0.9, 64]} />
        <meshPhysicalMaterial
          color="#00D4FF"
          transparent
          opacity={0.08}
          roughness={0.0}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Bottom cap */}
      <mesh position={[0, -1.4, 0]} rotation={[Math.PI, 0, 0]}>
        <circleGeometry args={[0.9, 64]} />
        <meshPhysicalMaterial
          color="#00D4FF"
          transparent
          opacity={0.08}
          roughness={0.0}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Inner glowing vortex core */}
      <mesh ref={innerRef} position={[0, 0, 0]}>
        <cylinderGeometry args={[0.18, 0.18, 2.6, 32, 1, false]} />
        <meshPhysicalMaterial
          color="#00D4FF"
          emissive="#00D4FF"
          emissiveIntensity={0.4}
          transparent
          opacity={0.6}
          roughness={0.1}
        />
      </mesh>

      {/* Orbital ring */}
      <mesh ref={ringRef} position={[0, 0, 0]}>
        <torusGeometry args={[1.1, 0.025, 16, 100]} />
        <meshPhysicalMaterial
          color="#7B61FF"
          emissive="#7B61FF"
          emissiveIntensity={0.5}
          transparent
          opacity={0.7}
          roughness={0.1}
        />
      </mesh>

      {/* Secondary orbital ring */}
      <mesh position={[0, 0, 0]} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[1.05, 0.018, 16, 100]} />
        <meshPhysicalMaterial
          color="#00D4FF"
          emissive="#00D4FF"
          emissiveIntensity={0.3}
          transparent
          opacity={0.4}
          roughness={0.1}
        />
      </mesh>

      {/* Inlet/outlet pipes */}
      <mesh position={[0, 1.65, 0]} rotation={[0, 0, 0]}>
        <cylinderGeometry args={[0.12, 0.12, 0.5, 32]} />
        <meshPhysicalMaterial color="#00D4FF" emissive="#00D4FF" emissiveIntensity={0.3} transparent opacity={0.5} roughness={0.2} />
      </mesh>
      <mesh position={[0, -1.65, 0]} rotation={[0, 0, 0]}>
        <cylinderGeometry args={[0.12, 0.12, 0.5, 32]} />
        <meshPhysicalMaterial color="#00D4FF" emissive="#00D4FF" emissiveIntensity={0.3} transparent opacity={0.5} roughness={0.2} />
      </mesh>
    </group>
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
      <Canvas camera={{ position: [0, 0.5, 4.5], fov: 45 }} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.3} color="#1a3a5c" />
        <directionalLight position={[3, 5, 2]} intensity={0.8} color="#ffffff" />
        <pointLight position={[0, 0, 0]} intensity={3} color="#00D4FF" distance={8} />
        <pointLight position={[2, 2, 2]} intensity={1} color="#7B61FF" distance={6} />
        <GlassCylinder />
        <OrbitControls
          autoRotate
          autoRotateSpeed={1.5}
          enableZoom
          enablePan={false}
          minDistance={2.5}
          maxDistance={8}
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={Math.PI - Math.PI / 6}
        />
      </Canvas>
      <div
        className="absolute bottom-4 left-0 right-0 text-center pointer-events-none z-10"
      >
        <p className="text-xs" style={{ color: "rgba(148,163,184,0.4)" }}>
          Drag to explore &middot; Scroll to zoom
        </p>
      </div>
    </div>
  );
}
