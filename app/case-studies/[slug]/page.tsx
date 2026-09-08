import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { getCaseStudyBySlug } from "@/lib/db/queries";
import { parseCaseStudyContent, parseComparisonRows } from "@/lib/caseStudyContent";

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
  const comparison = parseComparisonRows(results);
  const blocks = caseStudy.content ? parseCaseStudyContent(caseStudy.content) : [];

  return (
    <>
      <PageHero title={caseStudy.clientName} description={caseStudy.summary ?? undefined} />

      <section className="pb-24 md:pb-32">
        <Container>
          {comparison.length > 0 && (
            <div className="mb-14 overflow-x-auto rounded-2xl ring-1 ring-navy-900/[0.06]">
              <table className="w-full min-w-[560px] text-left text-[15px]">
                <thead>
                  <tr className="border-b border-line bg-mist">
                    <th className="px-5 py-3 font-medium text-navy-900">Area</th>
                    <th className="px-5 py-3 font-medium text-navy-900">Before</th>
                    <th className="px-5 py-3 font-medium text-navy-900">After</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {comparison.map((row) => (
                    <tr key={row.metric} className="border-b border-line last:border-0">
                      <td className="px-5 py-4 align-top font-medium text-navy-900">{row.metric}</td>
                      <td className="px-5 py-4 align-top text-navy-600">{row.before}</td>
                      <td className="px-5 py-4 align-top text-navy-600">{row.after}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          <div className="max-w-[68ch]">
            {blocks.map((block, i) => {
              if (block.kind === "heading") {
                return (
                  <h2
                    key={i}
                    className="mt-14 font-display text-2xl font-bold tracking-[-0.02em] text-navy-900 first:mt-0 md:text-3xl"
                  >
                    {block.text}
                  </h2>
                );
              }
              if (block.kind === "paragraph") {
                return (
                  <p key={i} className="mt-5 text-lg leading-relaxed text-navy-600">
                    {block.text}
                  </p>
                );
              }
              if (block.kind === "list") {
                return (
                  <ul key={i} className="mt-5 list-disc space-y-2 pl-5 text-lg leading-relaxed text-navy-600 marker:text-cyan-500">
                    {block.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                );
              }
              return (
                <div key={i} className="mt-8 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
                  {block.steps.map((step) => (
                    <div key={step.number || step.title} className="border-t border-line pt-6">
                      {step.number && (
                        <span className="font-display text-sm font-semibold text-cyan-500">
                          {step.number.padStart(2, "0")}
                        </span>
                      )}
                      <h3 className="mt-2 font-display text-lg font-semibold tracking-[-0.01em] text-navy-900">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-[15px] leading-relaxed text-navy-600">{step.body}</p>
                    </div>
                  ))}
                </div>
              );
            })}
          </div>

          <div className="mt-14">
            <Button href="/consultation">Book a discovery call</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
