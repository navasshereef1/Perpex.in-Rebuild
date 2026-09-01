import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Tag from "@/components/ui/Tag";
import Reveal from "@/components/ui/Reveal";
import TiltCard from "@/components/ui/TiltCard";
import Magnetic from "@/components/ui/Magnetic";
import OrganizeCanvas from "@/components/ui/OrganizeCanvas";
import ComparisonTable from "@/components/engagement/ComparisonTable";
import { getEngagementModels, getTrainingTiers } from "@/lib/db/queries";

export const metadata: Metadata = {
  title: "Engagement Models",
  description:
    "Engage one service or all four — Standalone, Diagnostic, System Build, Full Transformation, or Monitoring Retainer.",
};

export const dynamic = "force-dynamic";

export default async function EngagementPage() {
  const [engagementModels, trainingTiers] = await Promise.all([
    getEngagementModels(),
    getTrainingTiers(),
  ]);

  return (
    <>
      <PageHero
        eyebrow="Working Together"
        title="Pick your depth of commitment."
        description="Engage one service, or all four. Most clients start with a Diagnostic and scale up once they see what's actually broken."
      />

      <section className="px-6 pb-10 md:px-10 md:pb-14">
        <ComparisonTable models={engagementModels} />
      </section>

      <section className="px-6 pb-16 md:px-10 md:pb-20">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-4 md:grid-cols-2">
          {engagementModels.map((m: any, i: number) => (
            <Reveal key={m.name} delay={(i % 2) * 0.06}>
              <TiltCard className="rounded-[28px] border border-navy-900/[0.06] bg-white p-8">
                <h3 className="font-display text-2xl text-navy-900">{m.name}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-navy-900/70">
                  {m.servicesIncluded}
                </p>
                <p className="mt-4 text-[13px] text-navy-900/65">Best for: {m.bestFor}</p>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1440px]">
          <Reveal>
            <span className="text-[13px] text-navy-900/65">Under the Training Service</span>
            <h2 className="mt-3 max-w-xl font-display text-4xl leading-[1.1] tracking-tight text-navy-900 md:text-5xl">
              Three ways to build capability.
            </h2>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
            {trainingTiers.map((t: any, i: number) => (
              <Reveal key={t.name} delay={(i % 3) * 0.06}>
                <TiltCard className="rounded-[28px] bg-cream-100 p-8">
                  <Tag>{t.name}</Tag>
                  <dl className="mt-6 space-y-4 text-[14px]">
                    <div>
                      <dt className="text-navy-900/65">Target audience</dt>
                      <dd className="mt-1 text-navy-900/70">{t.targetAudience}</dd>
                    </div>
                    <div>
                      <dt className="text-navy-900/65">Format</dt>
                      <dd className="mt-1 text-navy-900/70">{t.format}</dd>
                    </div>
                    <div>
                      <dt className="text-navy-900/65">Hours</dt>
                      <dd className="mt-1 text-navy-900/70">{t.trainingHours}</dd>
                    </div>
                    <div>
                      <dt className="text-navy-900/65">What&rsquo;s included</dt>
                      <dd className="mt-1 leading-relaxed text-navy-900/70">{t.whatsIncluded}</dd>
                    </div>
                  </dl>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 md:px-10 md:pb-32">
        <Reveal className="grain relative overflow-hidden rounded-[28px] bg-navy-900 px-8 py-12 text-center text-cream-50 md:px-14 md:py-16">
          <OrganizeCanvas
            className="pointer-events-none absolute inset-0 h-full w-full opacity-30"
            loop
            dotColor="0, 178, 255"
            lineColor="253, 252, 250"
          />
          <div className="relative z-10">
            <h2 className="font-display text-3xl md:text-4xl">Not sure which fits?</h2>
            <p className="mx-auto mt-3 max-w-md text-[15px] text-cream-50/60">
              That's exactly what the Discovery Conversation is for — no commitment, just
              clarity.
            </p>
            <Magnetic className="mt-6">
              <a
                href="/consultation"
                className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-[14px] text-navy-900 hover:bg-cyan-300"
              >
                Start a Discovery Conversation →
              </a>
            </Magnetic>
          </div>
        </Reveal>
      </section>
    </>
  );
}
