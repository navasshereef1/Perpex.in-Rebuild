import Reveal from "@/components/ui/Reveal";
import ServiceIcon from "@/components/ui/ServiceIcon";

type Service = {
  slug: string;
  stage: string | null;
  title: string;
  deliverables: string[] | null;
};

export default function ServicesComparisonTable({ services }: { services: Service[] }) {
  return (
    <section className="px-6 pb-10 md:px-10 md:pb-14">
      <Reveal className="mx-auto max-w-[1440px] overflow-hidden rounded-[28px] border border-navy-900/[0.06] bg-white">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[720px] border-collapse text-left">
            <thead>
              <tr className="border-b border-navy-900/10">
                <th className="w-[160px] p-6 text-[13px] font-normal text-navy-900/65">
                  At a glance
                </th>
                {services.map((s) => (
                  <th key={s.slug} className="p-6 align-bottom">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-navy-900/[0.06] text-navy-900/70">
                      <ServiceIcon slug={s.slug} />
                    </span>
                    <span className="mt-3 block font-display text-lg text-navy-900">
                      {s.title}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-navy-900/[0.06]">
                <th scope="row" className="p-6 text-[14px] font-normal text-navy-900/70">
                  Framework stage
                </th>
                {services.map((s) => (
                  <td key={s.slug} className="p-6 text-[14px] text-navy-900/70">
                    {s.stage}
                  </td>
                ))}
              </tr>
              <tr className="border-b border-navy-900/[0.06]">
                <th scope="row" className="p-6 text-[14px] font-normal text-navy-900/70">
                  Primary output
                </th>
                {services.map((s) => (
                  <td key={s.slug} className="max-w-[220px] p-6 text-[13px] leading-relaxed text-navy-900/65">
                    {s.deliverables?.[0] ?? "—"}
                  </td>
                ))}
              </tr>
              <tr>
                <th scope="row" className="p-6 text-[14px] font-normal text-navy-900/70">
                  Deliverables
                </th>
                {services.map((s) => (
                  <td key={s.slug} className="p-6 text-[14px] text-navy-900/70">
                    {s.deliverables?.length ?? 0}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </Reveal>
    </section>
  );
}
