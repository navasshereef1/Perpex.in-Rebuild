"use client";

import { motion } from "framer-motion";
import Reveal from "../ui/Reveal";

const observations = [
  "Processes exist only in people's heads — not on paper",
  "No clarity on who owns what decisions",
  "KPIs either don't exist or are never tracked",
  "Teams operate on habit, not documented process",
  "New hires take too long to become productive",
  "Management has no reliable way to measure output",
  "Fixing one problem creates two new ones",
];

const consequences = [
  "Revenue targets consistently missed",
  "Sales teams underperforming with no clear cause",
  "High dependency on founders for daily decisions",
  "Difficult to scale — systems break when teams grow",
  "Investor and audit readiness is weak",
  "Culture of firefighting instead of planning",
  "Good people leave due to unclear expectations",
];

const listVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};
const itemVariants = {
  hidden: { opacity: 0, x: -8 },
  show: { opacity: 1, x: 0 },
};

export default function RealitySection() {
  return (
    <section className="px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-[1440px]">
        <Reveal>
          <span className="text-[13px] text-navy-900/65">The Business Reality We Solve</span>
          <h2 className="mt-3 max-w-xl font-display text-4xl leading-[1.1] tracking-tight text-navy-900 md:text-5xl">
            Different business. Same broken pattern.
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
          <Reveal delay={0.05} className="rounded-[28px] bg-cream-100 p-8 md:p-10">
            <span className="text-[13px] text-navy-900/65">What we observe</span>
            <motion.ul
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              variants={listVariants}
              className="mt-5 space-y-3.5"
            >
              {observations.map((o) => (
                <motion.li
                  key={o}
                  variants={itemVariants}
                  className="text-[15px] leading-relaxed text-navy-900/70"
                >
                  {o}
                </motion.li>
              ))}
            </motion.ul>
          </Reveal>
          <Reveal delay={0.1} className="grain relative overflow-hidden rounded-[28px] bg-navy-900 p-8 text-cream-50 md:p-10">
            <div className="relative z-10">
              <span className="text-[13px] text-cyan-300/80">What it costs the business</span>
              <motion.ul
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                variants={listVariants}
                className="mt-5 space-y-3.5"
              >
                {consequences.map((c) => (
                  <motion.li
                    key={c}
                    variants={itemVariants}
                    className="text-[15px] leading-relaxed text-cream-50/75"
                  >
                    {c}
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
