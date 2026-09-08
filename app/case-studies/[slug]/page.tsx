import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { getCaseStudyBySlug } from "@/lib/db/queries";
import { parseRichContent, parseComparisonRows } from "@/lib/richContent";
import RichContentBlocks from "@/components/ui/RichContentBlocks";

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
  const blocks = caseStudy.content ? parseRichContent(caseStudy.content) : [];

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
            <RichContentBlocks blocks={blocks} />
          </div>

          <div className="mt-14">
            <Button href="/consultation">Book a discovery call</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
