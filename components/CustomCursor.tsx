"use client";

import { useEffect, useRef } from "react";

// Desktop-only custom cursor: a small dot that scales up over interactive
// elements. Disabled on touch devices and for prefers-reduced-motion.
export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isTouch || reduced) return;

    document.documentElement.classList.add("custom-cursor");
    const dot = dotRef.current;
    if (!dot) return;

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let curX = x;
    let curY = y;
    let scale = 1;
    let targetScale = 1;

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      const target = (e.target as HTMLElement)?.closest?.(
        "a, button, [data-cursor-hover]"
      );
      targetScale = target ? 2.6 : 1;
    };
    window.addEventListener("mousemove", onMove);

    let rafId: number;
    const tick = () => {
      curX += (x - curX) * 0.2;
      curY += (y - curY) * 0.2;
      scale += (targetScale - scale) * 0.2;
      if (dot) {
        dot.style.transform = `translate(${curX}px, ${curY}px) translate(-50%, -50%) scale(${scale})`;
      }
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    return () => {
      document.documentElement.classList.remove("custom-cursor");
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      className="pointer-events-none fixed left-0 top-0 z-[999] hidden h-3 w-3 rounded-full bg-navy-900 mix-blend-difference md:block"
      style={{ willChange: "transform" }}
      aria-hidden="true"
    />
  );
}
