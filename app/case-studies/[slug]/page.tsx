import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
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
      {caseStudy.clientLogo && (
        <Container className="pt-8 md:pt-14">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white p-2 ring-1 ring-navy-900/[0.06]">
            <Image
              src={caseStudy.clientLogo}
              alt={`${caseStudy.clientName} logo`}
              width={40}
              height={40}
              className="h-full w-full object-contain"
            />
          </div>
        </Container>
      )}
      <PageHero title={caseStudy.clientName} description={caseStudy.summary ?? undefined} />

      <section className="pb-24 md:pb-32">
        <Container>
          {results.length > 0 && (
            <dl className="mb-14 grid grid-cols-2 gap-y-8 border-y border-line py-10 md:grid-cols-4 md:divide-x md:divide-line">
              {results.map((r) => (
                <div key={r.metric} className="md:px-8 md:first:pl-0">
                  <dd className="font-display text-4xl font-bold tracking-[-0.03em] text-navy-900">{r.value}</dd>
                  <dt className="mt-2 text-[15px] text-navy-600">{r.metric}</dt>
                </div>
              ))}
            </dl>
          )}

          {caseStudy.content && (
            <div className="max-w-[68ch] whitespace-pre-line text-lg leading-relaxed text-navy-600">
              {caseStudy.content}
            </div>
          )}

          <div className="mt-14">
            <Button href="/consultation">Book a discovery call</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
