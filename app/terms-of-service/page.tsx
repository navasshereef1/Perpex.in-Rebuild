import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Terms of Service",
};

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of Service" />
      <section className="px-6 pb-24 md:px-10 md:pb-32">
        <div className="mx-auto max-w-2xl space-y-8 text-[15px] leading-relaxed text-navy-900/70">
          <p>
            These terms govern your use of perpex.in, operated by PerpeX Insights LLP, T 1
            Hilite Business Park, Calicut, Kerala.
          </p>
          <div>
            <h2 className="font-display text-xl text-navy-900">Use of This Site</h2>
            <p className="mt-2">
              Content on this site is provided for informational purposes about PerpeX
              Insights&rsquo; consulting, documentation, training, and monitoring services. It
              does not constitute a binding offer of services — engagement terms are agreed
              separately during scoping.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl text-navy-900">Inquiries</h2>
            <p className="mt-2">
              Submitting a Discovery Conversation or contact form does not create a client
              relationship. A formal engagement begins only once scope, deliverables, and terms
              are confirmed in writing.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl text-navy-900">Contact</h2>
            <p className="mt-2">
              Questions about these terms can be sent to{" "}
              <a href="mailto:info@perpex.in" className="text-navy-900 underline">
                info@perpex.in
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
