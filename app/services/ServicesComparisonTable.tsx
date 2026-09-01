import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { serviceIcon } from "@/lib/serviceIcons";

type Service = {
  slug: string;
  stage: string | null;
  title: string;
  deliverables: string[] | null;
};

const rowHead = "p-6 text-[15px] font-normal text-navy-600";

export default function ServicesComparisonTable({ services }: { services: Service[] }) {
  return (
    <section className="pb-12 md:pb-16">
      <Container>
        <Reveal className="overflow-hidden rounded-2xl bg-white ring-1 ring-navy-900/[0.06]">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse text-left">
              <thead>
                <tr className="border-b border-line">
                  <th className="w-[160px] p-6 text-[15px] font-normal text-navy-500">At a glance</th>
                  {services.map((s) => {
                    const Icon = serviceIcon(s.slug);
                    return (
                      <th key={s.slug} className="p-6 align-bottom">
                        <Icon size={26} weight="light" className="text-cyan-500" />
                        <span className="mt-3 block font-display text-lg font-semibold tracking-[-0.01em] text-navy-900">
                          {s.title}
                        </span>
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-line">
                  <th scope="row" className={rowHead}>Framework stage</th>
                  {services.map((s) => (
                    <td key={s.slug} className="p-6 text-[15px] text-navy-900">{s.stage}</td>
                  ))}
                </tr>
                <tr className="border-b border-line">
                  <th scope="row" className={rowHead}>Primary output</th>
                  {services.map((s) => (
                    <td key={s.slug} className="max-w-[220px] p-6 text-[15px] leading-relaxed text-navy-900">
                      {s.deliverables?.[0] ?? "Not listed"}
                    </td>
                  ))}
                </tr>
                <tr>
                  <th scope="row" className={rowHead}>Deliverables</th>
                  {services.map((s) => (
                    <td key={s.slug} className="p-6 text-[15px] text-navy-900">{s.deliverables?.length ?? 0}</td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
