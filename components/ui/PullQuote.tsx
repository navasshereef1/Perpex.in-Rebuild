import Reveal from "./Reveal";

export default function PullQuote({
  quote,
  name,
  designation,
  company,
}: {
  quote: string;
  name: string;
  designation?: string | null;
  company: string;
}) {
  return (
    <section className="px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-6 md:grid-cols-12">
        <div className="hidden md:col-span-2 md:block" />
        <Reveal className="md:col-span-10">
          <span
            aria-hidden
            className="block font-display text-[7rem] italic leading-none text-cyan-400/40 md:text-[9rem]"
          >
            &ldquo;
          </span>
          <p className="-mt-10 max-w-3xl font-display text-3xl leading-[1.2] tracking-tight text-navy-900 md:-mt-14 md:text-5xl">
            {quote}
          </p>
          <div className="mt-8 flex items-center gap-3 border-l-2 border-cyan-400/40 pl-4">
            <span className="font-mono text-[12px] uppercase tracking-[0.14em] text-navy-900/45">
              {name}
              {designation ? `, ${designation}` : ""} — {company}
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
