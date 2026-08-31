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
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "+91 97451 00046", href: "tel:+919745100046" },
      { label: "info@perpex.in", href: "mailto:info@perpex.in" },
      { label: "Kozhikode, Kerala", href: "/about" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-navy-900/10 px-6 py-16 md:px-10 md:py-20">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <span className="font-display text-3xl tracking-tight text-navy-900">
              Organising the Un-organised.
            </span>
            <a
              href="/consultation"
              className="mt-6 inline-block text-[15px] text-navy-900/60 underline decoration-navy-900/20 underline-offset-4 hover:decoration-gold-500"
            >
              Start a Discovery Conversation →
            </a>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 md:col-span-7">
            {columns.map((col) => (
              <div key={col.title} className="flex flex-col gap-3">
                <span className="text-[13px] text-navy-900/40">{col.title}</span>
                {col.links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    className="text-[14px] text-navy-900/70 hover:text-navy-900"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 flex flex-col justify-between gap-3 border-t border-navy-900/10 pt-6 text-[13px] text-navy-900/40 md:flex-row">
          <span>© {new Date().getFullYear()} Perpex Insights LLP. All rights reserved.</span>
          <span>Kozhikode, Kerala — Pan-India</span>
        </div>
      </div>
    </footer>
  );
}
