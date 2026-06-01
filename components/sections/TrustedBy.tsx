import { trustedLogos } from "@/lib/projects";

export function TrustedByLogos({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <p className="mb-6 text-center text-xs tracking-widest text-white/50 uppercase md:mb-8">
        Trusted by
      </p>
      <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 md:gap-x-16">
        {trustedLogos.map((name) => (
          <span
            key={name}
            className={`text-sm font-medium text-white/40 md:text-base ${name === "Phoenix" || name === "Solana Foundation" ? "hidden md:inline" : ""}`}
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}

export function TrustedBy() {
  return (
    <section className="hidden border-y border-white/5 px-5 py-10 md:block md:px-8 md:py-14 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <TrustedByLogos />
      </div>
    </section>
  );
}
