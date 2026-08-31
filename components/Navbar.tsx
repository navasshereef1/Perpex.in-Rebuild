import Image from "next/image";

const links = [
  { label: "Services", href: "/services" },
  { label: "Engagement", href: "/engagement" },
  { label: "Results", href: "/results" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 px-6 py-6 md:px-10">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between">
        <a
          href="/"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-navy-900/10 bg-cream-50 shadow-sm"
        >
          <Image src="/brand/icon-cyan.svg" alt="PerpeX" width={20} height={16} />
        </a>

        <nav className="hidden items-center gap-1 rounded-full border border-navy-900/[0.06] bg-white/90 px-2 py-2 shadow-[0_10px_30px_rgba(0,27,74,0.06)] backdrop-blur md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 text-[14px] text-navy-900/70 transition-colors hover:bg-navy-900/[0.05] hover:text-navy-900"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="/consultation"
          className="rounded-full bg-navy-900 px-5 py-2.5 text-[14px] text-cream-50 transition-colors hover:bg-navy-800"
        >
          Get in touch
        </a>
      </div>
    </header>
  );
}
