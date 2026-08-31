import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "About",
  description: "Perpex Insights is a hybrid B2B consulting, training, and execution firm headquartered in Kozhikode, Kerala.",
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
        <div className="mx-auto max-w-[1440px] rounded-[28px] bg-cream-100 p-8 md:p-12">
          <p className="max-w-2xl text-[16px] leading-relaxed text-navy-900/65">
            Perpex Insights is a hybrid B2B consulting, training, and execution firm
            headquartered in Kozhikode, Kerala. We specialize in operational transformation for
            growing businesses — helping organizations move from informal, reactive operations
            to structured, system-driven, high-performing enterprises. We&rsquo;ve served 140+
            B2B clients across healthcare, F&amp;B, construction, EdTech, SaaS, marketing, AI and
            recruitment — yet our methods are designed to be accessible to MSMEs and startups who
            need the same quality of transformation without enterprise budgets.
          </p>
        </div>
      </section>

      <section className="px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-[1440px]">
          <h2 className="max-w-xl font-display text-4xl leading-[1.1] tracking-tight text-navy-900 md:text-5xl">
            How transformation begins
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
            {onboarding.map((step, i) => (
              <div key={step.title} className="rounded-[28px] border border-navy-900/[0.06] bg-white p-8">
                <span className="rounded-full bg-navy-900/[0.06] px-3.5 py-1.5 text-[13px] text-navy-900/60">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 font-display text-xl text-navy-900">{step.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-navy-900/55">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
