"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { services } from "@/lib/seedData";
import { accentColors } from "@/lib/accentColors";
import MediaPlaceholder from "@/components/ui/MediaPlaceholder";

export default function ServicesAccordion() {
  const [open, setOpen] = useState(0);

  return (
    <section className="px-6 pb-24 md:px-10 md:pb-32">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-3">
        {services.map((service, i) => {
          const isOpen = open === i;
          const accent = accentColors[i % accentColors.length];

          return (
            <div key={service.slug} className="overflow-hidden rounded-[28px]">
              <button
                onClick={() => setOpen(i)}
                className={`flex w-full items-center justify-between gap-6 px-8 py-7 text-left transition-colors ${
                  isOpen ? "" : "bg-cream-100 hover:bg-cream-200"
                }`}
                style={isOpen ? { backgroundColor: accent.bg, color: accent.text } : undefined}
              >
                <div className="flex items-center gap-4">
                  <span
                    className={`rounded-full px-3.5 py-1.5 text-[13px] ${
                      isOpen ? "bg-white/15" : "bg-navy-900/[0.06] text-navy-900/60"
                    }`}
                  >
                    {service.stage}
                  </span>
                  <span
                    className={`font-display text-2xl md:text-3xl ${isOpen ? "" : "text-navy-900"}`}
                  >
                    {service.title}
                  </span>
                </div>
                <span
                  className={`text-2xl transition-transform duration-300 ${
                    isOpen ? "rotate-45" : "text-navy-900/40"
                  }`}
                >
                  +
                </span>
              </button>

              <motion.div
                initial={false}
                animate={{ height: isOpen ? "auto" : 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
                style={isOpen ? { backgroundColor: accent.bg } : undefined}
              >
                <div
                  className="grid grid-cols-1 gap-10 px-8 pb-10 md:grid-cols-12"
                  style={{ color: accent.text }}
                >
                  <div className="md:col-span-6">
                    <p className="text-[15px] leading-relaxed opacity-80">
                      {service.description}
                    </p>
                    <ul className="mt-6 space-y-2.5">
                      {service.deliverables.slice(0, 5).map((d) => (
                        <li key={d} className="text-[14px] opacity-70">
                          — {d}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={`/services/${service.slug}`}
                      className="mt-8 inline-flex items-center gap-2 rounded-full bg-white/15 px-5 py-2.5 text-[13px] backdrop-blur-sm"
                    >
                      View full service page →
                    </a>
                  </div>
                  <div className="md:col-span-6">
                    <MediaPlaceholder
                      label={`${service.title} in practice`}
                      className="h-64 w-full"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
