import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Tag from "@/components/ui/Tag";
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

      <section className="px-6 pb-16 md:px-10 md:pb-20">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-4 md:grid-cols-2">
          {engagementModels.map((m) => (
            <div key={m.name} className="rounded-[28px] border border-navy-900/[0.06] bg-white p-8">
              <h3 className="font-display text-2xl text-navy-900">{m.name}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-navy-900/60">
                {m.servicesIncluded}
              </p>
              <p className="mt-4 text-[13px] text-navy-900/40">Best for: {m.bestFor}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-[1440px]">
          <h2 className="max-w-xl font-display text-4xl leading-[1.1] tracking-tight text-navy-900 md:text-5xl">
            Three training tiers
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
            {trainingTiers.map((t) => (
              <div key={t.name} className="rounded-[28px] bg-cream-100 p-8">
                <Tag>{t.name}</Tag>
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
