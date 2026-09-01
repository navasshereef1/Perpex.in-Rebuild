import { Check, Circle } from "@phosphor-icons/react/dist/ssr";
import Reveal from "../ui/Reveal";

type EngagementModel = { name: string; servicesIncluded: string; bestFor: string | null };

const coreServices = ["Gap Analysis", "Documentation", "Training", "Managing & Monitoring"];

export default function ComparisonTable({ models }: { models: EngagementModel[] }) {
  return (
    <Reveal className="overflow-hidden rounded-2xl bg-white ring-1 ring-navy-900/[0.06]">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[760px] border-collapse text-left">
          <thead>
            <tr className="border-b border-line">
              <th className="w-[200px] p-6 text-[15px] font-normal text-navy-500">At a glance</th>
              {models.map((m) => (
                <th key={m.name} className="p-6 align-bottom font-display text-lg font-semibold tracking-[-0.01em] text-navy-900">
                  {m.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {coreServices.map((service) => (
              <tr key={service} className="border-b border-line">
                <th scope="row" className="p-6 text-[15px] font-normal text-navy-600">{service}</th>
                {models.map((m) => {
                  const anyOne = /any single/i.test(m.servicesIncluded);
                  const all = /all four/i.test(m.servicesIncluded);
                  const included =
                    all ||
                    m.servicesIncluded.includes(service) ||
                    (service === "Managing & Monitoring" && /monitoring retainer/i.test(m.name));
                  return (
                    <td key={m.name} className="p-6">
                      {anyOne ? (
                        <Circle size={18} weight="light" className="text-navy-500" aria-label="Available on its own" />
                      ) : included ? (
                        <Check size={18} weight="bold" className="text-cyan-500" aria-label="Included" />
                      ) : (
                        <span className="text-navy-900/25">&minus;</span>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
            <tr>
              <th scope="row" className="p-6 text-[15px] font-normal text-navy-600">Best for</th>
              {models.map((m) => (
                <td key={m.name} className="max-w-[220px] p-6 text-[14px] leading-relaxed text-navy-900">
                  {m.bestFor}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex flex-wrap gap-6 border-t border-line px-6 py-4 text-sm text-navy-600">
        <span className="flex items-center gap-2">
          <Check size={16} weight="bold" className="text-cyan-500" /> Included in the package
        </span>
        <span className="flex items-center gap-2">
          <Circle size={16} weight="light" className="text-navy-500" /> Available on its own
        </span>
      </div>
    </Reveal>
  );
}
