import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/ui/Reveal";
import TiltCard from "@/components/ui/TiltCard";
import { differentiators } from "@/lib/seedData";
import { getTestimonials, getSectors, getCaseStudies } from "@/lib/db/queries";
import { accentColors } from "@/lib/accentColors";

export const metadata: Metadata = {
  title: "Client Results",
  description:
    "140+ B2B clients across 10+ sectors — the outcomes, in their own words.",
};

export const dynamic = "force-dynamic";

export default async function ResultsPage() {
  const [testimonials, sectors, caseStudies] = await Promise.all([
    getTestimonials(),
    getSectors(),
    getCaseStudies(),
  ]);

  return (
    <>
      <PageHero
        eyebrow="Why PerpeX Insights"
        title="The proof, not the pitch."
        description="140+ engagements across 10+ sectors. Here's what changed for the businesses that ran through the full framework."
      />

      {caseStudies.length > 0 && (
        <section className="px-6 pb-16 md:px-10 md:pb-20">
          <div className="mx-auto max-w-[1440px]">
            <Reveal>
              <span className="text-[13px] text-navy-900/45">Case Studies</span>
            </Reveal>
            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
              {caseStudies.map((c: any, i: number) => (
                <Reveal key={c.slug} delay={(i % 2) * 0.06}>
                  <TiltCard
                    as="a"
                    href={`/case-studies/${c.slug}`}
                    className="group block rounded-[28px] border border-navy-900/[0.06] bg-white p-8 transition-shadow hover:shadow-[0_20px_50px_rgba(0,27,74,0.08)]"
                  >
                    <h3 className="font-display text-2xl text-navy-900">{c.clientName}</h3>
                    {c.summary && (
                      <p className="mt-2 text-[15px] leading-relaxed text-navy-900/55">
                        {c.summary}
                      </p>
                    )}
                    <span className="mt-4 inline-flex items-center gap-2 text-[13px] text-navy-900/50 group-hover:text-navy-900">
                      Read the case study
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    </span>
                  </TiltCard>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="px-6 pb-16 md:px-10 md:pb-20">
        <div className="mx-auto max-w-[1440px]">
          <Reveal>
            <span className="text-[13px] text-navy-900/45">Testimonials</span>
          </Reveal>
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            {testimonials.map((t: any, i: number) => (
              <Reveal key={t.name} delay={(i % 2) * 0.05}>
                <TiltCard className="rounded-[28px] bg-cream-100 p-8">
                  <p className="font-display text-xl leading-snug text-navy-900">
                    &ldquo;{t.description}&rdquo;
                  </p>
                  <div className="mt-6 text-[13px] text-navy-900/45">
                    {t.name} — {t.designation}, {t.company}
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1440px]">
          <Reveal>
            <h2 className="max-w-xl font-display text-4xl leading-[1.1] tracking-tight text-navy-900 md:text-5xl">
              Sectors we serve
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
            {sectors.map((s: string, i: number) => {
              const accent = accentColors[i % accentColors.length];
              return (
                <Reveal key={s} delay={(i % 5) * 0.04}>
                  <TiltCard
                    style={{ backgroundColor: accent.bg, color: accent.text }}
                    className="flex aspect-square items-center justify-center rounded-[24px] p-4 text-center"
                  >
                    <span className="font-display text-lg">{s}</span>
                  </TiltCard>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1440px]">
          <Reveal className="mb-10">
            <h2 className="max-w-lg font-display text-4xl leading-[1.1] tracking-tight text-navy-900 md:text-5xl">
              Six reasons clients stay
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {differentiators.map((d, i) => (
              <Reveal key={d.title} delay={(i % 3) * 0.06}>
                <TiltCard className="rounded-[28px] border border-navy-900/[0.06] bg-white p-7">
                  <h3 className="font-display text-lg text-navy-900">{d.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-navy-900/55">
                    {d.description}
                  </p>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
