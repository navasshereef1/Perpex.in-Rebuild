import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import Section from "../ui/Section";

const observations = [
  "Processes live in people's heads, not on paper",
  "Nobody is sure who owns which decision",
  "KPIs are missing, or tracked and never read",
  "New hires take months to become useful",
  "Fixing one problem creates two new ones",
];

const consequences = [
  "Revenue targets missed, quarter after quarter",
  "Founders pulled into every daily decision",
  "Systems break the moment the team grows",
  "Weak footing with investors and auditors",
  "Good people leave because expectations are unclear",
];

export default function RealitySection() {
  return (
    <Section className="bg-mist">
      <Container>
        <Reveal>
          <h2 className="max-w-[16ch] font-display text-3xl font-bold leading-[1.08] tracking-[-0.02em] text-navy-900 md:text-5xl">
            Different business. Same broken pattern.
          </h2>
        </Reveal>

        <Reveal delay={0.08} className="mt-12">
          <div className="grid grid-cols-1 overflow-hidden rounded-2xl ring-1 ring-navy-900/[0.08] md:grid-cols-2">
            <div className="bg-white p-8 md:p-10">
              <h3 className="text-[13px] font-semibold uppercase tracking-[0.09em] text-navy-500">
                What we see
              </h3>
              <ul className="mt-7 space-y-5">
                {observations.map((item) => (
                  <li
                    key={item}
                    className="border-l-2 border-navy-900/15 pl-4 text-lg leading-snug text-navy-600"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-t border-navy-900/[0.08] bg-warn-50 p-8 md:border-l md:border-t-0 md:p-10">
              <h3 className="text-[13px] font-semibold uppercase tracking-[0.09em] text-warn-600">
                What it costs
              </h3>
              <ul className="mt-7 space-y-5">
                {consequences.map((item) => (
                  <li
                    key={item}
                    className="border-l-2 border-warn-600 pl-4 text-lg leading-snug text-navy-900"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
