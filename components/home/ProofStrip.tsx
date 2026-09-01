import Container from "../ui/Container";
import CountUp from "../ui/CountUp";
import Reveal from "../ui/Reveal";

const stats = [
  { value: "140+", label: "B2B clients served" },
  { value: "10+", label: "Sectors across India" },
  { value: "₹100+ Cr", label: "Turnover of our largest client" },
  { value: "4", label: "Services that work as one system" },
];

export default function ProofStrip() {
  return (
    <section className="border-y border-line py-12 md:py-16">
      <Container>
        <Reveal>
          <dl className="grid grid-cols-2 gap-y-10 md:grid-cols-4 md:divide-x md:divide-line">
            {stats.map((s) => (
              <div key={s.label} className="md:px-8 md:first:pl-0 md:last:pr-0">
                <dd className="font-display text-4xl font-bold tracking-[-0.03em] text-navy-900 md:text-5xl">
                  <CountUp value={s.value} />
                </dd>
                <dt className="mt-2 text-[15px] text-navy-600">{s.label}</dt>
              </div>
            ))}
          </dl>
        </Reveal>
      </Container>
    </section>
  );
}
