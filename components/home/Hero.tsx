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
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay: 0.1 + i * 0.12, ease },
        };

  return (
    <section className="pb-20 pt-10 md:pb-28 md:pt-16">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-9">
            <h1 className="font-display text-3xl font-bold leading-[1.2] tracking-[-0.02em] text-navy-900 sm:text-4xl lg:text-4xl">
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
              className="mt-7 max-w-[48ch] text-lg leading-relaxed text-navy-600 md:text-xl"
            >
              PerpeX Insights is a B2B consulting team for growing businesses across India.
            </motion.p>
            <motion.div {...item(4)} className="mt-10 flex flex-wrap items-center gap-4">
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
                  transition: { duration: 1.1, delay: 0.4, ease },
                })}
            className="lg:col-span-3"
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
