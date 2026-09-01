import {
  Buildings,
  Coins,
  SealCheck,
  Stack,
  UserFocus,
  Wrench,
} from "@phosphor-icons/react/dist/ssr";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import Section from "../ui/Section";

const items = [
  { icon: SealCheck, title: "Proven across 140+ businesses", text: "Consulting, training, and managed execution in 10+ sectors across India." },
  { icon: Stack, title: "Four services, one system", text: "Findings feed documentation. Documentation drives training. Training makes monitoring possible." },
  { icon: Coins, title: "Priced for the business you are", text: "Big-firm rigour at a cost an MSME can carry." },
  { icon: UserFocus, title: "Founder-led on every project", text: "Senior leadership stays involved after the kickoff call." },
  { icon: Wrench, title: "Implementation, not just a report", text: "Every deliverable comes with a path to run it. Monitoring makes sure it happens." },
  { icon: Buildings, title: "Sector range", text: "Healthcare, F&B, construction, EdTech, SaaS, marketing, AI, recruitment, hospitality." },
];

export default function DifferentiatorsSection() {
  return (
    <Section>
      <Container>
        <Reveal>
          <h2 className="max-w-[18ch] font-display text-3xl font-bold leading-[1.08] tracking-[-0.02em] text-navy-900 md:text-5xl">
            Why the engagement does not end at delivery.
          </h2>
        </Reveal>
        <div className="mt-14 grid grid-cols-1 gap-x-16 gap-y-10 md:grid-cols-2">
          {items.map((d, i) => (
            <Reveal key={d.title} delay={(i % 2) * 0.06}>
              <div className="border-t border-line pt-7">
                <d.icon size={28} weight="light" className="text-cyan-500" />
                <h3 className="mt-5 font-display text-xl font-semibold tracking-[-0.01em] text-navy-900">
                  {d.title}
                </h3>
                <p className="mt-2 max-w-[48ch] text-[15px] leading-relaxed text-navy-600">{d.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
