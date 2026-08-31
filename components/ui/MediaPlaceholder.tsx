export default function MediaPlaceholder({
  label,
  className = "",
  playable = false,
}: {
  label: string;
  className?: string;
  playable?: boolean;
}) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden rounded-[28px] bg-navy-900 ${className}`}
    >
      <div
        className="absolute inset-0 opacity-80"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, transparent, transparent 16px, rgba(255,255,255,0.03) 16px, rgba(255,255,255,0.03) 17px)",
        }}
      />
      {playable && (
        <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm">
          ▶
        </span>
      )}
      <span className="absolute bottom-4 left-4 z-10 rounded-full bg-black/30 px-3 py-1.5 text-[11px] text-white/60 backdrop-blur-sm">
        {label}
      </span>
    </div>
  );
}
