import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import Section from "../ui/Section";

type Service = {
  slug: string;
  stage: string | null;
  title: string;
  tagline?: string | null;
  description: string;
};

type Tone = "navyDeep" | "cyan" | "mist" | "navy";

const tones: Record<Tone, { bg: string; text: string; sub: string; number: string }> = {
  navyDeep: { bg: "bg-navy-950", text: "text-white", sub: "text-white/65", number: "text-white/10" },
  cyan: { bg: "bg-cyan-400", text: "text-navy-900", sub: "text-navy-900/70", number: "text-navy-900/10" },
  mist: { bg: "bg-mist", text: "text-navy-900", sub: "text-navy-600", number: "text-navy-900/[0.06]" },
  navy: { bg: "bg-navy-800", text: "text-white", sub: "text-white/65", number: "text-white/10" },
};

function Quadrant({
  service,
  tone,
  index,
}: {
  service: Service;
  tone: Tone;
  index: number;
}) {
  const t = tones[tone];
  return (
    <Link
      href={`/services/${service.slug}`}
      className={`group relative flex min-h-[220px] flex-col justify-end overflow-hidden p-7 transition-opacity duration-300 ease-soft hover:opacity-90 md:p-9 ${t.bg} ${t.text}`}
    >
      <span
        className={`pointer-events-none absolute -right-2 -top-3 font-display text-[7rem] font-extrabold leading-none md:text-[8.5rem] ${t.number}`}
        aria-hidden="true"
      >
        {String(index + 1).padStart(2, "0")}
      </span>
      <span className={`relative text-[13px] font-semibold uppercase tracking-[0.09em] ${t.sub}`}>
        {service.stage}
      </span>
      <h3 className="relative mt-2 font-display text-2xl font-bold tracking-[-0.02em] md:text-3xl">
        {service.title}
      </h3>
      <p className={`relative mt-3 max-w-[36ch] text-[15px] leading-relaxed ${t.sub}`}>
        {service.tagline ?? service.description}
      </p>
      <span className={`relative mt-6 inline-flex items-center gap-2 text-sm font-medium ${t.text}`}>
        Read about {service.title}
        <ArrowRight size={16} className="transition-transform duration-500 ease-soft group-hover:translate-x-1" />
      </span>
    </Link>
  );
}

export default function FrameworkSection({ services }: { services: Service[] }) {
  const [gap, docs, training, monitoring] = services;
  if (!gap || !docs || !training || !monitoring) return null;

  return (
    <Section>
      <Container>
        <Reveal>
          <h2 className="max-w-[18ch] font-display text-3xl font-bold leading-[1.08] tracking-[-0.02em] text-navy-900 md:text-5xl">
            One system. Four moving parts.
          </h2>
          <p className="mt-5 max-w-[60ch] text-lg leading-relaxed text-navy-600">
            Each service works on its own. Run them in order and each stage builds on the
            last: findings feed documentation, documentation drives training, training makes
            monitoring possible.
          </p>
        </Reveal>

        <Reveal delay={0.08} className="mt-12">
          <div className="grid grid-cols-1 gap-[3px] overflow-hidden rounded-2xl bg-navy-900/[0.08] md:grid-cols-2">
            <Quadrant service={gap} tone="navyDeep" index={0} />
            <Quadrant service={docs} tone="cyan" index={1} />
            <Quadrant service={training} tone="mist" index={2} />
            <Quadrant service={monitoring} tone="navy" index={3} />
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
