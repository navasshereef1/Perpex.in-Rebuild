import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "@phosphor-icons/react/dist/ssr";
import PageHero from "@/components/PageHero";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import ProcessTimeline from "@/components/ui/ProcessTimeline";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import { serviceIcon } from "@/lib/serviceIcons";
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

  const index = allServices.findIndex((s: { slug: string }) => s.slug === slug);
  const next = allServices[(index + 1) % allServices.length];
  const covers = (service.whatWeAnalyze as { title: string; description?: string }[]) ?? [];
  const steps = (service.processSteps as { step?: string; title: string; description?: string }[]) ?? [];
  const deliverables = (service.deliverables as string[]) ?? [];
  const Icon = serviceIcon(service.slug);

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
      <Container className="pt-8 md:pt-14">
        <div className="flex items-center gap-3 text-[15px] text-navy-600">
          <Icon size={28} weight="light" className="text-cyan-500" />
          <span>{service.stage}</span>
        </div>
      </Container>
      <PageHero title={service.title} description={service.description} />

      <Section className="pt-0 md:pt-0">
        <Container>
          <Reveal>
            <h2 className="font-display text-3xl font-bold tracking-[-0.02em] text-navy-900 md:text-4xl">
              What this covers
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {covers.map((item, i) => (
              <Reveal key={item.title} delay={(i % 3) * 0.05}>
                <div className="border-t border-line pt-6">
                  <h3 className="font-display text-lg font-semibold tracking-[-0.01em] text-navy-900">
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className="mt-2 text-[15px] leading-relaxed text-navy-600">{item.description}</p>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {steps.length > 0 && (
        <Section className="bg-mist">
          <Container>
            <Reveal>
              <h2 className="font-display text-3xl font-bold tracking-[-0.02em] text-navy-900 md:text-4xl">
                How it runs
              </h2>
            </Reveal>
            <div className="mt-10">
              <ProcessTimeline steps={steps} />
            </div>
          </Container>
        </Section>
      )}

      <section className="bg-navy-900 py-24 text-white md:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <h2 className="font-display text-3xl font-bold tracking-[-0.02em] md:text-4xl">
                What you receive
              </h2>
              <p className="mt-4 max-w-[40ch] text-lg text-white/70">
                Every item below is handed over with a walkthrough, not just a file.
              </p>
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-7">
              <ul className="grid grid-cols-1 gap-x-10 gap-y-4 sm:grid-cols-2">
                {deliverables.map((d) => (
                  <li key={d} className="flex gap-3 text-[15px] leading-relaxed text-white/85">
                    <Check size={18} weight="bold" className="mt-1 shrink-0 text-cyan-300" />
                    {d}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </section>

      <Section>
        <Container>
          <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
            <Reveal>
              <h2 className="max-w-[18ch] font-display text-3xl font-bold leading-[1.08] tracking-[-0.02em] text-navy-900 md:text-5xl">
                See whether {service.title} fits your business.
              </h2>
              <div className="mt-8">
                <Button href="/consultation">Book a discovery call</Button>
              </div>
            </Reveal>
            <Link
              href={`/services/${next.slug}`}
              className="group inline-flex items-center gap-2 text-[15px] text-navy-600 hover:text-navy-900"
            >
              Next: {next.title}
              <ArrowRight size={16} className="transition-transform duration-500 ease-soft group-hover:translate-x-1" />
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
