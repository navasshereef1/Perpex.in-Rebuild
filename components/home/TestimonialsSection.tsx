"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/lib/seedData";

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const current = testimonials[active];

  return (
    <section className="bg-navy-900 px-6 py-24 text-cream-50 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="max-w-xl font-display text-4xl leading-[1.05] md:text-5xl">
            Their words, not ours.
          </h2>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                onClick={() => setActive(i)}
                className={`text-[14px] transition-colors ${
                  active === i ? "text-gold-300" : "text-cream-50/40 hover:text-cream-50/70"
                }`}
              >
                {t.name}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4 }}
            className="border-t border-white/10 pt-10"
          >
            <p className="max-w-3xl font-display text-2xl leading-relaxed text-cream-50 md:text-3xl">
              &ldquo;{current.description}&rdquo;
            </p>
            <div className="mt-8 text-[14px] text-cream-50/50">
              {current.name} — {current.designation}, {current.company}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
