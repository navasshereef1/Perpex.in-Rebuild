import OrganizeCanvas from "./ui/OrganizeCanvas";

const columns = [
  {
    title: "Services",
    links: [
      { label: "Gap Analysis", href: "/services/gap-analysis" },
      { label: "Documentation", href: "/services/documentation" },
      { label: "Training", href: "/services/training" },
      { label: "Managing & Monitoring", href: "/services/managing-monitoring" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Client Results", href: "/results" },
      { label: "Engagement Models", href: "/engagement" },
      { label: "Insights", href: "/blog" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-of-service" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="px-6 pb-6 pt-6 md:px-10">
      <div className="grain relative mx-auto max-w-[1440px] overflow-hidden rounded-[32px] bg-navy-950 px-8 pb-4 pt-16 text-cream-50 md:px-14 md:pt-20">
        <OrganizeCanvas
          className="pointer-events-none absolute inset-0 h-full w-full opacity-30"
          loop
          dotColor="0, 178, 255"
          lineColor="253, 252, 250"
        />
        <div className="relative z-10 grid grid-cols-1 gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <span className="font-display text-3xl tracking-tight text-white">
              Let&rsquo;s meet.
            </span>
            <div className="mt-8 grid grid-cols-2 gap-8">
              <div>
                <span className="text-[13px] text-cream-50/40">Contact</span>
                <div className="mt-2 flex flex-col gap-1 text-[14px]">
                  <a href="tel:+919745100036" className="text-cream-50/75 hover:text-white">
                    +91 97451 00036
                  </a>
                  <a href="tel:+919745100046" className="text-cream-50/75 hover:text-white">
                    +91 97451 00046
                  </a>
                  <a href="mailto:info@perpex.in" className="text-cream-50/75 hover:text-white">
                    info@perpex.in
                  </a>
                </div>
              </div>
              <div>
                <span className="text-[13px] text-cream-50/40">Headquarters</span>
                <p className="mt-2 text-[14px] leading-relaxed text-cream-50/75">
                  PerpeX Insights LLP
                  <br />
                  T 1, Hilite Business Park
                  <br />
                  Calicut, Kerala
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 md:col-span-7">
            {columns.map((col) => (
              <div key={col.title} className="flex flex-col gap-3">
                <span className="text-[13px] text-cream-50/40">{col.title}</span>
                {col.links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    className="text-[14px] text-cream-50/75 hover:text-white"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 mt-20 flex items-center justify-between border-t border-white/10 pt-6 text-[13px] text-cream-50/35">
          <span>© {new Date().getFullYear()} PerpeX Insights LLP</span>
          <span>All rights reserved</span>
        </div>

        <div
          aria-hidden
          className="pointer-events-none -mx-8 -mb-6 select-none overflow-hidden font-display text-[22vw] font-medium leading-none text-white/[0.04] md:-mx-14"
        >
          PERPEX
        </div>
      </div>
    </footer>
  );
}
