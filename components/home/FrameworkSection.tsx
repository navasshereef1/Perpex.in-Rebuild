"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { services } from "@/lib/seedData";

export default function FrameworkSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="border-t border-navy-900/10 px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="max-w-xl font-display text-4xl leading-[1.05] text-navy-900 md:text-5xl">
            The transformation framework
          </h2>
          <p className="max-w-sm text-[15px] leading-relaxed text-navy-900/50">
            Each service is powerful on its own. Together, they create irreversible
            transformation.
          </p>
        </div>

        <div className="border-t border-navy-900/10">
          {services.map((service, i) => {
            const isOpen = open === i;
            return (
              <div key={service.slug} className="border-b border-navy-900/10">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-8 text-left"
                >
                  <div className="flex items-baseline gap-6 md:gap-10">
                    <span className="text-[15px] text-navy-900/35">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-3xl text-navy-900 md:text-4xl">
                      {service.title}
                    </span>
                  </div>
                  <div className="flex items-center gap-6">
                    <span className="hidden text-[13px] uppercase tracking-[0.1em] text-gold-500 md:inline">
                      {service.stage}
                    </span>
                    <span
                      className={`text-2xl text-navy-900/40 transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </div>
                </button>

                <motion.div
                  initial={false}
                  animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="grid grid-cols-1 gap-8 pb-10 md:grid-cols-12">
                    <p className="text-base leading-relaxed text-navy-900/60 md:col-span-6">
                      {service.description}
                    </p>
                    <ul className="md:col-span-6 md:col-start-7">
                      {service.deliverables.slice(0, 4).map((d) => (
                        <li
                          key={d}
                          className="border-b border-navy-900/5 py-2.5 text-[14px] text-navy-900/55 last:border-0"
                        >
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
