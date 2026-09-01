"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Magnetic from "../ui/Magnetic";
import ArtifactStack from "./ArtifactStack";

const stages = ["Diagnose", "Design", "Enable", "Control"];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.set(".hero-mask span", { yPercent: 110 });
      gsap.set(".hero-fade", { opacity: 0, y: 16 });

      const tl = gsap.timeline({ delay: 0.3, defaults: { ease: "power4.out" } });
      tl.to(".hero-mask span", { yPercent: 0, duration: 1.1, stagger: 0.06 }).to(
        ".hero-fade",
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.08 },
        "-=0.7"
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-[94svh] flex-col justify-between overflow-hidden px-6 pb-10 pt-8 md:px-10 md:pb-14"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 h-[560px] w-[560px] rounded-full bg-cyan-400/[0.07] blur-3xl"
      />

      <div className="hero-fade relative z-10 flex items-center justify-between gap-4 border-b border-navy-900/10 pb-5">
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-navy-900/65">
          Perpex Insights — B2B Transformation
        </span>
        <div className="hidden items-center gap-1 font-mono text-[11px] uppercase tracking-[0.14em] text-navy-900/65 sm:flex">
          {stages.map((s, i) => (
            <span key={s} className="flex items-center gap-1">
              <span className={i === 0 ? "text-cyan-500" : ""}>{s}</span>
              {i < stages.length - 1 && <span className="mx-1 text-navy-900/20">/</span>}
            </span>
          ))}
        </div>
      </div>

      <div className="relative z-10 grid flex-1 grid-cols-1 items-center gap-10 py-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-6">
        <div>
          <h1 className="max-w-3xl font-display text-[13vw] font-medium leading-[0.94] tracking-tight text-navy-900 sm:text-[9vw] md:text-[5.4vw]">
            <span className="hero-mask block overflow-hidden">
              <span className="block font-light">Organising the</span>
            </span>
            <span className="hero-mask block overflow-hidden">
              <span className="block italic text-cyan-500">un-organised.</span>
            </span>
          </h1>

          <p className="hero-fade mt-7 max-w-md text-[16px] leading-relaxed text-navy-900/70 md:text-[17px]">
            Most growing businesses run on tribal knowledge and founder heroics — until
            that stops scaling. We diagnose what&rsquo;s actually broken, document the
            system that replaces it, train your team to run it, and stay on to make sure
            it holds.
          </p>

          <div className="hero-fade mt-9 flex flex-wrap items-center gap-5">
            <Magnetic>
              <a
                href="/consultation"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-navy-900 px-6 py-3.5 text-[14px] text-cream-50 transition-colors hover:bg-navy-800"
              >
                Start a Discovery Conversation
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </Magnetic>
            <span className="text-[12px] text-navy-900/65">Free · No obligation · 30 minutes</span>
          </div>

          <p className="hero-fade mt-8 max-w-sm border-l-2 border-cyan-400/40 pl-4 text-[13px] italic leading-relaxed text-navy-900/65">
            &ldquo;We don&rsquo;t hand over a report and leave. Senior leadership stays
            personally involved until the system actually runs.&rdquo;
            <span className="mt-1.5 block font-mono not-italic text-[11px] uppercase tracking-wide text-navy-900/65">
              — Rafi Mohammed, Founder
            </span>
          </p>
        </div>

        <div className="hero-fade">
          <ArtifactStack />
        </div>
      </div>

      <div className="hero-fade relative z-10 flex flex-wrap items-center justify-between gap-4 border-t border-navy-900/10 pt-5 text-[12px] text-navy-900/65">
        <span>140+ B2B clients served across 10+ sectors in India</span>
        <span className="font-mono uppercase tracking-[0.14em]">Calicut, Kerala</span>
      </div>
    </section>
  );
}
