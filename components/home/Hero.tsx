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
        <div className="relative">
          <h1 className="hero-reveal max-w-3xl font-display text-[12vw] font-medium leading-[1.05] tracking-tight text-navy-900 md:text-[4.6vw]">
            <span className="border-b-[3px] border-navy-900">We</span>{" "}
            <span className="text-navy-900/35">diagnose the chaos,</span>{" "}
            <span className="border-b-[3px] border-navy-900">build</span>{" "}
            <span className="text-navy-900/35">the system, and</span>{" "}
            <span className="border-b-[3px] border-navy-900">stay</span>{" "}
            <span className="text-navy-900/35">until it works.</span>
          </h1>

          <MediaPlaceholder
            label="Client onboarding walkthrough"
            playable
            className="hero-reveal mt-10 h-64 w-full md:absolute md:right-0 md:top-0 md:mt-0 md:h-72 md:w-[380px]"
          />
        </div>

        <div className="hero-reveal mt-14 flex flex-col justify-between gap-8 border-t border-navy-900/10 pt-8 md:flex-row md:items-center">
          <p className="max-w-md text-[15px] leading-relaxed text-navy-900/55">
            Perpex Insights — B2B Transformation &amp; Execution Services. Big-firm quality.
            Scale-appropriate cost.
          </p>
          <a
            href="/consultation"
            className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-navy-900 px-6 py-3 text-[14px] text-cream-50 transition-colors hover:bg-navy-800"
          >
            Start a Discovery Conversation
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
