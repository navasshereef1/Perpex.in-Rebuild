"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Plus } from "@phosphor-icons/react";
import Container from "@/components/ui/Container";

type Service = {
  slug: string;
  stage: string | null;
  title: string;
  description: string;
  deliverables: string[] | null;
};

export default function ServicesAccordion({ services }: { services: Service[] }) {
  const [open, setOpen] = useState(0);
  const reduced = useReducedMotion();

  return (
    <section className="pb-24 md:pb-32">
      <Container>
        <div className="border-t border-line">
          {services.map((service, i) => {
            const isOpen = open === i;
            return (
              <div key={service.slug} className="border-b border-line">
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 py-7 text-left"
                >
                  <span className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-6">
                    <span className="text-[15px] text-navy-500 sm:w-24">{service.stage}</span>
                    <span className="font-display text-2xl font-semibold tracking-[-0.02em] text-navy-900 md:text-3xl">
                      {service.title}
                    </span>
                  </span>
                  <Plus
                    size={22}
                    className={`shrink-0 text-navy-500 transition-transform duration-500 ease-soft ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="panel"
                      initial={reduced ? false : { height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={reduced ? undefined : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="grid grid-cols-1 gap-10 pb-10 md:grid-cols-12 md:pl-[7.5rem]">
                        <div className="md:col-span-7">
                          <p className="max-w-[58ch] text-lg leading-relaxed text-navy-600">
                            {service.description}
                          </p>
                          <Link
                            href={`/services/${service.slug}`}
                            className="group mt-6 inline-flex items-center gap-2 text-[15px] font-medium text-navy-900"
                          >
                            Read about {service.title}
                            <ArrowRight size={16} className="transition-transform duration-500 ease-soft group-hover:translate-x-1" />
                          </Link>
                        </div>
                        <div className="md:col-span-5">
                          <p className="text-[15px] text-navy-500">Deliverables include</p>
                          <ul className="mt-3 space-y-2">
                            {(service.deliverables ?? []).slice(0, 5).map((d) => (
                              <li key={d} className="text-[15px] text-navy-900">{d}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
