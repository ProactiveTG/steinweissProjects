"use client";

import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

// ---- Helix geometry helper ----
function buildHelixCurve(turns: number, outerRadius: number, height: number, pointCount: number): THREE.Vector3[] {
  const pts: THREE.Vector3[] = [];
  for (let i = 0; i <= pointCount; i++) {
    const t = i / pointCount;
    const angle = t * turns * Math.PI * 2;
    const r = outerRadius * (1 - t * 0.72);
    pts.push(new THREE.Vector3(
      r * Math.cos(angle),
      (t - 0.5) * height,
      r * Math.sin(angle),
    ));
  }
  return pts;
}

// ---- Vortex tube ----
function VortexTube() {
  const meshRef = useRef<THREE.Mesh>(null);
  const curve = useMemo(() => {
    const pts = buildHelixCurve(4, 2.2, 3.5, 200);
    return new THREE.CatmullRomCurve3(pts);
  }, []);
  const geo = useMemo(() => new THREE.TubeGeometry(curve, 200, 0.04, 6, false), [curve]);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.18;
    }
  });

  return (
    <mesh ref={meshRef} geometry={geo}>
      <meshPhysicalMaterial
        color="#00D4FF"
        emissive="#00D4FF"
        emissiveIntensity={0.6}
        transparent
        opacity={0.55}
        roughness={0.1}
        metalness={0.0}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

// ---- Particle ring ----
function VortexParticles({ count = 300 }: { count?: number }) {
  const meshRef = useRef<THREE.InstancedMesh>(null);

  const { positions, phases } = useMemo(() => {
    const pts = buildHelixCurve(4, 2.2, 3.5, count);
    const phases: number[] = [];
    for (let i = 0; i < count; i++) phases.push(Math.random() * Math.PI * 2);
    return { positions: pts, phases };
  }, [count]);

  // suppress unused warning
  void positions;

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.elapsedTime;
    for (let i = 0; i < count; i++) {
      const offset = ((i / count) + t * 0.06) % 1;
      const angle = offset * 4 * Math.PI * 2;
      const r = 2.2 * (1 - offset * 0.72);
      const y = (offset - 0.5) * 3.5;
      dummy.position.set(r * Math.cos(angle), y, r * Math.sin(angle));
      const s = 0.018 + Math.sin(phases[i] + t) * 0.006;
      dummy.scale.setScalar(s);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    }
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 4, 4]} />
      <meshBasicMaterial color="#ffffff" transparent opacity={0.7} />
    </instancedMesh>
  );
}

// ---- Core glow ----
function VortexCore() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      const mat = ref.current.material as THREE.MeshBasicMaterial;
      mat.opacity = 0.25 + Math.sin(state.clock.elapsedTime * 0.8) * 0.1;
    }
  });
  return (
    <mesh ref={ref} position={[0, 0, 0]}>
      <sphereGeometry args={[0.35, 16, 16]} />
      <meshBasicMaterial color="#00D4FF" transparent opacity={0.3} />
    </mesh>
  );
}

// ---- Mouse-reactive camera ----
function SceneCamera() {
  const { camera } = useThree();
  const mouse = useRef({ x: 0, y: 0 });
  const smooth = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useFrame((_, delta) => {
    smooth.current.x += (mouse.current.x - smooth.current.x) * 3 * delta;
    smooth.current.y += (mouse.current.y - smooth.current.y) * 3 * delta;
    camera.position.x = smooth.current.x * 0.8;
    camera.position.y = 1.5 + smooth.current.y * -0.4;
    camera.position.z = 5.5;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

// ---- Scene wrapper ----
function VortexSceneInner() {
  return (
    <>
      <SceneCamera />
      <ambientLight intensity={0.15} color="#1a3a5c" />
      <directionalLight position={[3, 5, 2]} intensity={0.6} color="#ffffff" />
      <pointLight position={[0, 0, 0]} intensity={2.5} color="#00D4FF" distance={6} />
      <pointLight position={[0, 1, 0]} intensity={1.2} color="#7B61FF" distance={4} />
      <VortexTube />
      <VortexParticles count={280} />
      <VortexCore />
    </>
  );
}

// ---- Canvas export ----
export default function HeroVortexScene() {
  return (
    <Canvas
      camera={{ position: [0, 1.5, 5.5], fov: 55 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
    >
      <VortexSceneInner />
    </Canvas>
  );
}
