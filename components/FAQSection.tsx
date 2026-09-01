"use client";

import { useState } from "react";
import Reveal from "./ui/Reveal";

const faqs = [
  {
    q: "How much does an engagement cost?",
    a: "It depends entirely on scope — a single Gap Analysis costs far less than a Full Transformation. We don't quote before understanding your business, but every package is designed to be MSME-accessible, not enterprise-consulting priced. You'll have a clear number after the Discovery Conversation, not a generic rate card.",
  },
  {
    q: "How long does a typical engagement take?",
    a: "Gap Analysis alone usually runs 2–4 weeks. A System Build (Gap Analysis + Documentation + Training) typically takes 60–90 days. Managing & Monitoring is ongoing, billed monthly, for as long as you need the accountability layer in place.",
  },
  {
    q: "We're a small team — is this really for us?",
    a: "Yes. We've worked with MSMEs and startups as often as ₹100+ Cr enterprises. The Diagnostic and Essentials tiers exist specifically for smaller teams who need the same rigor without the enterprise price tag.",
  },
  {
    q: "What happens after the Discovery Conversation?",
    a: "We scope a tailored engagement — right services, clear deliverables, a real timeline, and a transparent investment overview. Nothing starts until you've seen exactly what's included and what isn't.",
  },
  {
    q: "Do you just hand over documents, or do you help implement them?",
    a: "Every deliverable comes with an implementation path, not just a PDF. That's the entire reason Managing & Monitoring exists as a service — to make sure the system you paid for actually gets used.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="px-6 py-16 md:px-10 md:py-20">
      <div className="mx-auto max-w-[1000px]">
        <Reveal>
          <span className="text-[13px] text-navy-900/65">Before You Reach Out</span>
          <h2 className="mt-3 font-display text-4xl leading-[1.1] tracking-tight text-navy-900 md:text-5xl">
            Common questions.
          </h2>
        </Reveal>

        <div className="mt-10 border-t border-navy-900/10">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={faq.q} className="border-b border-navy-900/10">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="font-display text-lg text-navy-900 md:text-xl">{faq.q}</span>
                  <span
                    className={`shrink-0 text-2xl text-navy-900/65 transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <p className="max-w-2xl pb-6 text-[15px] leading-relaxed text-navy-900/70">
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
