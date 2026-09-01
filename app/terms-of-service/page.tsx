import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Terms of Service",
};

export default function TermsPage() {
  return (
    <>
      <PageHero title="Terms of service" />
      <section className="pb-24 md:pb-32">
        <Container>
          <div className="max-w-[68ch] space-y-8 text-[16px] leading-relaxed text-navy-600">
            <p>
              These terms govern your use of perpex.in, operated by PerpeX Insights LLP, T 1
              Hilite Business Park, Calicut, Kerala.
            </p>
            <div>
              <h2 className="font-display text-xl font-semibold text-navy-900">Use of this site</h2>
              <p className="mt-2">
                Content on this site describes PerpeX Insights&rsquo; consulting, documentation,
                training, and monitoring services. It is not a binding offer of services.
                Engagement terms are agreed separately during scoping.
              </p>
            </div>
            <div>
              <h2 className="font-display text-xl font-semibold text-navy-900">Inquiries</h2>
              <p className="mt-2">
                Submitting a discovery call request or contact form does not create a client
                relationship. A formal engagement begins once scope, deliverables, and terms are
                confirmed in writing.
              </p>
            </div>
            <div>
              <h2 className="font-display text-xl font-semibold text-navy-900">Contact</h2>
              <p className="mt-2">
                Send questions about these terms to{" "}
                <a href="mailto:info@perpex.in" className="text-navy-900 underline underline-offset-4">
                  info@perpex.in
                </a>
                .
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
