"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react";
import { motion, useReducedMotion } from "framer-motion";
import Container from "../ui/Container";

const ease = [0.16, 1, 0.3, 1] as const;

const stats = [
  { value: "140+", label: "Clients" },
  { value: "10+", label: "Sectors" },
  { value: "₹100+ Cr", label: "Largest client" },
];

type Testimonial = { company: string };

// Deliberately breaks from the soft pill/16px-radius system used everywhere
// else on the site: thick frame, hairline grid, sharp corners, a single
// marker-highlighted word instead of a colored line. A one-off anchor for
// the homepage hero, not a site-wide shape change.
export default function Hero({ testimonials = [] }: { testimonials?: Testimonial[] }) {
  const reduced = useReducedMotion();
  const clients = Array.from(new Set(testimonials.map((t) => t.company))).slice(0, 4);

  const item = (i: number) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay: 0.1 + i * 0.1, ease },
        };

  return (
    <section className="pb-16 pt-8 md:pb-24 md:pt-12">
      <Container>
        <div className="overflow-hidden rounded-[10px] border-[10px] border-cyan-400 bg-base">
          {/* top: wordmark + real stat tiles */}
          <div className="grid grid-cols-1 gap-4 border-b-2 border-navy-900/10 px-6 py-5 md:grid-cols-[1fr_auto] md:items-center md:gap-6 md:px-8">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white ring-1 ring-navy-900/10">
                <Image src="/brand/icon-cyan.svg" alt="" width={16} height={13} />
              </span>
              <span className="font-display text-[15px] font-bold tracking-[-0.01em] text-navy-900">
                PerpeX Insights
              </span>
            </div>
            <dl className="flex divide-x divide-navy-900/10">
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col justify-center px-4 text-right first:pl-0 md:px-5">
                  <dd className="font-display text-[17px] font-bold leading-tight text-navy-900">{s.value}</dd>
                  <dt className="text-[10.5px] uppercase tracking-wide text-navy-600">{s.label}</dt>
                </div>
              ))}
            </dl>
          </div>

          {/* body: statement + photo */}
          <div className="grid grid-cols-1 border-b-2 border-navy-900/10 lg:grid-cols-12">
            <div className="border-b-2 border-navy-900/10 px-6 py-9 md:px-8 md:py-12 lg:col-span-9 lg:border-b-0 lg:border-r-2">
              <h1 className="font-display text-3xl font-bold leading-[1.2] tracking-[-0.02em] text-navy-900 sm:text-4xl lg:text-[2.5rem]">
                <motion.span {...item(0)} className="block">
                  We find what&rsquo;s broken in your business.
                </motion.span>
                <motion.span {...item(1)} className="block">
                  We build what fixes it.
                </motion.span>
                <motion.span {...item(2)} className="block">
                  We stay until it{" "}
                  <span className="relative inline-block px-0.5">
                    <span
                      aria-hidden
                      className="absolute bottom-[2px] left-[-4px] right-[-4px] top-[34%] rounded-sm bg-cyan-400"
                    />
                    <span className="relative">holds</span>
                  </span>
                  .
                </motion.span>
              </h1>
              <motion.p
                {...item(3)}
                className="mt-7 max-w-[46ch] text-lg leading-relaxed text-navy-600"
              >
                PerpeX Insights is a B2B consulting team for growing businesses across India.
              </motion.p>
            </div>

            <motion.div
              {...(reduced
                ? {}
                : { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.9, delay: 0.35 } })}
              className="relative aspect-[16/9] overflow-hidden lg:col-span-3 lg:aspect-auto"
            >
              <Image
                src="https://picsum.photos/id/1/1000/1250"
                alt="A leadership team reviewing an operating plan at a table"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 25vw"
                className="object-cover grayscale"
              />
              <div className="absolute inset-0 bg-navy-900 opacity-70 mix-blend-multiply" />
              <div className="absolute inset-0 bg-cyan-400 opacity-15 mix-blend-screen" />
              <span className="absolute bottom-3 left-3 text-[10px] font-semibold uppercase tracking-wide text-white/60">
                Photo
              </span>
            </motion.div>
          </div>

          {/* CTA bar: sharp, rectangular, split */}
          <div className="grid grid-cols-1 border-b-2 border-navy-900/10 sm:grid-cols-2">
            <Link
              href="/consultation"
              className="group flex items-center justify-center gap-2 border-b-2 border-navy-900/10 bg-cyan-400/10 px-6 py-5 text-[13px] font-bold uppercase tracking-wide text-navy-900 transition-colors hover:bg-cyan-400/20 sm:border-b-0 sm:border-r-2"
            >
              Book a Discovery Call
              <ArrowRight size={15} weight="bold" className="transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/services"
              className="group flex items-center justify-center gap-2 px-6 py-5 text-[13px] font-bold uppercase tracking-wide text-navy-900 transition-colors hover:bg-navy-900/[0.04]"
            >
              See the Four Services
              <ArrowRight size={15} weight="bold" className="transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* trust row */}
          {clients.length > 0 && (
            <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 md:px-8">
              <span className="text-[11px] uppercase tracking-wide text-navy-500">Trusted by</span>
              <div className="flex flex-wrap gap-x-6 gap-y-1">
                {clients.map((c) => (
                  <span key={c} className="font-display text-[13px] font-semibold text-navy-900/55">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
