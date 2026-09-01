"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Plus } from "@phosphor-icons/react";
import Container from "./ui/Container";
import Reveal from "./ui/Reveal";
import Section from "./ui/Section";

const faqs = [
  {
    q: "How much does an engagement cost?",
    a: "It depends on scope. A single Gap Analysis costs far less than a Full Transformation. We do not quote before understanding your business, and every package is priced for an MSME, not for an enterprise consulting budget. You will have a clear number after the discovery call.",
  },
  {
    q: "How long does a typical engagement take?",
    a: "Gap Analysis alone usually runs 2 to 4 weeks. A System Build (Gap Analysis, Documentation, Training) takes 60 to 90 days. Managing & Monitoring is ongoing and billed monthly for as long as you want the accountability layer in place.",
  },
  {
    q: "We are a small team. Is this really for us?",
    a: "Yes. We have worked with startups as often as with ₹100+ Cr enterprises. The Diagnostic and Essentials tiers exist for smaller teams that need the same rigour without the enterprise price.",
  },
  {
    q: "What happens after the discovery call?",
    a: "We scope a tailored engagement: the right services, clear deliverables, a real timeline, and a transparent investment. Nothing starts until you have seen what is included and what is not.",
  },
  {
    q: "Do you hand over documents, or help implement them?",
    a: "Every deliverable comes with an implementation path, not just a PDF. Managing & Monitoring exists as a service to make sure the system you paid for gets used.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);
  const reduced = useReducedMotion();

  return (
    <Section className="pt-0 md:pt-0">
      <Container className="max-w-[900px]">
        <Reveal>
          <h2 className="font-display text-3xl font-bold tracking-[-0.02em] text-navy-900 md:text-4xl">
            Common questions
          </h2>
        </Reveal>

        <div className="mt-10 border-t border-line">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={faq.q} className="border-b border-line">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="font-display text-lg font-semibold tracking-[-0.01em] text-navy-900 md:text-xl">
                    {faq.q}
                  </span>
                  <Plus
                    size={20}
                    className={`shrink-0 text-navy-500 transition-transform duration-500 ease-soft ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={reduced ? false : { height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={reduced ? undefined : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-[64ch] pb-6 text-[15px] leading-relaxed text-navy-600">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
