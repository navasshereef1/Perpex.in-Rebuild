"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Tag from "../ui/Tag";
import TiltCard from "../ui/TiltCard";
import Reveal from "../ui/Reveal";

type Service = {
  slug: string;
  stage: string | null;
  title: string;
  description: string;
};

export default function FrameworkSection({ services }: { services: Service[] }) {
  const [active, setActive] = useState(0);

  return (
    <section className="px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-[1440px]">
        <Reveal>
          <span className="text-[13px] text-navy-900/45">The Transformation Framework</span>
          <h2 className="mt-3 max-w-2xl font-display text-4xl leading-[1.1] tracking-tight text-navy-900 md:text-5xl">
            One system. Four moving parts.
          </h2>
          <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-navy-900/50">
            Each service works on its own. Run in sequence, they compound — findings feed
            documentation, documentation drives training, training makes monitoring meaningful.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="hidden md:col-span-4 md:block">
            <div className="sticky top-32 flex flex-col gap-6">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
              >
                <span className="font-display text-8xl text-navy-900/10">
                  {String(active + 1).padStart(2, "0")}
                </span>
                <div className="mt-2">
                  <Tag>{services[active]?.stage}</Tag>
                  <h3 className="mt-4 font-display text-3xl text-navy-900">
                    {services[active]?.title}
                  </h3>
                </div>
              </motion.div>
              <div className="flex gap-1.5">
                {services.map((_, i) => (
                  <span
                    key={i}
                    className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
                      i === active ? "bg-cyan-500" : "bg-navy-900/10"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 md:col-span-8">
            {services.map((service, i) => (
              <motion.div
                key={service.slug}
                onViewportEnter={() => setActive(i)}
                viewport={{ amount: 0.6, margin: "-20% 0px -20% 0px" }}
              >
                <TiltCard as="a" href={`/services/${service.slug}`}>
                  <div className="group block rounded-[28px] border border-navy-900/[0.06] bg-white p-8 transition-shadow hover:shadow-[0_20px_50px_rgba(3,17,38,0.08)]">
                    <div className="flex items-center justify-between md:hidden">
                      <Tag>{service.stage}</Tag>
                    </div>
                    <div className="flex items-start justify-between gap-6">
                      <div>
                        <h3 className="mt-4 font-display text-2xl text-navy-900 md:mt-0">
                          {service.title}
                        </h3>
                        <p className="mt-2.5 max-w-md text-[15px] leading-relaxed text-navy-900/55">
                          {service.description}
                        </p>
                      </div>
                      <span className="mt-1 shrink-0 text-xl text-navy-900/30 transition-transform group-hover:translate-x-1 group-hover:text-navy-900">
                        →
                      </span>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
