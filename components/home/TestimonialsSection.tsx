import { testimonials } from "@/lib/seedData";

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <h2 className="font-display text-4xl leading-[1.1] tracking-tight text-navy-900 md:text-5xl">
          Their words, not ours.
        </h2>
      </div>

      <div className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 md:px-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="w-[85vw] shrink-0 snap-start rounded-[28px] bg-cream-100 p-8 sm:w-[420px] md:p-10"
          >
            <p className="font-display text-xl leading-snug text-navy-900 md:text-2xl">
              &ldquo;{t.description}&rdquo;
            </p>
            <div className="mt-8 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-400/25 font-display text-[13px] text-gold-500">
                {t.name.charAt(0)}
              </div>
              <div>
                <div className="text-[14px] text-navy-900">{t.name}</div>
                <div className="text-[13px] text-navy-900/45">
                  {t.designation}, {t.company}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
