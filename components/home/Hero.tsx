"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

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
    <section ref={containerRef} className="px-6 pb-20 pt-16 md:px-10 md:pb-32 md:pt-24">
      <div className="mx-auto max-w-[1440px]">
        <span className="hero-reveal mb-10 block text-[15px] text-navy-900/50">
          Perpex Insights — B2B Transformation &amp; Execution Services
        </span>

        <h1 className="max-w-5xl font-display text-[13vw] leading-[0.98] tracking-tight text-navy-900 md:text-[6.4vw]">
          <span className="hero-reveal block font-normal">We organise the</span>
          <span className="hero-reveal block font-light italic text-gold-500">un-organised.</span>
        </h1>

        <div className="hero-reveal mt-12 flex flex-col justify-between gap-8 border-t border-navy-900/10 pt-10 md:flex-row md:items-end">
          <p className="max-w-md text-lg leading-relaxed text-navy-900/60">
            We diagnose what&rsquo;s broken, build the systems your business needs to run
            properly, train your team to execute them, and stay to monitor performance daily.
          </p>
          <a
            href="/consultation"
            className="group inline-flex shrink-0 items-center gap-3 text-lg text-navy-900"
          >
            Start a Discovery Conversation
            <span className="transition-transform group-hover:translate-x-1.5">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
