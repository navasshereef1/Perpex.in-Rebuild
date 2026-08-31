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
    <section className="border-t border-navy-900/10 px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1440px]">
        <h2 className="max-w-2xl font-display text-4xl leading-[1.05] text-navy-900 md:text-5xl">
          It repeats across every sector.
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-16 md:grid-cols-2">
          <div>
            <span className="text-[13px] text-navy-900/40">What we observe</span>
            <ul className="mt-6 border-t border-navy-900/10">
              {observations.map((o) => (
                <li
                  key={o}
                  className="border-b border-navy-900/10 py-4 text-[15px] leading-relaxed text-navy-900/65"
                >
                  {o}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span className="text-[13px] text-gold-500">What it costs the business</span>
            <ul className="mt-6 border-t border-navy-900/10">
              {consequences.map((c) => (
                <li
                  key={c}
                  className="border-b border-navy-900/10 py-4 text-[15px] leading-relaxed text-navy-900/65"
                >
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
