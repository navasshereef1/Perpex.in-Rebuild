const stats = [
  { value: "140+", label: "B2B clients served" },
  { value: "10+", label: "Sectors, Kerala & Pan-India" },
  { value: "₹100+ Cr", label: "Turnover of largest clients" },
  { value: "4", label: "Integrated services, one system" },
];

const clients = ["Elance", "Interval", "Platinum Group", "COVO"];

export default function ProofStrip() {
  return (
    <section className="bg-cream-100 px-6 py-20 md:px-10 md:py-24">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-display text-4xl text-navy-900 md:text-5xl">{s.value}</div>
              <div className="mt-2 text-[14px] text-navy-900/50">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-navy-900/10 pt-8 md:flex-row md:items-center md:justify-between">
          <span className="text-[13px] text-navy-900/40">Selected enterprise engagements</span>
          <div className="flex flex-wrap gap-x-10 gap-y-3">
            {clients.map((c) => (
              <span key={c} className="text-[15px] text-navy-900/70">
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
