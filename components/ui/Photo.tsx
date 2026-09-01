import Image from "next/image";

// Every photograph on the site passes through the same navy duotone so
// placeholder photography and, later, the client's own photos read as one
// system. Wrapped in a double bezel: a tinted outer tray and an inner frame.
export default function Photo({
  src,
  alt,
  seed,
  width = 1200,
  height = 900,
  priority = false,
  className = "",
  aspect = "aspect-[4/3]",
}: {
  src?: string;
  alt: string;
  seed?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
  aspect?: string;
}) {
  // TODO real photo: replace the picsum placeholder with the client's asset.
  // A numeric seed selects a fixed picsum image id (all chosen as desk/office
  // shots); any other string falls back to picsum's seeded random image.
  const key = seed ?? "perpex";
  const url =
    src ??
    (/^\d+$/.test(key)
      ? `https://picsum.photos/id/${key}/${width}/${height}`
      : `https://picsum.photos/seed/${key}/${width}/${height}`);

  return (
    <div className={`rounded-[20px] bg-navy-900/[0.05] p-1.5 ring-1 ring-navy-900/[0.06] ${className}`}>
      <div className={`relative overflow-hidden rounded-2xl ${aspect}`}>
        <Image
          src={url}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover grayscale"
        />
        <div className="absolute inset-0 bg-navy-900 opacity-70 mix-blend-multiply" />
        <div className="absolute inset-0 bg-cyan-400 opacity-15 mix-blend-screen" />
      </div>
    </div>
  );
}
