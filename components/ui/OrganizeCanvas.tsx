"use client";

import { useEffect, useRef } from "react";

// The brand's signature motif: scattered nodes settle into a structured grid
// with faint connecting lines — a literal rendering of "Organising the
// Un-organised." Reused (at low opacity) across Hero, CTA, and Footer for
// visual cohesion.
export default function OrganizeCanvas({
  className = "",
  dotColor = "0, 178, 255",
  lineColor = "0, 27, 74",
  loop = false,
}: {
  className?: string;
  dotColor?: string;
  lineColor?: string;
  loop?: boolean;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;

    type Node = { sx: number; sy: number; gx: number; gy: number; r: number; gi: number; gj: number };
    let nodes: Node[] = [];
    let cols = 0;
    let rows = 0;

    const build = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      cols = Math.max(6, Math.round(width / 70));
      rows = Math.max(4, Math.round(height / 70));
      const gapX = width / cols;
      const gapY = height / rows;

      nodes = [];
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          nodes.push({
            sx: Math.random() * width,
            sy: Math.random() * height,
            gx: gapX * i + gapX / 2,
            gy: gapY * j + gapY / 2,
            r: Math.random() * 1.3 + 0.7,
            gi: i,
            gj: j,
          });
        }
      }
    };

    build();

    const duration = prefersReducedMotion ? 0 : 2600;
    const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));
    let start = performance.now();
    let rafId: number;

    const draw = (now: number) => {
      const elapsed = now - start;
      let t = duration === 0 ? 1 : Math.min(elapsed / duration, 1);
      if (loop && elapsed > duration + 4000) {
        start = now;
        t = 0;
      }
      const eased = easeOutExpo(t);

      ctx.clearRect(0, 0, width, height);

      // Connecting lines between grid-adjacent, mostly-settled nodes
      ctx.lineWidth = 1;
      for (const n of nodes) {
        if (eased < 0.55) continue;
        const x = n.sx + (n.gx - n.sx) * eased;
        const y = n.sy + (n.gy - n.sy) * eased;
        const rightNeighbor = nodes.find((m) => m.gi === n.gi + 1 && m.gj === n.gj);
        const downNeighbor = nodes.find((m) => m.gi === n.gi && m.gj === n.gj + 1);
        const lineAlpha = (eased - 0.55) / 0.45;
        ctx.strokeStyle = `rgba(${lineColor}, ${0.06 * lineAlpha})`;
        if (rightNeighbor) {
          const rx = rightNeighbor.sx + (rightNeighbor.gx - rightNeighbor.sx) * eased;
          const ry = rightNeighbor.sy + (rightNeighbor.gy - rightNeighbor.sy) * eased;
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(rx, ry);
          ctx.stroke();
        }
        if (downNeighbor) {
          const dx = downNeighbor.sx + (downNeighbor.gx - downNeighbor.sx) * eased;
          const dy = downNeighbor.sy + (downNeighbor.gy - downNeighbor.sy) * eased;
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(dx, dy);
          ctx.stroke();
        }
      }

      for (const n of nodes) {
        const x = n.sx + (n.gx - n.sx) * eased;
        const y = n.sy + (n.gy - n.sy) * eased;
        ctx.beginPath();
        ctx.arc(x, y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${dotColor}, ${0.25 + eased * 0.55})`;
        ctx.fill();
      }

      if (t < 1 || loop) {
        rafId = requestAnimationFrame(draw);
      }
    };

    rafId = requestAnimationFrame(draw);
    const onResize = () => build();
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", onResize);
    };
  }, [dotColor, lineColor, loop]);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
