import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { testimonials, differentiators, sectors } from "@/lib/seedData";
import { accentColors } from "@/lib/accentColors";

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

      <section className="px-6 pb-16 md:px-10 md:pb-20">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-4 md:grid-cols-2">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-[28px] bg-cream-100 p-8">
              <p className="font-display text-xl leading-snug text-navy-900">
                &ldquo;{t.description}&rdquo;
              </p>
              <div className="mt-6 text-[13px] text-navy-900/45">
                {t.name} — {t.designation}, {t.company}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-[1440px]">
          <h2 className="max-w-xl font-display text-4xl leading-[1.1] tracking-tight text-navy-900 md:text-5xl">
            Sectors we serve
          </h2>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
            {sectors.map((s, i) => {
              const accent = accentColors[i % accentColors.length];
              return (
                <div
                  key={s}
                  style={{ backgroundColor: accent.bg, color: accent.text }}
                  className="flex aspect-square items-center justify-center rounded-[24px] p-4 text-center"
                >
                  <span className="font-display text-lg">{s}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {differentiators.map((d) => (
              <div key={d.title} className="rounded-[28px] border border-navy-900/[0.06] bg-white p-7">
                <h3 className="font-display text-lg text-navy-900">{d.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-navy-900/55">
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
