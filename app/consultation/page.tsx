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
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-16 md:grid-cols-12">
          <div className="md:col-span-7">
            <ConsultationForm />
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <div className="border-t border-navy-900/10 pt-10">
              <span className="text-[13px] text-navy-900/40">Direct</span>
              <div className="mt-4 space-y-2 text-[15px]">
                <a href="tel:+919745100046" className="block text-navy-900/70 hover:text-navy-900">
                  +91 97451 00046
                </a>
                <a href="mailto:info@perpex.in" className="block text-navy-900/70 hover:text-navy-900">
                  info@perpex.in
                </a>
              </div>
            </div>
            <div className="mt-10 border-t border-navy-900/10 pt-10">
              <span className="text-[13px] text-navy-900/40">Headquarters</span>
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
