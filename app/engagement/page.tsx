import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/home/CTASection";
import ComparisonTable from "@/components/engagement/ComparisonTable";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import { getEngagementModels, getTrainingTiers } from "@/lib/db/queries";

export const metadata: Metadata = {
  title: "Engagement Models",
  description:
    "Engage one service or all four: Standalone, Diagnostic, System Build, Full Transformation, or Monitoring Retainer.",
};

export const dynamic = "force-dynamic";

type Model = { name: string; servicesIncluded: string; bestFor: string | null };
type Tier = {
  name: string;
  targetAudience: string | null;
  format: string | null;
  trainingHours: string | null;
  whatsIncluded: string | null;
};

export default async function EngagementPage() {
  const [engagementModels, trainingTiers] = await Promise.all([
    getEngagementModels(),
    getTrainingTiers(),
  ]);

  return (
    <>
      <PageHero
        title="Pick your depth of commitment."
        description="Engage one service, or all four. Most clients start with a Diagnostic and scale up once they see what is broken."
      />

      <section className="pb-16 md:pb-20">
        <Container>
          <ComparisonTable models={engagementModels as Model[]} />
        </Container>
      </section>

      <Section className="pt-0 md:pt-0">
        <Container>
          <div className="grid grid-cols-1 gap-x-16 gap-y-10 md:grid-cols-2">
            {(engagementModels as Model[]).map((m, i) => (
              <Reveal key={m.name} delay={(i % 2) * 0.06}>
                <div className="border-t border-line pt-7">
                  <h3 className="font-display text-2xl font-semibold tracking-[-0.02em] text-navy-900">{m.name}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-navy-600">{m.servicesIncluded}</p>
                  <p className="mt-3 text-[15px] text-navy-900">
                    <span className="text-navy-500">Best for: </span>
                    {m.bestFor}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-mist">
        <Container>
          <Reveal>
            <h2 className="max-w-[18ch] font-display text-3xl font-bold leading-[1.08] tracking-[-0.02em] text-navy-900 md:text-5xl">
              Three ways to build capability.
            </h2>
            <p className="mt-4 max-w-[50ch] text-lg text-navy-600">Under the Training service.</p>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-3">
            {(trainingTiers as Tier[]).map((t, i) => (
              <Reveal key={t.name} delay={i * 0.06}>
                <div className="border-t border-navy-900/15 pt-6">
                  <h3 className="font-display text-2xl font-semibold tracking-[-0.02em] text-navy-900">{t.name}</h3>
                  <dl className="mt-6 space-y-4 text-[15px]">
                    <div>
                      <dt className="text-navy-500">Who it is for</dt>
                      <dd className="mt-1 text-navy-900">{t.targetAudience}</dd>
                    </div>
                    <div>
                      <dt className="text-navy-500">Format</dt>
                      <dd className="mt-1 text-navy-900">{t.format}</dd>
                    </div>
                    <div>
                      <dt className="text-navy-500">Hours</dt>
                      <dd className="mt-1 text-navy-900">{t.trainingHours}</dd>
                    </div>
                    <div>
                      <dt className="text-navy-500">Included</dt>
                      <dd className="mt-1 leading-relaxed text-navy-900">{t.whatsIncluded}</dd>
                    </div>
                  </dl>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection
        title="Not sure which fits?"
        body="That is what the discovery call is for. No commitment, just clarity on where to start."
        photoSeed="48"
      />
    </>
  );
}
