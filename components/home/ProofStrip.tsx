import Reveal from "../ui/Reveal";
import CountUp from "../ui/CountUp";

const stats = [
  { value: "140+", label: "B2B clients served" },
  { value: "10+", label: "Sectors, Kerala & Pan-India" },
  { value: "₹100+ Cr", label: "Turnover of largest clients we've served" },
  { value: "4", label: "Connected services, one operating system" },
];

export default function ProofStrip() {
  return (
    <section className="px-6 py-6 md:px-10">
      <Reveal className="grain relative mx-auto max-w-[1440px] overflow-hidden rounded-[32px] bg-navy-900 px-8 py-14 text-cream-50 md:px-14 md:py-20">
        <div className="relative z-10 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-display text-4xl text-cyan-300 md:text-5xl">
                <CountUp value={s.value} />
              </div>
              <div className="mt-2 text-[14px] leading-snug text-cream-50/50">{s.label}</div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
