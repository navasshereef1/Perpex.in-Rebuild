"use client";

import { useRef, useState } from "react";

// Subtle 3D tilt + a cursor-following glare overlay on hover. Desktop only.
export default function TiltCard({
  children,
  className = "",
  as: Component = "div",
  href,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "a";
  href?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el || window.matchMedia("(pointer: coarse)").matches) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(800px) rotateX(${-py * 6}deg) rotateY(${px * 6}deg) translateZ(0)`;
    setGlare({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
      opacity: 1,
    });
  }

  function onMouseLeave() {
    const el = ref.current;
    if (el) el.style.transform = "perspective(800px) rotateX(0) rotateY(0)";
    setGlare((g) => ({ ...g, opacity: 0 }));
  }

  const Tag = Component as any;

  return (
    <Tag
      ref={ref}
      href={href}
      style={style}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={`relative isolate overflow-hidden transition-transform duration-200 ease-out will-change-transform ${className}`}
      data-cursor-hover
    >
      {children}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 z-20 transition-opacity duration-300"
        style={{
          opacity: glare.opacity * 0.5,
          background: `radial-gradient(circle 180px at ${glare.x}% ${glare.y}%, rgba(0,178,255,0.18), transparent 70%)`,
        }}
      />
    </Tag>
  );
}
