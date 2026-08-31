"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

// Animates a numeric value from 0 up to the number embedded in `value`
// (e.g. "140+", "₹100+ Cr") once it scrolls into view, preserving any
// prefix/suffix text around the number.
export default function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(value.replace(/[0-9]/g, "0"));

  const match = value.match(/[\d,]+/);
  const target = match ? parseInt(match[0].replace(/,/g, ""), 10) : null;

  useEffect(() => {
    if (!inView || target === null) {
      if (target === null) setDisplay(value);
      return;
    }
    const duration = 1200;
    const start = performance.now();

    let rafId: number;
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      const current = Math.round(target * eased);
      setDisplay(value.replace(match![0], current.toLocaleString()));
      if (t < 1) rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return <span ref={ref}>{display}</span>;
}
