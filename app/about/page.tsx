import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/home/CTASection";
import Container from "@/components/ui/Container";
import Photo from "@/components/ui/Photo";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "About",
  description:
    "PerpeX Insights is a B2B consulting, training, and execution firm in Kozhikode, Kerala, with 140+ clients across 10+ sectors.",
};

const onboarding = [
  { title: "Discovery call", description: "We meet your leadership to understand the business, its growth stage, and what hurts most. No obligation." },
  { title: "Scoping", description: "We design the engagement: the right services, a defined scope, confirmed deliverables, and a timeline." },
  { title: "Kickoff", description: "A dedicated delivery team, agreed communication channels, and a structured kickoff with every stakeholder." },
  { title: "Execution with milestone reviews", description: "The project runs in phases with regular check-ins, internal quality gates, and client reviews at each milestone." },
  { title: "Delivery and handover", description: "Every deliverable is walked through in person, with usage guidance, not emailed as an attachment." },
  { title: "Stabilisation", description: "We stay available after delivery, with a monthly Managing & Monitoring retainer for teams that need it." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Not a training company. Not a consulting company."
        description="We are a transformation partner. We enter your business, find what is broken, build what is missing, train the people who need it, and stay until execution holds."
      />

      <Section className="pt-0 md:pt-0">
        <Container>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-6">
              <Photo
                seed="20"
                alt="A workspace with printed process documents laid out for review"
                width={1000}
                height={1100}
                aspect="aspect-[10/11]"
              />
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-6">
              <p className="max-w-[58ch] text-lg leading-relaxed text-navy-600 md:text-xl">
                PerpeX Insights is a hybrid consulting, training, and execution firm based in
                Kozhikode, Kerala. We move growing businesses from informal, reactive operations
                to structured, system-driven ones.
              </p>
              <p className="mt-6 max-w-[58ch] text-lg leading-relaxed text-navy-600">
                We have served 140+ B2B clients across healthcare, F&amp;B, construction, EdTech,
                SaaS, marketing, AI, and recruitment. The methods are built so an MSME or a startup
                gets the same quality of work without an enterprise budget.
              </p>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section className="bg-mist">
        <Container>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
            <Reveal className="md:col-span-5">
              <h2 className="font-display text-3xl font-bold tracking-[-0.02em] text-navy-900 md:text-4xl">
                Founder-led, on every project
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="md:col-span-7">
              {/* TODO real photo of the founder */}
              <p className="font-display text-2xl font-semibold tracking-[-0.02em] text-navy-900">Rafi Mohammed</p>
              <p className="mt-1 text-[15px] text-navy-600">Founder and Sales Head, PerpeX Insights LLP</p>
              <p className="mt-6 max-w-[56ch] text-lg leading-relaxed text-navy-600">
                Senior leadership is in the room for every significant project, from the first
                diagnostic interview to the last review meeting, not only on the kickoff call.
              </p>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Reveal>
            <h2 className="max-w-[16ch] font-display text-3xl font-bold leading-[1.08] tracking-[-0.02em] text-navy-900 md:text-5xl">
              How an engagement begins.
            </h2>
          </Reveal>
          <ol className="mt-14 grid grid-cols-1 gap-x-16 gap-y-10 md:grid-cols-2">
            {onboarding.map((step, i) => (
              <Reveal key={step.title} delay={(i % 2) * 0.06}>
                <li className="border-t border-line pt-7">
                  <span className="font-display text-sm font-semibold text-cyan-500">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-display text-xl font-semibold tracking-[-0.01em] text-navy-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-[48ch] text-[15px] leading-relaxed text-navy-600">{step.description}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </Container>
      </Section>

      <CTASection
        title="Ready to see what is actually broken?"
        body="One conversation with the people who will do the work. You leave with a clear read on your business, whether or not you engage us."
        photoSeed="3"
      />
    </>
  );
}
