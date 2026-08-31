export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <span className="text-[13px] text-navy-900/45">404</span>
      <h1 className="mt-4 max-w-md font-display text-4xl leading-[1.1] tracking-tight text-navy-900 md:text-5xl">
        This page isn&rsquo;t organised yet.
      </h1>
      <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-navy-900/55">
        The page you&rsquo;re looking for doesn&rsquo;t exist, or has moved.
      </p>
      <a
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-navy-900 px-6 py-3.5 text-[14px] text-cream-50 transition-colors hover:bg-navy-800"
      >
        Back to Home
      </a>
    </main>
  );
}
