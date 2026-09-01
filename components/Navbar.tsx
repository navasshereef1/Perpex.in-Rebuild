"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Button from "./ui/Button";

const links = [
  { label: "Services", href: "/services" },
  { label: "Engagement", href: "/engagement" },
  { label: "Results", href: "/results" },
  { label: "Insights", href: "/blog" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 px-6 py-4 md:px-10">
      <div className="mx-auto flex max-w-site items-center justify-between">
        <Link
          href="/"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-white ring-1 ring-navy-900/10"
          aria-label="PerpeX Insights, home"
        >
          <Image src="/brand/icon-cyan.svg" alt="" width={20} height={16} />
        </Link>

        <nav className="hidden items-center gap-1 rounded-full bg-white/90 p-1.5 ring-1 ring-navy-900/[0.08] backdrop-blur md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 text-[15px] text-navy-600 transition-colors duration-300 hover:bg-navy-900/[0.05] hover:text-navy-900"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <Button href="/consultation">Book a discovery call</Button>
          </div>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="relative flex h-11 w-11 items-center justify-center rounded-full bg-white ring-1 ring-navy-900/10 md:hidden"
          >
            <span
              className={`absolute h-[1.5px] w-[18px] bg-navy-900 transition-transform duration-500 ease-soft ${
                open ? "rotate-45" : "-translate-y-[4px]"
              }`}
            />
            <span
              className={`absolute h-[1.5px] w-[18px] bg-navy-900 transition-transform duration-500 ease-soft ${
                open ? "-rotate-45" : "translate-y-[4px]"
              }`}
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-[76px] z-30 flex flex-col bg-base/95 px-6 pb-8 pt-10 backdrop-blur-xl md:hidden"
          >
            <nav className="flex flex-1 flex-col">
              {links.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={reduced ? false : { opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.06, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden border-b border-line"
                >
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-5 font-display text-3xl font-semibold tracking-[-0.02em] text-navy-900"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <Button href="/consultation" className="w-fit">
              Book a discovery call
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
