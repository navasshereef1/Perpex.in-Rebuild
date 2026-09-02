"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react";
import { motion, useReducedMotion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

// Deliberately quiet: no photo, no nav duplication (the global Navbar already
// sits above this), no colored word-highlight. Restraint is the design here.
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
    <section className="flex min-h-[76svh] flex-col items-center justify-center px-6 py-20 text-center md:py-28">
      <motion.div {...item(0)}>
        <Image
          src="/brand/logo-horizontal-light.svg"
          alt="PerpeX Insights"
          width={176}
          height={38}
          priority
        />
      </motion.div>

      <h1 className="mt-10 max-w-[640px] font-serif text-xl font-medium leading-[1.4] text-navy-900 sm:text-2xl">
        <motion.span {...item(1)} className="block">
          We find what&rsquo;s broken in your business.
        </motion.span>
        <motion.span {...item(2)} className="block">
          We build what fixes it.
        </motion.span>
        <motion.span {...item(3)} className="block">
          We stay until it holds.
        </motion.span>
      </h1>

      <motion.p {...item(4)} className="mt-6 max-w-[38ch] text-[15px] leading-relaxed text-navy-600">
        PerpeX Insights is a B2B consulting team for growing businesses across India.
      </motion.p>

      <motion.div {...item(5)}>
        <Link
          href="/consultation"
          className="group mt-7 inline-flex items-center gap-2 text-[14px] font-semibold text-navy-900 underline decoration-navy-900/25 underline-offset-4 transition-colors hover:decoration-navy-900"
        >
          Book a discovery call
          <ArrowRight size={15} weight="bold" className="transition-transform duration-300 group-hover:translate-x-0.5" />
        </Link>
      </motion.div>
    </section>
  );
}
