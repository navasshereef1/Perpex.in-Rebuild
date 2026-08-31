import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import { getCaseStudyBySlug } from "@/lib/db/queries";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = await getCaseStudyBySlug(slug);
  if (!caseStudy) return {};
  return { title: caseStudy.clientName, description: caseStudy.summary ?? undefined };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caseStudy = await getCaseStudyBySlug(slug);
  if (!caseStudy) notFound();

  const results = (caseStudy.results as { metric: string; value: string }[] | null) ?? [];

  return (
    <>
      <PageHero
        eyebrow="Case Study"
        title={caseStudy.clientName}
        description={caseStudy.summary ?? undefined}
      />

      <section className="px-6 pb-24 md:px-10 md:pb-32">
        <div className="mx-auto max-w-[1440px]">
          {results.length > 0 && (
            <div className="mb-4 grid grid-cols-2 gap-4 md:grid-cols-4">
              {results.map((r) => (
                <div key={r.metric} className="rounded-[28px] bg-navy-900 p-6 text-cream-50">
                  <div className="font-display text-3xl text-cyan-300">{r.value}</div>
                  <div className="mt-1 text-[13px] text-cream-50/50">{r.metric}</div>
                </div>
              ))}
            </div>
          )}

          {caseStudy.content && (
            <div className="rounded-[28px] bg-cream-100 p-8 md:p-12">
              <div className="max-w-2xl whitespace-pre-line text-[16px] leading-relaxed text-navy-900/70">
                {caseStudy.content}
              </div>
            </div>
          )}

          <div className="mt-6 rounded-[28px] bg-cream-100 px-8 py-8">
            <a
              href="/consultation"
              className="inline-flex items-center gap-2 rounded-full bg-navy-900 px-6 py-3 text-[14px] text-cream-50 hover:bg-navy-800"
            >
              Start your own Discovery Conversation →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
