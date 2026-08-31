import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/ui/Reveal";
import TiltCard from "@/components/ui/TiltCard";
import Magnetic from "@/components/ui/Magnetic";
import OrganizeCanvas from "@/components/ui/OrganizeCanvas";

export const metadata: Metadata = {
  title: "About",
  description:
    "PerpeX Insights is a hybrid B2B consulting, training, and execution firm headquartered in Kozhikode, Kerala — 140+ clients across 10+ sectors.",
};

const onboarding = [
  { title: "Discovery Conversation", description: "We meet with your leadership to understand your business, growth stage, and pressing challenges. A no-obligation conversation." },
  { title: "Scoping & Engagement Design", description: "We design a tailored engagement — selecting the right services, defining scope, confirming deliverables, setting timeline." },
  { title: "Onboarding & Kickoff", description: "We assign a dedicated delivery team, set up communication channels, and conduct a structured kickoff to align all stakeholders." },
  { title: "Execution with Milestone Reviews", description: "The project runs across defined phases with regular check-ins, internal quality gates, and client reviews at every major milestone." },
  { title: "Delivery & Handover", description: "Every deliverable is walked through with the client — not just emailed. Documentation is handed over with usage guidance." },
  { title: "Stabilization & Continuation", description: "Post-delivery, we remain available for stabilization support, with monthly retainer-based Managing & Monitoring for clients who need it." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Who We Are"
        title="Not a training company. Not a consulting company."
        description="We are a transformation partner — we enter your business, understand what is broken, build what is missing, train who needs to improve, and stay to ensure execution actually happens."
      />

      <section className="px-6 py-10 md:px-10 md:py-14">
        <Reveal className="mx-auto max-w-[1440px] rounded-[28px] bg-cream-100 p-8 md:p-12">
          <p className="max-w-2xl text-[16px] leading-relaxed text-navy-900/65">
            PerpeX Insights is a hybrid B2B consulting, training, and execution firm
            headquartered in Kozhikode, Kerala. We specialize in operational transformation for
            growing businesses — helping organizations move from informal, reactive operations
            to structured, system-driven, high-performing enterprises. We&rsquo;ve served 140+
            B2B clients across healthcare, F&amp;B, construction, EdTech, SaaS, marketing, AI and
            recruitment — yet our methods are designed to be accessible to MSMEs and startups who
            need the same quality of transformation without enterprise budgets.
          </p>
        </Reveal>
      </section>

      <section className="px-6 py-10 md:px-10 md:py-14">
        <Reveal className="mx-auto max-w-[1440px] rounded-[28px] border border-navy-900/[0.06] bg-white p-8 md:p-12">
          <span className="text-[13px] text-navy-900/45">Founder-Led Engagement</span>
          <div className="mt-6 flex items-center gap-5">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-navy-900 font-display text-xl text-cyan-300">
              RM
            </div>
            <div>
              <h3 className="font-display text-2xl text-navy-900">Rafi Mohammed</h3>
              <p className="text-[14px] text-navy-900/50">Founder &amp; Sales Head, PerpeX Insights LLP</p>
            </div>
          </div>
          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-navy-900/60">
            Senior leadership is personally involved in every significant project — not just in
            kickoff calls.
          </p>
        </Reveal>
      </section>

      <section className="px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-[1440px]">
          <Reveal>
            <span className="text-[13px] text-navy-900/45">Six-Step Onboarding</span>
            <h2 className="mt-3 max-w-xl font-display text-4xl leading-[1.1] tracking-tight text-navy-900 md:text-5xl">
              How transformation begins.
            </h2>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
            {onboarding.map((step, i) => (
              <Reveal key={step.title} delay={(i % 2) * 0.06}>
                <TiltCard className="rounded-[28px] border border-navy-900/[0.06] bg-white p-8">
                  <span className="rounded-full bg-navy-900/[0.06] px-3.5 py-1.5 text-[13px] text-navy-900/60">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-5 font-display text-xl text-navy-900">{step.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-navy-900/55">
                    {step.description}
                  </p>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 md:px-10 md:pb-32">
        <Reveal className="grain relative overflow-hidden rounded-[28px] bg-navy-900 px-8 py-14 text-center text-cream-50 md:px-14 md:py-20">
          <OrganizeCanvas
            className="pointer-events-none absolute inset-0 h-full w-full opacity-30"
            loop
            dotColor="0, 178, 255"
            lineColor="253, 252, 250"
          />
          <div className="relative z-10">
            <h2 className="font-display text-3xl md:text-4xl">Ready to see what's actually broken?</h2>
            <Magnetic className="mt-6">
              <a
                href="/consultation"
                className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-[14px] text-navy-900 hover:bg-cyan-300"
              >
                Start a Discovery Conversation →
              </a>
            </Magnetic>
          </div>
        </Reveal>
      </section>
    </>
  );
}
