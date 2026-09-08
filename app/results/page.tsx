import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import PageHero from "@/components/PageHero";
import DifferentiatorsSection from "@/components/home/DifferentiatorsSection";
import Container from "@/components/ui/Container";
import PullQuote from "@/components/ui/PullQuote";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import { getTestimonials, getSectors, getCaseStudies } from "@/lib/db/queries";
import { clientLogos } from "@/lib/clientLogos";

function logoForCompany(company: string) {
  const match = clientLogos.find((l) => l.name.toLowerCase() === company.toLowerCase());
  return match ? `/clients/${match.file}` : null;
}

export const metadata: Metadata = {
  title: "Client Results",
  description: "140+ B2B clients across 10+ sectors, in their own words.",
};

export const dynamic = "force-dynamic";

type Testimonial = { name: string; designation: string | null; company: string; description: string };
type CaseStudy = { slug: string; clientName: string; summary: string | null; clientLogo: string | null };

export default async function ResultsPage() {
  const [testimonials, sectors, caseStudies] = await Promise.all([
    getTestimonials(),
    getSectors(),
    getCaseStudies(),
  ]);
  const quotes = testimonials as Testimonial[];
  const studies = caseStudies as CaseStudy[];

  return (
    <>
      <PageHero
        title="The proof, not the pitch."
        description="140+ engagements across 10+ sectors. This is what changed for the businesses that ran the framework."
      />

      {quotes.length > 0 && (
        <PullQuote
          quote={quotes[0].description}
          name={quotes[0].name}
          designation={quotes[0].designation}
          company={quotes[0].company}
        />
      )}

      {studies.length > 0 && (
        <Section className="pt-0 md:pt-0">
          <Container>
            <Reveal>
              <h2 className="font-display text-3xl font-bold tracking-[-0.02em] text-navy-900 md:text-4xl">
                Case studies
              </h2>
            </Reveal>
            <div className="mt-10 grid grid-cols-1 gap-x-16 gap-y-10 md:grid-cols-2">
              {studies.map((c, i) => (
                <Reveal key={c.slug} delay={(i % 2) * 0.06}>
                  <Link href={`/case-studies/${c.slug}`} className="group block border-t border-line pt-7">
                    <div className="flex items-center gap-3">
                      {c.clientLogo && (
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white p-1.5 ring-1 ring-navy-900/[0.06]">
                          <Image
                            src={c.clientLogo}
                            alt=""
                            width={28}
                            height={28}
                            className="h-full w-full object-contain"
                          />
                        </span>
                      )}
                      <h3 className="font-display text-2xl font-semibold tracking-[-0.02em] text-navy-900">{c.clientName}</h3>
                    </div>
                    {c.summary && <p className="mt-3 text-[15px] leading-relaxed text-navy-600">{c.summary}</p>}
                    <span className="mt-5 inline-flex items-center gap-2 text-[15px] font-medium text-navy-900">
                      Read the case study
                      <ArrowRight size={16} className="transition-transform duration-500 ease-soft group-hover:translate-x-1" />
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </Container>
        </Section>
      )}

      <Section className="bg-mist">
        <Container>
          <Reveal>
            <h2 className="font-display text-3xl font-bold tracking-[-0.02em] text-navy-900 md:text-4xl">
              What clients say
            </h2>
            <p className="mt-4 max-w-[52ch] text-lg text-navy-600">
              Some of this feedback names audits, tax audits, and monitoring: earlier names
              for the same diagnostic and monitoring work we now run as Gap Analysis and
              Managing &amp; Monitoring.
            </p>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
            {quotes.slice(1).map((t, i) => {
              const logo = logoForCompany(t.company);
              return (
                <Reveal key={t.name} delay={(i % 2) * 0.05}>
                  <figure className="flex h-full flex-col justify-between rounded-2xl bg-white p-8 ring-1 ring-navy-900/[0.06]">
                    <blockquote className="font-display text-xl font-medium leading-snug tracking-[-0.01em] text-navy-900">
                      &ldquo;{t.description}&rdquo;
                    </blockquote>
                    <figcaption className="mt-8 flex items-center gap-3 text-[15px] text-navy-600">
                      {logo && (
                        <Image
                          src={logo}
                          alt=""
                          width={32}
                          height={32}
                          className="h-8 w-8 shrink-0 rounded-full bg-mist object-contain p-1 ring-1 ring-navy-900/[0.06]"
                        />
                      )}
                      <span>
                        <span className="font-medium text-navy-900">{t.name}</span>
                        {t.designation ? `, ${t.designation}` : ""}
                        <span className="block">{t.company}</span>
                      </span>
                    </figcaption>
                  </figure>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Reveal>
            <h2 className="font-display text-3xl font-bold tracking-[-0.02em] text-navy-900 md:text-4xl">
              Sectors we have worked in
            </h2>
          </Reveal>
          <div className="mt-8 flex flex-wrap gap-3">
            {(sectors as string[]).map((s) => (
              <span
                key={s}
                className="rounded-full bg-white px-5 py-2.5 text-[15px] text-navy-900 ring-1 ring-navy-900/[0.08]"
              >
                {s}
              </span>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-mist">
        <Container>
          <Reveal>
            <h2 className="font-display text-3xl font-bold tracking-[-0.02em] text-navy-900 md:text-4xl">
              Not a highlight reel. The full list.
            </h2>
            <p className="mt-4 max-w-[62ch] text-lg text-navy-600">
              Every logo below is a business we have actually worked with, across
              construction, healthcare, EdTech, hospitality, F&amp;B, real estate, and more.
              If it is not on this list, we have not done it.
            </p>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {clientLogos.map((logo, i) => (
              <Reveal key={logo.file} delay={(i % 6) * 0.03}>
                <div className="flex h-24 items-center justify-center rounded-2xl bg-white p-4 ring-1 ring-navy-900/[0.06]">
                  <img
                    src={`/clients/${logo.file}`}
                    alt={logo.name}
                    className="max-h-14 w-auto max-w-full object-contain"
                    loading={i < 12 ? "eager" : "lazy"}
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <DifferentiatorsSection />
    </>
  );
}
