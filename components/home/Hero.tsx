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
    <section className="relative -mt-[76px] flex min-h-[82svh] flex-col items-center justify-center overflow-hidden px-6 pb-20 pt-[156px] text-center md:pb-28 md:pt-[188px]">
      <div className="absolute inset-0 bg-navy-900" />
      {!reduced && <HeroVideoBackground />}
      {/* True duotone, not a flat tint: multiply darkens the video's bright
          areas (the pale desk, the laptop) instead of just sitting on top of
          them, so text stays legible regardless of what's in frame. Same
          navy-multiply + cyan-screen pairing used on every static photo
          elsewhere on the site. */}
      <div className="absolute inset-0 bg-navy-900 opacity-80 mix-blend-multiply" />
      <div className="absolute inset-0 bg-cyan-400 opacity-[0.12] mix-blend-screen" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-navy-950/30" />

      <div className="relative z-10 flex flex-col items-center">
        <motion.div {...item(0)} style={{ filter: "drop-shadow(0 2px 10px rgb(0 0 0 / 0.35))" }}>
          <Image
            src="/brand/logo-horizontal-dark.svg"
            alt="PerpeX Insights"
            width={224}
            height={48}
            priority
          />
        </motion.div>

        <h1
          className="mt-10 max-w-[920px] font-serif text-[30px] font-medium leading-[1.38] text-white [text-shadow:0_2px_16px_rgb(0_0_0_/_0.4)] sm:text-[38px]"
        >
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
          className="mt-7 max-w-[760px] text-base leading-relaxed text-white/85 [text-shadow:0_1px_8px_rgb(0_0_0_/_0.35)] sm:whitespace-nowrap sm:text-lg"
        >
          PerpeX Insights is a B2B consulting team for growing businesses across India.
        </motion.p>

        <motion.div {...item(5)}>
          <Link
            href="/consultation"
            className="group mt-7 inline-flex items-center gap-2 text-[15px] font-semibold text-white underline decoration-white/40 underline-offset-4 [text-shadow:0_1px_6px_rgb(0_0_0_/_0.35)] transition-colors hover:decoration-white"
          >
            Book a discovery call
            <ArrowRight size={15} weight="bold" className="transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
