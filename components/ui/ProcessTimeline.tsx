import Reveal from "./Reveal";

type Step = { step?: string; title: string; description?: string };

export default function ProcessTimeline({ steps }: { steps: Step[] }) {
  return (
    <div className="relative grid grid-cols-1 gap-4 md:grid-cols-4">
      <div className="pointer-events-none absolute left-0 right-0 top-6 hidden h-px bg-navy-900/10 md:block" />
      {steps.map((s, i) => (
        <Reveal key={s.title} delay={i * 0.08} className="relative">
          <div className="relative z-10 flex flex-col">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy-900 font-mono text-[11px] text-cyan-300">
              {s.step ?? String(i + 1).padStart(2, "0")}
            </div>
            <h3 className="mt-4 font-display text-lg text-navy-900">{s.title}</h3>
            {s.description && (
              <p className="mt-1.5 text-[14px] leading-relaxed text-navy-900/70">
                {s.description}
              </p>
            )}
          </div>
        </Reveal>
      ))}
    </div>
  );
}
