import { accentColors } from "@/lib/accentColors";

const clients = ["Elance", "Interval", "Platinum Group", "COVO"];

export default function ClientsGrid() {
  return (
    <section className="px-6 py-16 md:px-10 md:py-20">
      <div className="mx-auto max-w-[1440px]">
        <span className="text-[13px] text-navy-900/40">Selected enterprise engagements</span>
        <h2 className="mt-3 font-display text-4xl leading-[1.1] tracking-tight text-navy-900 md:text-5xl">
          Collaborations across 10+ sectors
        </h2>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {clients.map((name, i) => {
            const accent = accentColors[i % accentColors.length];
            return (
              <div
                key={name}
                style={{ backgroundColor: accent.bg, color: accent.text }}
                className="flex aspect-square items-center justify-center rounded-[28px] p-6 text-center"
              >
                <span className="font-display text-xl md:text-2xl">{name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
