import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ConsultationForm from "./ConsultationForm";

export const metadata: Metadata = {
  title: "Start a Discovery Conversation",
  description: "Reach out and let us understand your business. The conversation is free. The clarity is immediate.",
};

export default function ConsultationPage() {
  return (
    <>
      <PageHero
        eyebrow="The Next Step"
        title="The conversation is free. The clarity is immediate."
      />

      <section className="px-6 pb-24 md:px-10 md:pb-32">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-4 md:grid-cols-12">
          <div className="md:col-span-7">
            <ConsultationForm />
          </div>
          <div className="flex flex-col gap-4 md:col-span-5">
            <div className="rounded-[28px] bg-navy-900 p-8 text-cream-50">
              <span className="text-[13px] text-gold-300/80">Direct</span>
              <div className="mt-4 space-y-2 text-[15px]">
                <a href="tel:+919745100046" className="block text-cream-50/85 hover:text-white">
                  +91 97451 00046
                </a>
                <a href="mailto:info@perpex.in" className="block text-cream-50/85 hover:text-white">
                  info@perpex.in
                </a>
              </div>
            </div>
            <div className="rounded-[28px] border border-navy-900/[0.06] bg-white p-8">
              <span className="text-[13px] text-navy-900/45">Headquarters</span>
              <p className="mt-4 text-[15px] leading-relaxed text-navy-900/70">
                Kozhikode, Kerala — serving clients Pan-India.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
