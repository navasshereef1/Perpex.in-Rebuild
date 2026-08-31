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
        <span className="mb-6 inline-block rounded-full bg-navy-900/[0.06] px-4 py-2 text-[13px] text-navy-900/60">
          {eyebrow}
        </span>
        <h1 className="max-w-3xl font-display text-5xl leading-[1.05] tracking-tight text-navy-900 md:text-7xl">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-md text-[16px] leading-relaxed text-navy-900/55">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
