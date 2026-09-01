import Container from "./Container";
import Reveal from "./Reveal";
import Section from "./Section";

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
    <Section className="pt-0 md:pt-0">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12">
          <Reveal className="md:col-span-10 md:col-start-2">
            <blockquote className="max-w-[26ch] font-display text-3xl font-semibold leading-[1.15] tracking-[-0.02em] text-navy-900 md:text-5xl">
              &ldquo;{quote}&rdquo;
            </blockquote>
            <p className="mt-8 border-l-2 border-cyan-400 pl-4 text-[15px] text-navy-600">
              <span className="font-medium text-navy-900">{name}</span>
              {designation ? `, ${designation}` : ""}
              <span className="block">{company}</span>
            </p>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
