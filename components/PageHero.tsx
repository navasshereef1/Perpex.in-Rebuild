export default function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
}) {
  return (
    <section className="px-6 pb-10 pt-6 md:px-10 md:pb-14">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-6 flex items-center gap-2.5">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" />
          <span className="font-mono text-[12px] uppercase tracking-[0.14em] text-navy-900/65">
            {eyebrow}
          </span>
        </div>
        <h1 className="max-w-3xl font-display text-5xl leading-[1.05] tracking-tight text-navy-900 md:text-7xl">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-md text-[16px] leading-relaxed text-navy-900/70">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
