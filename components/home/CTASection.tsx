import Reveal from "../ui/Reveal";
import Magnetic from "../ui/Magnetic";
import OrganizeCanvas from "../ui/OrganizeCanvas";

export default function CTASection() {
  return (
    <section className="px-6 py-16 md:px-10 md:py-24">
      <Reveal className="relative mx-auto max-w-[1440px] overflow-hidden rounded-[32px] bg-cyan-400 px-8 py-16 text-center md:px-14 md:py-28">
        <OrganizeCanvas
          className="pointer-events-none absolute inset-0 h-full w-full opacity-25"
          dotColor="0, 27, 74"
          lineColor="0, 27, 74"
        />
        <div className="relative z-10">
          <span className="text-[14px] text-navy-900/70">The Next Step</span>
          <h2 className="mx-auto mt-6 max-w-3xl font-display text-4xl leading-[1.1] tracking-tight text-navy-900 md:text-6xl">
            Ready to get organised?
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-[15px] leading-relaxed text-navy-900/70">
            Tell us where it&rsquo;s breaking. In one conversation, you&rsquo;ll know exactly
            what needs to change — and whether we&rsquo;re the ones to help you change it.
          </p>
          <Magnetic className="mt-8">
            <a
              href="/consultation"
              className="group inline-flex items-center gap-2 rounded-full bg-navy-900 px-7 py-3.5 text-[14px] text-cream-50 transition-colors hover:bg-navy-800"
            >
              Start a Discovery Conversation
              <span className="transition-transform group-hover:translate-x-1" aria-hidden>→</span>
            </a>
          </Magnetic>
        </div>
      </Reveal>
    </section>
  );
}
