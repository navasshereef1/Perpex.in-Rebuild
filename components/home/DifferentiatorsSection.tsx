import { differentiators } from "@/lib/seedData";

export default function DifferentiatorsSection() {
  return (
    <section className="border-t border-navy-900/10 px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="max-w-xl font-display text-4xl leading-[1.05] text-navy-900 md:text-5xl">
            Six reasons clients stay.
          </h2>
          <span className="text-[15px] italic text-navy-900/50">
            Big-firm quality. Scale-appropriate cost.
          </span>
        </div>

        <div className="grid grid-cols-1 gap-x-10 gap-y-12 border-t border-navy-900/10 pt-12 md:grid-cols-3">
          {differentiators.map((d, i) => (
            <div key={d.title}>
              <span className="text-[13px] text-navy-900/35">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 font-display text-xl text-navy-900">{d.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-navy-900/55">{d.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
