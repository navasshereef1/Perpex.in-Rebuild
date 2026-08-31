import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
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

  return (
    <>
      <PageHero
        eyebrow={`Service ${String(index + 1).padStart(2, "0")} / ${allServices.length} — ${service.stage}`}
        title={service.title}
        description={service.description}
      />

      <section className="px-6 pb-24 md:px-10 md:pb-32">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-4 md:grid-cols-12">
          <div className="rounded-[28px] bg-cream-100 p-8 md:col-span-7 md:p-10">
            <span className="text-[13px] text-navy-900/45">What we cover</span>
            <div className="mt-6 space-y-6">
              {(service.whatWeAnalyze as { title: string; description?: string }[])?.map((item) => (
                <div key={item.title}>
                  <h3 className="font-display text-xl text-navy-900">{item.title}</h3>
                  {item.description && (
                    <p className="mt-1.5 text-[14px] leading-relaxed text-navy-900/55">
                      {item.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] bg-navy-900 p-8 text-cream-50 md:col-span-5 md:p-10">
            <span className="text-[13px] text-cyan-300/80">Deliverables</span>
            <ul className="mt-6 space-y-3">
              {(service.deliverables as string[])?.map((d) => (
                <li key={d} className="text-[14px] leading-relaxed text-cream-50/80">
                  — {d}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mx-auto mt-6 flex max-w-[1440px] flex-col items-start justify-between gap-6 rounded-[28px] bg-cream-100 px-8 py-8 md:flex-row md:items-center">
          <a
            href="/consultation"
            className="inline-flex items-center gap-2 rounded-full bg-navy-900 px-6 py-3 text-[14px] text-cream-50 hover:bg-navy-800"
          >
            Start a Discovery Conversation →
          </a>
          <a href={`/services/${next.slug}`} className="text-[14px] text-navy-900/55 hover:text-navy-900">
            Next: {next.title} →
          </a>
        </div>
      </section>
    </>
  );
}
