import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

type Variant = "primary" | "secondary" | "inverse";

const base =
  "group inline-flex items-center gap-3 whitespace-nowrap rounded-full pl-6 pr-2 py-2 text-[15px] font-medium transition-all duration-500 ease-soft active:scale-[0.98]";

const variants: Record<Variant, { shell: string; circle: string }> = {
  primary: {
    shell: "bg-navy-900 text-white hover:bg-navy-800",
    circle: "bg-white/15 text-white",
  },
  secondary: {
    shell: "border border-navy-900/15 bg-transparent text-navy-900 hover:border-navy-900/40",
    circle: "bg-navy-900/[0.06] text-navy-900",
  },
  inverse: {
    shell: "bg-white text-navy-900 hover:bg-mist",
    circle: "bg-navy-900 text-white",
  },
};

export default function Button({
  href,
  children,
  variant = "primary",
  type,
  disabled,
  className = "",
}: {
  href?: string;
  children: React.ReactNode;
  variant?: Variant;
  type?: "submit" | "button";
  disabled?: boolean;
  className?: string;
}) {
  const v = variants[variant];
  const cls = `${base} ${v.shell} ${className}`;
  const inner = (
    <>
      <span>{children}</span>
      <span
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-transform duration-500 ease-soft group-hover:translate-x-0.5 ${v.circle}`}
      >
        <ArrowRight size={16} weight="regular" />
      </span>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={cls}>
        {inner}
      </Link>
    );
  }
  return (
    <button type={type ?? "button"} disabled={disabled} className={`${cls} disabled:opacity-50`}>
      {inner}
    </button>
  );
}
