import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join PerpeX Insights.",
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Join Us"
        title="Build the system, not just study it."
        description="Open roles are managed directly — reach out with your resume and what you'd want to work on."
      />
      <section className="px-6 pb-24 md:px-10 md:pb-32">
        <div className="mx-auto max-w-[1440px] rounded-[28px] bg-cream-100 p-10 md:p-14">
          <p className="max-w-lg text-[16px] leading-relaxed text-navy-900/65">
            We don&rsquo;t have open roles listed here right now. If you want to work on
            operational transformation for real businesses — Gap Analysis, Documentation,
            Training, or Managing &amp; Monitoring — send your resume to{" "}
            <a href="mailto:info@perpex.in" className="text-navy-900 underline">
              info@perpex.in
            </a>{" "}
            and we&rsquo;ll reach out if there&rsquo;s a fit.
          </p>
        </div>
      </section>
    </>
  );
}
