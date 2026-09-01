import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <h1 className="max-w-[16ch] font-display text-4xl font-bold leading-[1.08] tracking-[-0.03em] text-navy-900 md:text-5xl">
        This page is not organised yet.
      </h1>
      <p className="mt-4 max-w-[40ch] text-lg text-navy-600">
        The page you are looking for does not exist, or has moved.
      </p>
      <div className="mt-8">
        <Button href="/">Back to home</Button>
      </div>
    </main>
  );
}
