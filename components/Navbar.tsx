const links = [
  { label: "Services", href: "/services" },
  { label: "Engagement", href: "/engagement" },
  { label: "Results", href: "/results" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  return (
    <header className="relative z-50 px-6 py-7 md:px-10">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between">
        <a href="/" className="font-display text-lg tracking-tight text-navy-900">
          Perpex Insights
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[15px] text-navy-900/60 transition-colors hover:text-navy-900"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="/consultation"
          className="text-[15px] text-navy-900 underline decoration-navy-900/20 underline-offset-4 transition-colors hover:decoration-gold-500"
        >
          Get in touch
        </a>
      </div>
    </header>
  );
}
