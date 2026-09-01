import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import Magnetic from "@/components/ui/Magnetic";
import TiltCard from "@/components/ui/TiltCard";
import OrganizeCanvas from "@/components/ui/OrganizeCanvas";
import ProcessTimeline from "@/components/ui/ProcessTimeline";
import ServiceIcon from "@/components/ui/ServiceIcon";
import Reveal from "@/components/ui/Reveal";
import { services as staticServices } from "@/lib/seedData";
import { getServices, getServiceBySlug } from "@/lib/db/queries";

export const dynamic = "force-dynamic";

export function generateStaticParams() {
  return staticServices.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  if (!service) return {};
  return { title: service.title, description: service.tagline ?? undefined };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [service, allServices] = await Promise.all([getServiceBySlug(slug), getServices()]);
  if (!service) notFound();

  const index = allServices.findIndex((s: any) => s.slug === slug);
  const next = allServices[(index + 1) % allServices.length];
  const whatWeAnalyze = (service.whatWeAnalyze as { title: string; description?: string }[]) ?? [];
  const processSteps = (service.processSteps as { step?: string; title: string; description?: string }[]) ?? [];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: { "@type": "Organization", name: "PerpeX Insights" },
    areaServed: "IN",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <div className="mx-auto flex max-w-[1440px] items-center px-6 pt-6 md:px-10">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-400/15 text-cyan-600">
          <ServiceIcon slug={service.slug} className="h-6 w-6" />
        </span>
      </div>
      <PageHero
        eyebrow={`Service ${String(index + 1).padStart(2, "0")} / ${allServices.length} — ${service.stage}`}
        title={service.title}
        description={service.description}
      />

      <section className="px-6 pb-16 md:px-10 md:pb-20">
        <div className="mx-auto max-w-[1440px]">
          <Reveal>
            <span className="text-[13px] text-navy-900/45">What This Covers</span>
          </Reveal>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {whatWeAnalyze.map((item, i) => (
              <Reveal key={item.title} delay={(i % 4) * 0.06}>
                <TiltCard className="h-full rounded-[24px] border border-navy-900/[0.06] bg-white p-6">
                  <span className="font-display text-lg italic text-cyan-500">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-display text-lg text-navy-900">{item.title}</h3>
                  {item.description && (
                    <p className="mt-1.5 text-[13px] leading-relaxed text-navy-900/55">
                      {item.description}
                    </p>
                  )}
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {processSteps.length > 0 && (
        <section className="px-6 pb-16 md:px-10 md:pb-20">
          <div className="mx-auto max-w-[1440px] rounded-[28px] bg-cream-100 p-8 md:p-12">
            <Reveal>
              <span className="text-[13px] text-navy-900/45">How It Runs</span>
            </Reveal>
            <div className="mt-8">
              <ProcessTimeline steps={processSteps} />
            </div>
          </div>
        </section>
      )}

      <section className="px-6 pb-24 md:px-10 md:pb-32">
        <div className="mx-auto max-w-[1440px]">
          <div className="grain relative overflow-hidden rounded-[28px] bg-navy-900 p-8 text-cream-50 md:p-10">
            <OrganizeCanvas
              className="pointer-events-none absolute inset-0 h-full w-full opacity-25"
              loop
              dotColor="0, 178, 255"
              lineColor="253, 252, 250"
            />
            <div className="relative z-10">
              <span className="text-[13px] text-cyan-300/80">Deliverables</span>
              <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
                {(service.deliverables as string[])?.map((d) => (
                  <div key={d} className="flex gap-2.5 text-[14px] leading-relaxed text-cream-50/80">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                    {d}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-col items-start justify-between gap-6 rounded-[28px] bg-cream-100 px-8 py-8 md:flex-row md:items-center">
            <Magnetic>
              <a
                href="/consultation"
                className="inline-flex items-center gap-2 rounded-full bg-navy-900 px-6 py-3 text-[14px] text-cream-50 hover:bg-navy-800"
              >
                See if {service.title} fits your business →
              </a>
            </Magnetic>
            <a href={`/services/${next.slug}`} className="text-[14px] text-navy-900/55 hover:text-navy-900">
              Next: {next.title} →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
