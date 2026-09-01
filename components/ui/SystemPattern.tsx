import OrganizeCanvas from "./OrganizeCanvas";

// Replaces the old "photo placeholder" box. Instead of pretending to be a
// missing photograph, this is an honest, on-brand generative panel — reuses
// the chaos-to-order node motif so it reads as intentional design, not an
// empty slot waiting for an asset.
export default function SystemPattern({
  label,
  className = "",
  dark = true,
}: {
  label: string;
  className?: string;
  dark?: boolean;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-[28px] ${
        dark ? "bg-navy-900" : "bg-cream-100"
      } ${className}`}
    >
      <OrganizeCanvas
        className="absolute inset-0 h-full w-full"
        loop
        dotColor={dark ? "0, 178, 255" : "0, 27, 74"}
        lineColor={dark ? "253, 252, 250" : "0, 27, 74"}
      />
      <span
        className={`absolute bottom-5 left-5 rounded-full px-3.5 py-1.5 text-[11px] backdrop-blur-sm ${
          dark ? "bg-white/10 text-white/60" : "bg-navy-900/10 text-navy-900/65"
        }`}
      >
        {label}
      </span>
    </div>
  );
}
