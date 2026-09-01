import Link from "next/link";
import {
  ArrowRight,
  ChalkboardTeacher,
  ChartLineUp,
  Files,
  MagnifyingGlass,
} from "@phosphor-icons/react/dist/ssr";
import Container from "../ui/Container";
import Photo from "../ui/Photo";
import Reveal from "../ui/Reveal";
import Section from "../ui/Section";

type Service = {
  slug: string;
  stage: string | null;
  title: string;
  tagline?: string | null;
  description: string;
};

const icons: Record<string, React.ElementType> = {
  "gap-analysis": MagnifyingGlass,
  documentation: Files,
  training: ChalkboardTeacher,
  "managing-monitoring": ChartLineUp,
};

function Cell({
  service,
  tone = "white",
  photoSeed,
  className = "",
}: {
  service: Service;
  tone?: "white" | "mist" | "navy";
  photoSeed?: string;
  className?: string;
}) {
  const Icon = icons[service.slug] ?? MagnifyingGlass;
  const dark = tone === "navy";
  const bg =
    tone === "navy" ? "bg-navy-900 text-white" : tone === "mist" ? "bg-mist" : "bg-white";

  return (
    <Link
      href={`/services/${service.slug}`}
      className={`group flex flex-col justify-between overflow-hidden rounded-2xl ring-1 ring-navy-900/[0.06] transition-transform duration-500 ease-soft hover:-translate-y-0.5 ${bg} ${className}`}
    >
      {photoSeed && (
        <div className="p-3 pb-0">
          <Photo
            seed={photoSeed}
            alt=""
            width={1200}
            height={700}
            aspect="aspect-[16/8]"
            className="!bg-transparent !p-0 !ring-0"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col justify-between p-7 md:p-8">
        <div className="flex items-center justify-between">
          <Icon size={28} weight="light" className={dark ? "text-cyan-300" : "text-cyan-500"} />
          <span className={`text-sm ${dark ? "text-white/60" : "text-navy-500"}`}>{service.stage}</span>
        </div>
        <div className="mt-10">
          <h3 className="font-display text-2xl font-semibold tracking-[-0.02em] md:text-3xl">
            {service.title}
          </h3>
          <p className={`mt-2 max-w-[40ch] text-[15px] leading-relaxed ${dark ? "text-white/70" : "text-navy-600"}`}>
            {service.tagline ?? service.description}
          </p>
          <span
            className={`mt-6 inline-flex items-center gap-2 text-sm font-medium ${dark ? "text-cyan-300" : "text-navy-900"}`}
          >
            Read about {service.title}
            <ArrowRight size={16} className="transition-transform duration-500 ease-soft group-hover:translate-x-1" />
          </span>
        </div>
      </div>
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

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-12 md:grid-rows-[auto_auto_auto]">
          <Reveal className="md:col-span-7 md:row-span-2 flex">
            <Cell service={gap} photoSeed="180" className="w-full" />
          </Reveal>
          <Reveal delay={0.08} className="md:col-span-5 flex">
            <Cell service={docs} tone="mist" className="w-full" />
          </Reveal>
          <Reveal delay={0.12} className="md:col-span-5 flex">
            <Cell service={training} className="w-full" />
          </Reveal>
          <Reveal delay={0.16} className="md:col-span-12 flex">
            <Cell service={monitoring} tone="navy" className="w-full md:flex-row md:items-end" />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
