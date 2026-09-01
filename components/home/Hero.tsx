"use client";

import { motion, useReducedMotion } from "framer-motion";
import Button from "../ui/Button";
import Container from "../ui/Container";
import Photo from "../ui/Photo";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const reduced = useReducedMotion();
  const item = (i: number) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.9, delay: 0.1 + i * 0.1, ease },
        };

  return (
    <section className="pb-20 pt-10 md:pb-28 md:pt-16">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <motion.h1
              {...item(0)}
              className="max-w-[12ch] font-display text-5xl font-bold leading-[1.1] tracking-[-0.03em] text-navy-900 md:text-6xl lg:text-7xl"
            >
              Organising the <em className="not-italic font-bold text-cyan-500 md:italic md:font-semibold">un-organised.</em>
            </motion.h1>
            <motion.p
              {...item(1)}
              className="mt-7 max-w-[48ch] text-lg leading-relaxed text-navy-600 md:text-xl"
            >
              PerpeX Insights is a B2B consulting team for growing businesses. We diagnose
              what is broken in how you operate, document the fix, train your people to run
              it, and stay to make sure it holds.
            </motion.p>
            <motion.div {...item(2)} className="mt-10 flex flex-wrap items-center gap-4">
              <Button href="/consultation">Book a discovery call</Button>
              <Button href="/services" variant="secondary">
                See the four services
              </Button>
            </motion.div>
          </div>

          <motion.div
            {...(reduced
              ? {}
              : {
                  initial: { opacity: 0, y: 32, scale: 0.98 },
                  animate: { opacity: 1, y: 0, scale: 1 },
                  transition: { duration: 1.1, delay: 0.3, ease },
                })}
            className="lg:col-span-5"
          >
            <Photo
              seed="1"
              alt="A leadership team reviewing an operating plan at a table"
              width={1000}
              height={1250}
              aspect="aspect-[4/5]"
              priority
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
