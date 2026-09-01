import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join PerpeX Insights and build the systems that run real businesses.",
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        title="Build the system, not just study it."
        description="Open roles are handled directly. Send us your CV and tell us what you want to work on."
      />
      <section className="pb-24 md:pb-32">
        <Container>
          <Reveal>
            <p className="max-w-[58ch] text-lg leading-relaxed text-navy-600">
              We have no open roles listed right now. If you want to work on operational
              transformation for real businesses, across Gap Analysis, Documentation, Training,
              and Managing & Monitoring, email your CV to{" "}
              <a href="mailto:info@perpex.in" className="text-navy-900 underline underline-offset-4">
                info@perpex.in
              </a>{" "}
              and we will get back to you if there is a fit.
            </p>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
