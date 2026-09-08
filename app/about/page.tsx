import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/home/CTASection";
import Container from "@/components/ui/Container";
import Photo from "@/components/ui/Photo";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import { getTeamMembers } from "@/lib/db/queries";

export const metadata: Metadata = {
  title: "About",
  description:
    "PerpeX Insights is a B2B consulting, training, and execution firm in Kozhikode, Kerala, with 140+ clients across 10+ sectors.",
};

export const dynamic = "force-dynamic";

const onboarding = [
  { title: "Discovery call", description: "We meet your leadership to understand the business, its growth stage, and what hurts most. No obligation." },
  { title: "Scoping", description: "We design the engagement: the right services, a defined scope, confirmed deliverables, and a timeline." },
  { title: "Kickoff", description: "A dedicated delivery team, agreed communication channels, and a structured kickoff with every stakeholder." },
  { title: "Execution with milestone reviews", description: "The project runs in phases with regular check-ins, internal quality gates, and client reviews at each milestone." },
  { title: "Delivery and handover", description: "Every deliverable is walked through in person, with usage guidance, not emailed as an attachment." },
  { title: "Stabilisation", description: "We stay available after delivery, with a monthly Managing & Monitoring retainer for teams that need it." },
];

type TeamMember = { name: string; role: string | null };

function isFounder(member: TeamMember) {
  return (member.role ?? "").toLowerCase().includes("founder");
}

function Avatar({ name, size }: { name: string; size: "lg" | "sm" }) {
  const dims = size === "lg" ? "h-16 w-16 text-xl" : "h-11 w-11 text-[13px]";
  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-full bg-cyan-400/15 font-display font-semibold text-cyan-600 ${dims}`}
    >
      {name.charAt(0)}
    </div>
  );
}

export default async function AboutPage() {
  const team = (await getTeamMembers()) as TeamMember[];
  const founders = team.filter(isFounder);
  const others = team.filter((m) => !isFounder(m));

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
          <Reveal>
            <h2 className="max-w-[18ch] font-display text-3xl font-bold leading-[1.08] tracking-[-0.02em] text-navy-900 md:text-5xl">
              Founder-led, on every project
            </h2>
            <p className="mt-5 max-w-[62ch] text-lg leading-relaxed text-navy-600">
              PerpeX Insights is run by four cofounders, not one. Senior leadership is in the
              room for every significant project, from the first diagnostic interview to the
              last review meeting, not only on the kickoff call.
            </p>
          </Reveal>

          {founders.length > 0 && (
            <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
              {founders.map((f, i) => (
                <Reveal key={f.name} delay={(i % 4) * 0.06}>
                  <div className="flex flex-col items-start gap-4">
                    <Avatar name={f.name} size="lg" />
                    <div>
                      <p className="font-display text-lg font-semibold tracking-[-0.01em] text-navy-900">
                        {f.name}
                      </p>
                      <p className="mt-0.5 text-[14px] text-navy-600">{f.role}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          )}

          <Reveal delay={0.1} className="mt-10 max-w-[640px] border-l-2 border-cyan-400/40 pl-5">
            <p className="text-lg italic leading-relaxed text-navy-900">
              &ldquo;Senior leadership is in the room for every significant project, from the
              first diagnostic interview to the last review meeting.&rdquo;
            </p>
            <p className="mt-2 text-[14px] not-italic text-navy-600">
              Rafi Muhammed, Cofounder, PerpeX Insights LLP
            </p>
          </Reveal>

          {others.length > 0 && (
            <div className="mt-16 border-t border-navy-900/10 pt-10">
              <p className="text-[13px] uppercase tracking-wide text-navy-500">The team</p>
              <div className="mt-6 grid grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
                {others.map((m, i) => (
                  <Reveal key={m.name} delay={(i % 4) * 0.05}>
                    <div className="flex items-center gap-3">
                      <Avatar name={m.name} size="sm" />
                      <div>
                        <p className="text-[14px] font-medium text-navy-900">{m.name}</p>
                        <p className="text-[13px] text-navy-600">{m.role}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          )}
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
