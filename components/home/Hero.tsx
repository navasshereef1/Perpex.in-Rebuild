"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react";
import { motion, useReducedMotion } from "framer-motion";
import HeroVideoBackground from "./HeroVideoBackground";

const ease = [0.16, 1, 0.3, 1] as const;

function Mark({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-block px-1">
      <span
        aria-hidden
        className="absolute bottom-[3px] left-[-5px] right-[-5px] top-[26%] rounded-sm bg-cyan-400"
      />
      <span className="relative text-navy-900">{children}</span>
    </span>
  );
}

export default function Hero() {
  const reduced = useReducedMotion();
  const item = (i: number) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, y: 14 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay: 0.15 + i * 0.13, ease },
        };

  return (
    <section className="relative flex min-h-[82svh] flex-col items-center justify-center overflow-hidden px-6 py-20 text-center md:py-28">
      <div className="absolute inset-0 bg-navy-900" />
      {!reduced && <HeroVideoBackground />}
      <div className="absolute inset-0 bg-navy-900/72" />
      <div className="absolute inset-0 bg-cyan-400/10 mix-blend-screen" />

      <div className="relative z-10 flex flex-col items-center">
        <motion.div {...item(0)}>
          <Image
            src="/brand/logo-horizontal-dark.svg"
            alt="PerpeX Insights"
            width={188}
            height={40}
            priority
          />
        </motion.div>

        <h1 className="mt-10 max-w-[820px] font-serif text-[26px] font-medium leading-[1.4] text-white sm:text-[32px]">
          <motion.span {...item(1)} className="block">
            We <Mark>find</Mark> what&rsquo;s broken in your business.
          </motion.span>
          <motion.span {...item(2)} className="block">
            We <Mark>build</Mark> what fixes it.
          </motion.span>
          <motion.span {...item(3)} className="block">
            We <Mark>stay</Mark> until it holds.
          </motion.span>
        </h1>

        <motion.p
          {...item(4)}
          className="mt-6 max-w-[720px] text-[15px] leading-relaxed text-white/70 sm:whitespace-nowrap"
        >
          PerpeX Insights is a B2B consulting team for growing businesses across India.
        </motion.p>

        <motion.div {...item(5)}>
          <Link
            href="/consultation"
            className="group mt-7 inline-flex items-center gap-2 text-[14px] font-semibold text-white underline decoration-white/35 underline-offset-4 transition-colors hover:decoration-white"
          >
            Book a discovery call
            <ArrowRight size={15} weight="bold" className="transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
