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

function List({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="font-display text-2xl font-semibold tracking-[-0.02em] text-navy-900">{title}</h3>
      <ul className="mt-8 space-y-5">
        {items.map((item) => (
          <li key={item} className="text-lg leading-snug text-navy-600">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function RealitySection() {
  return (
    <Section className="bg-mist">
      <Container>
        <Reveal>
          <h2 className="max-w-[16ch] font-display text-3xl font-bold leading-[1.08] tracking-[-0.02em] text-navy-900 md:text-5xl">
            Different business. Same broken pattern.
          </h2>
        </Reveal>
        <div className="mt-14 grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-0 md:divide-x md:divide-navy-900/10">
          <Reveal className="md:pr-14">
            <List title="What we see" items={observations} />
          </Reveal>
          <Reveal delay={0.1} className="md:pl-14">
            <List title="What it costs" items={consequences} />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
