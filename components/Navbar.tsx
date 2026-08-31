"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import Magnetic from "./ui/Magnetic";

const links = [
  { label: "Services", href: "/services" },
  { label: "Engagement", href: "/engagement" },
  { label: "Results", href: "/results" },
  { label: "Insights", href: "/blog" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 px-6 py-6 md:px-10">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between">
        <a
          href="/"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-navy-900/10 bg-cream-50 shadow-sm"
          aria-label="PerpeX Insights — Home"
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

        <div className="flex items-center gap-3">
          <Magnetic className="hidden sm:inline-block">
            <a
              href="/consultation"
              className="inline-block rounded-full bg-navy-900 px-5 py-2.5 text-[14px] text-cream-50 transition-colors hover:bg-navy-800"
            >
              Get in touch
            </a>
          </Magnetic>

          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-navy-900/10 bg-cream-50 shadow-sm md:hidden"
          >
            <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
              <path d="M0 1H18" stroke="#001b4a" strokeWidth="1.5" />
              <path d="M0 11H18" stroke="#001b4a" strokeWidth="1.5" />
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex flex-col bg-cream-50 px-6 py-6 md:hidden"
          >
            <div className="flex items-center justify-between">
              <Image src="/brand/icon-cyan.svg" alt="PerpeX" width={22} height={18} />
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-navy-900/10"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M1 1L15 15M15 1L1 15" stroke="#001b4a" strokeWidth="1.5" />
                </svg>
              </button>
            </div>

            <nav className="mt-14 flex flex-1 flex-col gap-2">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="border-b border-navy-900/10 py-4 font-display text-3xl text-navy-900"
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>

            <a
              href="/consultation"
              onClick={() => setOpen(false)}
              className="rounded-full bg-navy-900 px-6 py-4 text-center text-[15px] text-cream-50"
            >
              Get in touch
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
