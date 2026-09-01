import Button from "../ui/Button";
import Container from "../ui/Container";
import Photo from "../ui/Photo";
import Reveal from "../ui/Reveal";

export default function CTASection({
  title = "Ready to get organised?",
  body = "Tell us where it is breaking. After one conversation you will know what needs to change, whether or not you hire us to change it.",
  photoSeed = "60",
}: {
  title?: string;
  body?: string;
  photoSeed?: string;
}) {
  return (
    <section className="bg-navy-900 py-24 text-white md:py-32">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <h2 className="max-w-[14ch] font-display text-4xl font-bold leading-[1.06] tracking-[-0.03em] md:text-6xl">
              {title}
            </h2>
            <p className="mt-6 max-w-[50ch] text-lg leading-relaxed text-white/70">{body}</p>
            <div className="mt-10">
              <Button href="/consultation" variant="inverse">
                Book a discovery call
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5">
            <Photo
              seed={photoSeed}
              alt=""
              width={1000}
              height={800}
              aspect="aspect-[5/4]"
              className="!bg-white/5 !ring-white/10"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
