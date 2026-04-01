"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface AnimatedCounterProps {
  target: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

export default function AnimatedCounter({
  target,
  duration = 2,
  prefix = "",
  suffix = "",
  decimals = 0,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const triggerRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const el = triggerRef.current;
    if (!el) return;

    const obj = { value: 0 };
    let tween: gsap.core.Tween;

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      once: true,
      onEnter: () => {
        if (hasAnimated.current) return;
        hasAnimated.current = true;
        tween = gsap.to(obj, {
          value: target,
          duration,
          ease: "power2.out",
          onUpdate: () => setCount(parseFloat(obj.value.toFixed(decimals))),
        });
      },
    });

    return () => {
      trigger.kill();
      tween?.kill();
    };
  }, [target, duration, decimals]);

  return (
    <span ref={triggerRef}>
      {prefix}{count.toFixed(decimals)}{suffix}
    </span>
  );
}
