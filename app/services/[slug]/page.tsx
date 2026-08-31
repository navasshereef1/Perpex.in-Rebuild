import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import { services } from "@/lib/seedData";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return { title: service.title, description: service.tagline };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = services.findIndex((s) => s.slug === slug);
  const service = services[index];
  if (!service) notFound();

  const next = services[(index + 1) % services.length];

  return (
    <>
      <PageHero
        eyebrow={`Service ${String(index + 1).padStart(2, "0")} / 04 — ${service.stage}`}
        title={service.title}
        description={service.description}
      />

      <section className="px-6 pb-24 md:px-10 md:pb-32">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-16 border-t border-navy-900/10 pt-16 md:grid-cols-12">
          <div className="md:col-span-6">
            <span className="text-[13px] text-navy-900/40">What we cover</span>
            <div className="mt-6 border-t border-navy-900/10">
              {service.whatWeAnalyze.map((item) => (
                <div key={item.title} className="border-b border-navy-900/10 py-5">
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

          <div className="md:col-span-5 md:col-start-8">
            <span className="text-[13px] text-navy-900/40">Deliverables</span>
            <ul className="mt-6 border-t border-navy-900/10">
              {service.deliverables.map((d) => (
                <li
                  key={d}
                  className="border-b border-navy-900/10 py-3.5 text-[15px] text-navy-900/65"
                >
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mx-auto mt-24 flex max-w-[1440px] items-center justify-between border-t border-navy-900/10 pt-10">
          <a href="/consultation" className="group inline-flex items-center gap-3 text-lg text-navy-900">
            Start a Discovery Conversation
            <span className="transition-transform group-hover:translate-x-1.5">→</span>
          </a>
          <a href={`/services/${next.slug}`} className="text-[15px] text-navy-900/50 hover:text-navy-900">
            Next: {next.title} →
          </a>
        </div>
      </section>
    </>
  );
}
