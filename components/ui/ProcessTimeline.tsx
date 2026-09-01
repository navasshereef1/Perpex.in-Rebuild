import Reveal from "./Reveal";

type Step = { step?: string; title: string; description?: string };

// Timeline of how a service runs. Step labels like "Phase 1" are dropped; real
// markers (clock times, cadences) are kept.
export default function ProcessTimeline({ steps }: { steps: Step[] }) {
  const cols = Math.min(steps.length, 4);
  return (
    <ol
      className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-[repeat(var(--cols),minmax(0,1fr))]"
      style={{ ["--cols" as string]: cols }}
    >
      {steps.map((s, i) => {
        const marker = s.step && !/^(phase|step|stage)/i.test(s.step) ? s.step : null;
        return (
          <Reveal key={s.title} delay={i * 0.06}>
            <li className="border-t border-line pt-6">
              <span className="font-display text-sm font-semibold text-cyan-500">
                {marker ?? String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-lg font-semibold tracking-[-0.01em] text-navy-900">
                {s.title}
              </h3>
              {s.description && (
                <p className="mt-2 text-[15px] leading-relaxed text-navy-600">{s.description}</p>
              )}
            </li>
          </Reveal>
        );
      })}
    </ol>
  );
}
