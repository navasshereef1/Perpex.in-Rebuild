const observations = [
  "Processes exist only in people's heads — not on paper",
  "No clarity on who owns what decisions",
  "KPIs either don't exist or are never tracked",
  "Teams operate on habit, not documented process",
  "New hires take too long to become productive",
  "Management has no reliable way to measure output",
  "Fixing one problem creates two new ones",
];

const consequences = [
  "Revenue targets consistently missed",
  "Sales teams underperforming with no clear cause",
  "High dependency on founders for daily decisions",
  "Difficult to scale — systems break when teams grow",
  "Investor and audit readiness is weak",
  "Culture of firefighting instead of planning",
  "Good people leave due to unclear expectations",
];

export default function RealitySection() {
  return (
    <section className="px-6 py-16 md:px-10 md:py-20">
      <div className="mx-auto max-w-[1440px]">
        <h2 className="max-w-xl font-display text-4xl leading-[1.1] tracking-tight text-navy-900 md:text-5xl">
          It repeats across every sector
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="rounded-[28px] bg-cream-100 p-8 md:p-10">
            <span className="text-[13px] text-navy-900/45">What we observe</span>
            <ul className="mt-5 space-y-3.5">
              {observations.map((o) => (
                <li key={o} className="text-[15px] leading-relaxed text-navy-900/70">
                  {o}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[28px] bg-navy-900 p-8 text-cream-50 md:p-10">
            <span className="text-[13px] text-cyan-300/80">What it costs the business</span>
            <ul className="mt-5 space-y-3.5">
              {consequences.map((c) => (
                <li key={c} className="text-[15px] leading-relaxed text-cream-50/75">
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
