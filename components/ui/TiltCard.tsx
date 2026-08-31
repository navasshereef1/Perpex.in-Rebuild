"use client";

import { useRef } from "react";

// Subtle 3D tilt + glare-following-cursor on hover. Desktop only.
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

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el || window.matchMedia("(pointer: coarse)").matches) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(800px) rotateX(${-py * 6}deg) rotateY(${px * 6}deg) translateZ(0)`;
  }

  function onMouseLeave() {
    const el = ref.current;
    if (el) el.style.transform = "perspective(800px) rotateX(0) rotateY(0)";
  }

  const Tag = Component as any;

  return (
    <Tag
      ref={ref}
      href={href}
      style={style}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={`transition-transform duration-200 ease-out will-change-transform ${className}`}
      data-cursor-hover
    >
      {children}
    </Tag>
  );
}
