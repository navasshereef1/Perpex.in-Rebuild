import { differentiators } from "@/lib/seedData";
import Reveal from "../ui/Reveal";

export default function DifferentiatorsSection() {
  return (
    <section className="px-6 py-16 md:px-10 md:py-20">
      <div className="mx-auto max-w-[1440px]">
        <Reveal className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <h2 className="max-w-lg font-display text-4xl leading-[1.1] tracking-tight text-navy-900 md:text-5xl">
            Why the engagement doesn&rsquo;t end at delivery
          </h2>
          <span className="rounded-full bg-navy-900/[0.06] px-4 py-2 text-[13px] text-navy-900/60">
            Big-firm quality. Scale-appropriate cost.
          </span>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {differentiators.map((d, i) => (
            <Reveal
              key={d.title}
              delay={(i % 3) * 0.06}
              className="rounded-[28px] border border-navy-900/[0.06] bg-white p-7"
            >
              <h3 className="font-display text-lg text-navy-900">{d.title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-navy-900/55">{d.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
