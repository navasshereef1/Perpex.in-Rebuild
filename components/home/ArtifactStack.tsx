"use client";

import { motion } from "framer-motion";

// The hero's centerpiece: real business-document chips (not abstract shapes)
// that start scattered like papers on a founder's desk and settle into an
// aligned stack — "Organising the Un-organised" made literal, not decorative.
const artifacts: {
  label: string;
  meta: string;
  from: { x: number; y: number; rotate: number };
  to: { x: number; y: number; rotate: number };
  accent?: boolean;
}[] = [
  {
    label: "Org Chart — v3",
    meta: "DOCX · Structure",
    from: { x: -58, y: -86, rotate: -14 },
    to: { x: 0, y: -128, rotate: -2 },
  },
  {
    label: "Gap Analysis Report",
    meta: "PDF · Findings",
    from: { x: 72, y: -48, rotate: 11 },
    to: { x: 8, y: -66, rotate: 1.5 },
    accent: true,
  },
  {
    label: "SOP — Client Onboarding",
    meta: "PDF · Process",
    from: { x: -84, y: 6, rotate: 8 },
    to: { x: -6, y: -4, rotate: -1 },
  },
  {
    label: "KPI Tracker — Q3",
    meta: "XLSX · Reporting",
    from: { x: 66, y: 44, rotate: -9 },
    to: { x: 4, y: 58, rotate: 1 },
  },
  {
    label: "Escalation Matrix",
    meta: "DOCX · Governance",
    from: { x: -46, y: 96, rotate: -6 },
    to: { x: -4, y: 120, rotate: -1.5 },
  },
  {
    label: "Training Log — Week 4",
    meta: "PDF · Capability",
    from: { x: 44, y: 132, rotate: 10 },
    to: { x: 2, y: 182, rotate: 2 },
  },
];

export default function ArtifactStack() {
  return (
    <div className="relative mx-auto hidden h-[420px] w-full max-w-[380px] lg:block xl:h-[460px]">
      <div className="absolute left-1/2 top-1/2 h-[2px] w-[2px]">
        {artifacts.map((a, i) => (
          <motion.div
            key={a.label}
            initial={{ x: a.from.x * 2.1, y: a.from.y * 1.7, rotate: a.from.rotate, opacity: 0 }}
            animate={{ x: a.to.x * 2.1, y: a.to.y * 1.7, rotate: a.to.rotate, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 60,
              damping: 14,
              mass: 0.9,
              delay: 0.5 + i * 0.11,
            }}
            whileHover={{ rotate: 0, scale: 1.04, zIndex: 20 }}
            data-cursor-hover
            style={{ zIndex: artifacts.length - i }}
            className={`absolute w-[210px] -translate-x-1/2 -translate-y-1/2 rounded-2xl border px-4 py-3.5 shadow-[0_18px_40px_-16px_rgba(0,27,74,0.28)] backdrop-blur-sm ${
              a.accent
                ? "border-cyan-400/40 bg-navy-900 text-cream-50"
                : "border-navy-900/[0.08] bg-white/95 text-navy-900"
            }`}
          >
            <div className="flex items-center gap-2">
              <span
                className={`h-1.5 w-1.5 shrink-0 rounded-full ${
                  a.accent ? "bg-cyan-300" : "bg-cyan-500"
                }`}
              />
              <span className="truncate text-[13px] font-medium">{a.label}</span>
            </div>
            <span
              className={`mt-1 block font-mono text-[10px] uppercase tracking-wide ${
                a.accent ? "text-cream-50/50" : "text-navy-900/40"
              }`}
            >
              {a.meta}
            </span>
          </motion.div>
        ))}
      </div>

      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.15em] text-navy-900/35"
      >
        6 documents · 1 system
      </motion.span>
    </div>
  );
}
