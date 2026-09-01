import Container from "./ui/Container";

export default function PageHero({
  title,
  description,
}: {
  title: React.ReactNode;
  description?: string;
}) {
  return (
    <section className="pb-14 pt-8 md:pb-20 md:pt-14">
      <Container>
        <h1 className="max-w-[16ch] font-display text-4xl font-bold leading-[1.08] tracking-[-0.03em] text-navy-900 md:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-[56ch] text-lg leading-relaxed text-navy-600 md:text-xl">
            {description}
          </p>
        )}
      </Container>
    </section>
  );
}
