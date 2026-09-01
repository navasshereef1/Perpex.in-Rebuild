import Reveal from "../ui/Reveal";

type EngagementModel = { name: string; servicesIncluded: string; bestFor: string | null };

const coreServices = ["Gap Analysis", "Documentation", "Training", "Managing & Monitoring"];

export default function ComparisonTable({ models }: { models: EngagementModel[] }) {
  return (
    <Reveal className="mx-auto max-w-[1440px] overflow-hidden rounded-[28px] border border-navy-900/[0.06] bg-white">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px] border-collapse text-left">
          <thead>
            <tr className="border-b border-navy-900/10">
              <th className="w-[220px] p-6 text-[13px] font-normal text-navy-900/65">
                At a glance
              </th>
              {models.map((m) => (
                <th key={m.name} className="p-6 text-left align-bottom">
                  <span className="font-display text-lg text-navy-900">{m.name}</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {coreServices.map((service) => (
              <tr key={service} className="border-b border-navy-900/[0.06]">
                <th scope="row" className="p-6 text-[14px] font-normal text-navy-900/70">
                  {service}
                </th>
                {models.map((m) => {
                  const isAnyOne = /any single/i.test(m.servicesIncluded);
                  const includesAll = /all four/i.test(m.servicesIncluded);
                  const includes =
                    includesAll ||
                    m.servicesIncluded.includes(service) ||
                    (service === "Managing & Monitoring" && /monitoring retainer/i.test(m.name));

                  return (
                    <td key={m.name} className="p-6">
                      {isAnyOne ? (
                        <span
                          className="flex h-6 w-6 items-center justify-center rounded-full border border-navy-900/15 text-[11px] text-navy-900/65"
                          title="Available as a standalone engagement"
                        >
                          ○
                        </span>
                      ) : includes ? (
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-400/15 text-cyan-600">
                          ✓
                        </span>
                      ) : (
                        <span className="text-navy-900/20">—</span>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
            <tr>
              <th scope="row" className="p-6 text-[14px] font-normal text-navy-900/70">
                Best for
              </th>
              {models.map((m) => (
                <td key={m.name} className="max-w-[220px] p-6 text-[13px] leading-relaxed text-navy-900/65">
                  {m.bestFor}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex flex-wrap items-center gap-5 border-t border-navy-900/[0.06] px-6 py-4 text-[12px] text-navy-900/65">
        <span className="flex items-center gap-2">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-cyan-400/15 text-cyan-600">
            ✓
          </span>
          Included in the package
        </span>
        <span className="flex items-center gap-2">
          <span className="flex h-5 w-5 items-center justify-center rounded-full border border-navy-900/15 text-[10px]">
            ○
          </span>
          Available on its own
        </span>
      </div>
    </Reveal>
  );
}
