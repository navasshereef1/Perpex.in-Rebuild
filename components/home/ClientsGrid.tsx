import { accentColors } from "@/lib/accentColors";
import Reveal from "../ui/Reveal";

type Testimonial = { company: string };

export default function ClientsGrid({ testimonials }: { testimonials: Testimonial[] }) {
  const clients = Array.from(new Set(testimonials.map((t) => t.company)));
  const marqueeItems = clients.length > 0 ? [...clients, ...clients, ...clients] : [];
  if (marqueeItems.length === 0) return null;

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <Reveal>
          <span className="text-[13px] text-navy-900/65">Selected Enterprise Engagements</span>
          <h2 className="mt-3 font-display text-4xl leading-[1.1] tracking-tight text-navy-900 md:text-5xl">
            Trusted by ₹100+ Cr companies — built for MSMEs too
          </h2>
        </Reveal>
      </div>

      <div className="relative mt-12 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-cream-50 to-transparent md:w-40" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-cream-50 to-transparent md:w-40" />

        <div className="animate-marquee flex w-max gap-4 px-6">
          {marqueeItems.map((name, i) => {
            const accent = accentColors[i % accentColors.length];
            return (
              <div
                key={`${name}-${i}`}
                style={{ backgroundColor: accent.bg, color: accent.text }}
                className="flex h-40 w-64 shrink-0 items-center justify-center rounded-[28px] px-6 text-center"
              >
                <span className="font-display text-xl leading-snug md:text-2xl">{name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
