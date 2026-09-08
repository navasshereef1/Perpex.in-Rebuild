import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { clientLogos } from "@/lib/clientLogos";

export default function ClientsGrid() {
  const loop = [...clientLogos, ...clientLogos];

  return (
    <section className="py-16 md:py-20">
      <Container>
        <Reveal>
          <p className="text-[15px] text-navy-600">140+ clients, including</p>
        </Reveal>
      </Container>
      <div className="relative mt-8 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-base to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-base to-transparent" />
        <div className="animate-marquee flex w-max items-center gap-14 px-6">
          {loop.map((logo, i) => (
            <img
              key={`${logo.file}-${i}`}
              src={`/clients/${logo.file}`}
              alt={logo.name}
              className="h-9 w-auto max-w-[140px] shrink-0 object-contain opacity-70 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
              loading={i < clientLogos.length ? "eager" : "lazy"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
