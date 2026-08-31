export default function Tag({
  children,
  active = false,
}: {
  children: React.ReactNode;
  active?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3.5 py-1.5 text-[13px] ${
        active ? "bg-navy-900 text-cream-50" : "bg-navy-900/[0.06] text-navy-900/70"
      }`}
    >
      {children}
    </span>
  );
}
