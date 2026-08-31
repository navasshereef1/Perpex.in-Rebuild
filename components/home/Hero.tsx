"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import MediaPlaceholder from "../ui/MediaPlaceholder";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".hero-reveal", { opacity: 0, y: 22 });
      gsap.to(".hero-reveal", {
        opacity: 1,
        y: 0,
        duration: 0.9,
        stagger: 0.08,
        ease: "power3.out",
        delay: 0.15,
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="px-6 pb-16 pt-6 md:px-10 md:pb-24">
      <div className="mx-auto max-w-[1440px]">
        <span className="hero-reveal mb-6 inline-flex items-center gap-2 rounded-full bg-navy-900/[0.06] px-4 py-2 text-[13px] text-navy-900/60">
          B2B Transformation &amp; Execution — 140+ businesses, 10+ sectors
        </span>

        <div className="relative">
          <h1 className="hero-reveal max-w-3xl font-display text-[13vw] font-medium leading-[0.98] tracking-tight text-navy-900 sm:text-[10vw] md:text-[5.2vw]">
            Organising the{" "}
            <span className="italic text-cyan-500">un-organised.</span>
          </h1>

          <MediaPlaceholder
            label="Client onboarding walkthrough"
            playable
            className="hero-reveal mt-10 h-64 w-full md:absolute md:right-0 md:top-0 md:mt-0 md:h-72 md:w-[380px]"
          />
        </div>

        <div className="hero-reveal mt-10 flex flex-col justify-between gap-8 border-t border-navy-900/10 pt-8 md:flex-row md:items-end">
          <p className="max-w-lg text-[16px] leading-relaxed text-navy-900/60 md:text-[17px]">
            Most growing businesses run on tribal knowledge and founder heroics — until that
            stops scaling. We diagnose exactly what&rsquo;s broken, document the system that
            replaces it, train your team to run that system, and stay on to make sure it holds.
          </p>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="/consultation"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-navy-900 px-6 py-3.5 text-[14px] text-cream-50 transition-colors hover:bg-navy-800"
            >
              Start a Discovery Conversation
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <span className="text-center text-[12px] text-navy-900/40 sm:text-left">
              Free · No obligation · 30 minutes
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
