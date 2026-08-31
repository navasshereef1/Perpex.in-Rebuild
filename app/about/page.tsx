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

      <section className="border-t border-navy-900/10 px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1440px]">
          <p className="max-w-2xl text-lg leading-relaxed text-navy-900/60">
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

      <section className="border-t border-navy-900/10 px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1440px]">
          <h2 className="max-w-xl font-display text-4xl leading-[1.05] text-navy-900 md:text-5xl">
            How transformation begins.
          </h2>

          <div className="mt-16 border-t border-navy-900/10">
            {onboarding.map((step, i) => (
              <div
                key={step.title}
                className="grid grid-cols-1 gap-3 border-b border-navy-900/10 py-8 md:grid-cols-12 md:items-baseline md:gap-8"
              >
                <span className="text-[15px] text-navy-900/35 md:col-span-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-2xl text-navy-900 md:col-span-3">
                  {step.title}
                </span>
                <p className="text-[15px] leading-relaxed text-navy-900/55 md:col-span-8">
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
