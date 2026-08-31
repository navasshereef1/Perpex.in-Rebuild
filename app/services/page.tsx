import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { services } from "@/lib/seedData";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Gap Analysis, Documentation, Training, and Managing & Monitoring — the four-stage Perpex transformation framework.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Diagnose — Design — Enable — Control"
        title="The transformation framework"
        description="Each service is powerful on its own. Together, they create irreversible transformation."
      />

      <section className="px-6 pb-24 md:px-10 md:pb-32">
        <div className="mx-auto max-w-[1440px] border-t border-navy-900/10">
          {services.map((service, i) => (
            <a
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group flex flex-col justify-between gap-4 border-b border-navy-900/10 py-10 md:flex-row md:items-center"
            >
              <div className="flex items-baseline gap-6 md:gap-10">
                <span className="text-[15px] text-navy-900/35">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <span className="mb-1 block text-[13px] uppercase tracking-[0.1em] text-gold-500">
                    {service.stage}
                  </span>
                  <span className="font-display text-4xl text-navy-900 md:text-5xl">
                    {service.title}
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between gap-8 md:justify-end">
                <p className="max-w-xs text-[15px] leading-relaxed text-navy-900/55">
                  {service.tagline}
                </p>
                <span className="text-2xl text-navy-900/40 transition-transform duration-300 group-hover:translate-x-1.5">
                  →
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
