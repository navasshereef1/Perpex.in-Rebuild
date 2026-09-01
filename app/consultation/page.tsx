import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ConsultationForm from "./ConsultationForm";
import FAQSection from "@/components/FAQSection";
import { getServices } from "@/lib/db/queries";

export const metadata: Metadata = {
  title: "Start a Discovery Conversation",
  description:
    "Tell us where your business is breaking. One free, no-obligation conversation with PerpeX Insights — the clarity is immediate.",
};

export const dynamic = "force-dynamic";

export default async function ConsultationPage() {
  const services = await getServices();

  return (
    <>
      <PageHero
        eyebrow="The Next Step"
        title="Free. No obligation. 30 minutes that could save you a year."
        description="We'll ask about your team, your bottlenecks, and where growth is starting to hurt. You'll leave knowing exactly what's broken — whether or not you engage us to fix it."
      />

      <section className="px-6 pb-24 md:px-10 md:pb-32">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-4 md:grid-cols-12">
          <div className="md:col-span-7">
            <ConsultationForm services={services} />
          </div>
          <div className="flex flex-col gap-4 md:col-span-5">
            <div className="grain rounded-[28px] bg-navy-900 p-8 text-cream-50">
              <span className="text-[13px] text-cyan-300/80">Direct</span>
              <div className="mt-4 space-y-2 text-[15px]">
                <a href="tel:+919745100036" className="block text-cream-50/85 hover:text-white">
                  +91 97451 00036
                </a>
                <a href="tel:+919745100046" className="block text-cream-50/85 hover:text-white">
                  +91 97451 00046
                </a>
                <a href="mailto:info@perpex.in" className="block text-cream-50/85 hover:text-white">
                  info@perpex.in
                </a>
              </div>
            </div>
            <div className="rounded-[28px] border border-navy-900/[0.06] bg-white p-8">
              <span className="text-[13px] text-navy-900/65">Headquarters</span>
              <p className="mt-4 text-[15px] leading-relaxed text-navy-900/70">
                PerpeX Insights LLP
                <br />
                T 1, Hilite Business Park, Calicut, Kerala
              </p>
            </div>
          </div>
        </div>
      </section>

      <FAQSection />
    </>
  );
}
