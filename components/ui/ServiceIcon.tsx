const paths: Record<string, React.ReactNode> = {
  "gap-analysis": (
    <>
      <path d="M4 20V13M9.5 20V9M15 20V14.5M20 20V6" />
      <circle cx="17" cy="6" r="2.6" />
      <path d="M18.8 4.2L21 2" />
    </>
  ),
  documentation: (
    <>
      <path d="M6 3.5h8l4 4V20a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4.5a1 1 0 0 1 1-1Z" />
      <path d="M14 3.5V8h4" />
      <path d="M8 12.5h8M8 16h5" />
    </>
  ),
  training: (
    <>
      <path d="M2 8.5 12 4l10 4.5-10 4.5-10-4.5Z" />
      <path d="M6 10.7V15c0 1.4 2.7 3 6 3s6-1.6 6-3v-4.3" />
      <path d="M21 8.5v6" />
    </>
  ),
  "managing-monitoring": (
    <>
      <circle cx="12" cy="13" r="8.2" />
      <path d="M12 13 15.2 8.6" />
      <path d="M8 13a4 4 0 0 1 4-4" strokeOpacity="0.4" />
      <path d="M12 3.6V5.4M4.6 6.4l1.3 1.3M19.4 6.4l-1.3 1.3" />
    </>
  ),
};

export default function ServiceIcon({
  slug,
  className = "h-5 w-5",
}: {
  slug: string;
  className?: string;
}) {
  const path = paths[slug];
  if (!path) return null;

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {path}
    </svg>
  );
}
