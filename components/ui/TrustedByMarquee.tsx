import Image from "next/image";
import { trustedByLogos } from "@/lib/trusted-by";

export function TrustedByMarquee() {
  const loop = [...trustedByLogos, ...trustedByLogos];

  return (
    <div
      className="relative overflow-hidden"
      aria-label="Trusted by logos"
      role="region"
    >
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-black to-transparent md:w-24"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-black to-transparent md:w-24"
        aria-hidden
      />

      <div className="flex w-max animate-marquee items-center gap-12 md:gap-20">
        {loop.map((logo, index) => (
          <div
            key={`${logo.id}-${index}`}
            className="flex shrink-0 items-center opacity-60 transition-opacity hover:opacity-100"
            aria-hidden={index >= trustedByLogos.length}
          >
            <Image
              src={logo.src}
              alt={logo.name}
              width={logo.src.width}
              height={logo.src.height}
              className="h-7 w-auto max-w-[140px] object-contain md:h-9 md:max-w-[180px] grayscale"
              draggable={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
