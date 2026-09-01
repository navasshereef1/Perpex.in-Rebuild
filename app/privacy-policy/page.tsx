import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero title="Privacy policy" />
      <section className="pb-24 md:pb-32">
        <Container>
          <div className="max-w-[68ch] space-y-8 text-[16px] leading-relaxed text-navy-600">
            <p>
              PerpeX Insights LLP (&ldquo;PerpeX,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;)
              respects your privacy. This policy explains what information we collect through
              perpex.in and how we use it.
            </p>
            <div>
              <h2 className="font-display text-xl font-semibold text-navy-900">Information we collect</h2>
              <p className="mt-2">
                When you submit a discovery call request or contact form, we collect your name,
                company, email, phone number, and any message you provide. We do not collect
                payment information through this site.
              </p>
            </div>
            <div>
              <h2 className="font-display text-xl font-semibold text-navy-900">How we use it</h2>
              <p className="mt-2">
                We use the information you submit to respond to your inquiry and, where relevant,
                to scope and deliver an engagement. We do not sell or rent your information to
                third parties.
              </p>
            </div>
            <div>
              <h2 className="font-display text-xl font-semibold text-navy-900">Contact</h2>
              <p className="mt-2">
                Send questions about this policy to{" "}
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
