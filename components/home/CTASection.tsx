export default function CTASection() {
  return (
    <section className="border-t border-navy-900/10 px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1440px] text-center">
        <span className="text-[15px] text-navy-900/50">The next step</span>
        <h2 className="mx-auto mt-8 max-w-4xl font-display text-5xl leading-[1.05] text-navy-900 md:text-7xl">
          Ready to transform <span className="italic text-gold-500">your business?</span>
        </h2>
        <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-navy-900/55">
          Reach out and let us understand your business. The conversation is free. The clarity
          is immediate.
        </p>
        <a
          href="/consultation"
          className="group mt-10 inline-flex items-center gap-3 text-lg text-navy-900"
        >
          Start a Discovery Conversation
          <span className="transition-transform group-hover:translate-x-1.5">→</span>
        </a>
      </div>
    </section>
  );
}
