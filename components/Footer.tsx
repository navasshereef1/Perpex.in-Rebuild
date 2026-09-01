import Image from "next/image";
import Link from "next/link";
import Container from "./ui/Container";

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
      { label: "Client results", href: "/results" },
      { label: "Engagement models", href: "/engagement" },
      { label: "Insights", href: "/blog" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy policy", href: "/privacy-policy" },
      { label: "Terms of service", href: "/terms-of-service" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-base pb-8 pt-20">
      <Container>
        <div className="grid grid-cols-1 gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <Image src="/brand/icon-cyan.svg" alt="PerpeX" width={28} height={22} />
            <p className="mt-6 max-w-[34ch] text-[15px] leading-relaxed text-navy-600">
              PerpeX Insights LLP
              <br />
              T 1, Hilite Business Park
              <br />
              Calicut, Kerala
            </p>
            <div className="mt-6 flex flex-col gap-1 text-[15px]">
              <a href="tel:+919745100036" className="text-navy-900 hover:text-cyan-500">
                +91 97451 00036
              </a>
              <a href="tel:+919745100046" className="text-navy-900 hover:text-cyan-500">
                +91 97451 00046
              </a>
              <a href="mailto:info@perpex.in" className="text-navy-900 hover:text-cyan-500">
                info@perpex.in
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 md:col-span-7">
            {columns.map((col) => (
              <div key={col.title} className="flex flex-col gap-3">
                <span className="text-sm font-medium text-navy-900">{col.title}</span>
                {col.links.map((l) => (
                  <Link key={l.label} href={l.href} className="text-[15px] text-navy-600 hover:text-navy-900">
                    {l.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-line pt-6 text-sm text-navy-500 sm:flex-row sm:justify-between">
          <span>&copy; {new Date().getFullYear()} PerpeX Insights LLP</span>
          <span>Organising the un-organised.</span>
        </div>
      </Container>
    </footer>
  );
}
