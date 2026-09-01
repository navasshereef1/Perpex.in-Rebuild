import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ConsultationForm from "./ConsultationForm";
import FAQSection from "@/components/FAQSection";
import Container from "@/components/ui/Container";
import { getServices } from "@/lib/db/queries";

export const metadata: Metadata = {
  title: "Book a discovery call",
  description:
    "Tell us where your business is breaking. One free, no-obligation call with PerpeX Insights.",
};

export const dynamic = "force-dynamic";

export default async function ConsultationPage() {
  const services = await getServices();

  return (
    <>
      <PageHero
        title="Thirty minutes that could save you a year."
        description="We ask about your team, your bottlenecks, and where growth is starting to hurt. You leave knowing what is broken, whether or not you hire us."
      />

      <section className="pb-24 md:pb-32">
        <Container>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
            <div className="md:col-span-7">
              <ConsultationForm services={services} />
            </div>
            <aside className="flex flex-col gap-6 md:col-span-5">
              <div className="rounded-2xl bg-white p-8 ring-1 ring-navy-900/[0.06]">
                <p className="text-[15px] text-navy-500">Call or write</p>
                <div className="mt-4 space-y-2 text-lg">
                  <a href="tel:+919745100036" className="block text-navy-900 hover:text-cyan-500">
                    +91 97451 00036
                  </a>
                  <a href="tel:+919745100046" className="block text-navy-900 hover:text-cyan-500">
                    +91 97451 00046
                  </a>
                  <a href="mailto:info@perpex.in" className="block text-navy-900 hover:text-cyan-500">
                    info@perpex.in
                  </a>
                </div>
              </div>
              <div className="rounded-2xl bg-white p-8 ring-1 ring-navy-900/[0.06]">
                <p className="text-[15px] text-navy-500">Office</p>
                <p className="mt-4 text-lg leading-relaxed text-navy-900">
                  PerpeX Insights LLP
                  <br />
                  T 1, Hilite Business Park
                  <br />
                  Calicut, Kerala
                </p>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <FAQSection />
    </>
  );
}
