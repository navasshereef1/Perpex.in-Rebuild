import Container from "../ui/Container";
import Reveal from "../ui/Reveal";

type Testimonial = { company: string };

// Client marks: until the clients' own logos arrive, each brand is a monogram
// plus wordmark set in the display face. TODO real logos.
function Mark({ name }: { name: string }) {
  const initials = name
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
  return (
    <div className="flex shrink-0 items-center gap-3 pr-14">
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy-900 font-display text-sm font-bold text-white">
        {initials}
      </span>
      <span className="whitespace-nowrap font-display text-xl font-semibold tracking-[-0.01em] text-navy-900">
        {name}
      </span>
    </div>
  );
}

export default function ClientsGrid({ testimonials }: { testimonials: Testimonial[] }) {
  const clients = Array.from(new Set(testimonials.map((t) => t.company)));
  if (clients.length === 0) return null;
  const loop = [...clients, ...clients];

  return (
    <section className="py-16 md:py-20">
      <Container>
        <Reveal>
          <p className="text-[15px] text-navy-600">Clients include</p>
        </Reveal>
      </Container>
      <div className="relative mt-8 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-base to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-base to-transparent" />
        <div className="animate-marquee flex w-max px-6">
          {loop.map((name, i) => (
            <Mark key={`${name}-${i}`} name={name} />
          ))}
        </div>
      </div>
    </section>
  );
}
