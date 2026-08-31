import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { testimonials, differentiators, sectors } from "@/lib/seedData";

export const metadata: Metadata = {
  title: "Client Results",
  description: "140+ B2B clients served across consulting, training & managed execution.",
};

export default function ResultsPage() {
  return (
    <>
      <PageHero
        eyebrow="Why Perpex Insights"
        title="Their words, not ours."
        description="Case studies are being compiled into the CMS — this page will surface tagged results by sector and service as they're added."
      />

      <section className="px-6 pb-20 md:px-10 md:pb-28">
        <div className="mx-auto max-w-[1440px] border-t border-navy-900/10">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="grid grid-cols-1 gap-4 border-b border-navy-900/10 py-10 md:grid-cols-12 md:gap-8"
            >
              <span className="text-[15px] text-navy-900/35 md:col-span-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="font-display text-2xl leading-snug text-navy-900 md:col-span-8">
                &ldquo;{t.description}&rdquo;
              </p>
              <div className="text-[14px] text-navy-900/50 md:col-span-3 md:text-right">
                {t.name}
                <br />
                {t.designation}, {t.company}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-navy-900/10 bg-cream-100 px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1440px]">
          <h2 className="max-w-xl font-display text-4xl leading-[1.05] text-navy-900 md:text-5xl">
            Sectors we serve.
          </h2>
          <div className="mt-12 flex flex-wrap gap-3">
            {sectors.map((s) => (
              <span
                key={s}
                className="rounded-full border border-navy-900/15 px-5 py-2.5 text-[14px] text-navy-900/70"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid grid-cols-1 gap-x-10 gap-y-12 border-t border-navy-900/10 pt-12 md:grid-cols-3">
            {differentiators.map((d, i) => (
              <div key={d.title}>
                <span className="text-[13px] text-navy-900/35">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-xl text-navy-900">{d.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-navy-900/55">
                  {d.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
