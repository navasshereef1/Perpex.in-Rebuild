"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

// Counts the number inside `value` (e.g. "140+", "Rs 100+ Cr") up from zero
// once in view. Writes straight to the DOM node, never to React state.
export default function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduced = useReducedMotion();

  const match = value.match(/[\d,]+/);
  const target = match ? parseInt(match[0].replace(/,/g, ""), 10) : null;

  useEffect(() => {
    const el = ref.current;
    if (!el || !inView || target === null || !match) return;
    if (reduced) {
      el.textContent = value;
      return;
    }
    const controls = animate(0, target, {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        el.textContent = value.replace(match[0], Math.round(v).toLocaleString("en-IN"));
      },
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return <span ref={ref}>{target === null ? value : value.replace(match![0], "0")}</span>;
}
