import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" />
      <section className="px-6 pb-24 md:px-10 md:pb-32">
        <div className="mx-auto max-w-2xl space-y-8 text-[15px] leading-relaxed text-navy-900/70">
          <p>
            PerpeX Insights LLP (&ldquo;PerpeX,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;)
            respects your privacy. This policy explains what information we collect through
            perpex.in and how we use it.
          </p>
          <div>
            <h2 className="font-display text-xl text-navy-900">Information We Collect</h2>
            <p className="mt-2">
              When you submit a Discovery Conversation request or contact form, we collect your
              name, company, email, phone number, and any message you provide. We do not collect
              payment information through this site.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl text-navy-900">How We Use It</h2>
            <p className="mt-2">
              Information you submit is used solely to respond to your inquiry and, where
              relevant, to scope and deliver an engagement. We do not sell or rent your
              information to third parties.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl text-navy-900">Contact</h2>
            <p className="mt-2">
              Questions about this policy can be sent to{" "}
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
