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
    <section className="px-6 pb-16 pt-8 md:px-10 md:pb-24 md:pt-12">
      <div className="mx-auto max-w-[1440px]">
        <span className="mb-8 block text-[15px] text-navy-900/50">{eyebrow}</span>
        <h1 className="max-w-4xl font-display text-5xl leading-[1.02] tracking-tight text-navy-900 md:text-7xl">
          {title}
        </h1>
        {description && (
          <p className="mt-8 max-w-lg border-t border-navy-900/10 pt-8 text-lg leading-relaxed text-navy-900/60">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
