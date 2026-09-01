import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import Section from "../ui/Section";

type Testimonial = {
  name: string;
  designation: string | null;
  company: string;
  description: string;
};

export default function TestimonialsSection({ testimonials }: { testimonials: Testimonial[] }) {
  if (testimonials.length === 0) return null;

  return (
    <Section className="pt-0 md:pt-0">
      <Container>
        <Reveal>
          <h2 className="font-display text-3xl font-bold leading-[1.08] tracking-[-0.02em] text-navy-900 md:text-5xl">
            Their words, not ours.
          </h2>
        </Reveal>
      </Container>

      <div className="mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 [scrollbar-width:none] md:px-10 [&::-webkit-scrollbar]:hidden">
        {testimonials.map((t) => (
          <figure
            key={t.name}
            className="flex w-[82vw] shrink-0 snap-start flex-col justify-between rounded-2xl bg-white p-8 ring-1 ring-navy-900/[0.06] sm:w-[400px]"
          >
            <blockquote className="line-clamp-3 font-display text-xl font-medium leading-snug tracking-[-0.01em] text-navy-900">
              &ldquo;{t.description}&rdquo;
            </blockquote>
            <figcaption className="mt-8 text-[15px] text-navy-600">
              <span className="font-medium text-navy-900">{t.name}</span>
              {t.designation ? `, ${t.designation}` : ""}
              <span className="block">{t.company}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
