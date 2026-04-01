"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
  stagger?: number;
  threshold?: number;
  className?: string;
  once?: boolean;
}

export default function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.8,
  stagger = 0,
  threshold = 0.15,
  className = "",
  once = true,
}: ScrollRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    if (!container) return;

    const getFrom = () => {
      switch (direction) {
        case "up":    return { y: 40, opacity: 0 };
        case "down":  return { y: -40, opacity: 0 };
        case "left":  return { x: 40, opacity: 0 };
        case "right": return { x: -40, opacity: 0 };
      }
    };

    const targets = stagger > 0 ? container.children : container;

    const tl = gsap.fromTo(
      targets,
      getFrom(),
      {
        y: 0,
        x: 0,
        opacity: 1,
        duration,
        delay,
        stagger: stagger > 0 ? stagger : undefined,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container,
          start: `top ${(1 - threshold) * 100}%`,
          once,
        },
      }
    );

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, [direction, delay, duration, stagger, threshold, once]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
