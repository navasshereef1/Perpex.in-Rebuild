import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { engagementModels, trainingTiers } from "@/lib/seedData";

export const metadata: Metadata = {
  title: "Engagement Models",
  description:
    "Engage one service or all four — Standalone, Diagnostic, System Build, Full Transformation, or Monitoring Retainer.",
};

export default function EngagementPage() {
  return (
    <>
      <PageHero
        eyebrow="Working Together"
        title="Engagement models"
        description="All four services can be engaged independently or in any combination. The full transformation power comes when they're implemented in sequence."
      />

      <section className="px-6 pb-20 md:px-10 md:pb-28">
        <div className="mx-auto max-w-[1440px] border-t border-navy-900/10">
          {engagementModels.map((m, i) => (
            <div
              key={m.name}
              className="grid grid-cols-1 gap-3 border-b border-navy-900/10 py-8 md:grid-cols-12 md:items-center md:gap-6"
            >
              <div className="flex items-baseline gap-6 md:col-span-3">
                <span className="text-[15px] text-navy-900/35">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-2xl text-navy-900">{m.name}</span>
              </div>
              <p className="text-[15px] leading-relaxed text-navy-900/60 md:col-span-6">
                {m.servicesIncluded}
              </p>
              <p className="text-[14px] italic text-navy-900/45 md:col-span-3">{m.bestFor}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-navy-900/10 bg-cream-100 px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1440px]">
          <h2 className="max-w-xl font-display text-4xl leading-[1.05] text-navy-900 md:text-5xl">
            Three training tiers.
          </h2>

          <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-3">
            {trainingTiers.map((t) => (
              <div key={t.name} className="border-t border-navy-900/20 pt-6">
                <span className="font-display text-3xl text-navy-900">{t.name}</span>
                <dl className="mt-6 space-y-4 text-[14px]">
                  <div>
                    <dt className="text-navy-900/40">Target audience</dt>
                    <dd className="mt-1 text-navy-900/70">{t.targetAudience}</dd>
                  </div>
                  <div>
                    <dt className="text-navy-900/40">Format</dt>
                    <dd className="mt-1 text-navy-900/70">{t.format}</dd>
                  </div>
                  <div>
                    <dt className="text-navy-900/40">Hours</dt>
                    <dd className="mt-1 text-navy-900/70">{t.trainingHours}</dd>
                  </div>
                  <div>
                    <dt className="text-navy-900/40">What&rsquo;s included</dt>
                    <dd className="mt-1 leading-relaxed text-navy-900/70">{t.whatsIncluded}</dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
