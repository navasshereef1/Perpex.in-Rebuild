"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import OrganizeCanvas from "../ui/OrganizeCanvas";
import Magnetic from "../ui/Magnetic";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".hero-mask span", { yPercent: 110 });
      gsap.set(".hero-fade", { opacity: 0, y: 16 });

      const tl = gsap.timeline({ delay: 0.4, defaults: { ease: "power4.out" } });
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
      className="relative flex min-h-[92svh] flex-col justify-between overflow-hidden px-6 pb-10 pt-8 md:px-10 md:pb-14"
    >
      <OrganizeCanvas className="pointer-events-none absolute inset-0 h-full w-full opacity-70" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-cream-50 via-transparent to-cream-50" />

      <span className="hero-fade relative z-10 inline-flex w-fit items-center gap-2 rounded-full bg-navy-900/[0.06] px-4 py-2 text-[13px] text-navy-900/60">
        B2B Transformation &amp; Execution — 140+ businesses, 10+ sectors
      </span>

      <div className="relative z-10">
        <h1 className="max-w-4xl font-display text-[13vw] font-medium leading-[0.96] tracking-tight text-navy-900 sm:text-[10vw] md:text-[6vw]">
          <span className="hero-mask block overflow-hidden">
            <span className="block">Organising the</span>
          </span>
          <span className="hero-mask block overflow-hidden">
            <span className="block italic text-cyan-500">un-organised.</span>
          </span>
        </h1>

        <p className="hero-fade mt-8 max-w-lg text-[16px] leading-relaxed text-navy-900/60 md:text-[17px]">
          Most growing businesses run on tribal knowledge and founder heroics — until that
          stops scaling. We diagnose exactly what&rsquo;s broken, document the system that
          replaces it, train your team to run that system, and stay on to make sure it holds.
        </p>
      </div>

      <div className="hero-fade relative z-10 mt-10 flex flex-col justify-between gap-8 border-t border-navy-900/10 pt-8 md:flex-row md:items-end">
        <div className="flex flex-wrap items-center gap-4">
          <Magnetic>
            <a
              href="/consultation"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-navy-900 px-6 py-3.5 text-[14px] text-cream-50 transition-colors hover:bg-navy-800"
            >
              Start a Discovery Conversation
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </Magnetic>
          <span className="text-[12px] text-navy-900/40">Free · No obligation · 30 minutes</span>
        </div>

        <div className="flex items-center gap-2 text-[12px] text-navy-900/40">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-500" />
          Scroll to see the framework
        </div>
      </div>
    </section>
  );
}
