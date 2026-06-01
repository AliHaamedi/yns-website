import { GradientButton } from "@/components/ui/GradientButton";
import { HeroProjectPreview } from "./HeroProjectPreview";
import { TrustedByLogos } from "./TrustedBy";

export function Hero() {
  return (
    <section className="relative flex flex-col items-center overflow-hidden px-5 pt-24 pb-12 md:min-h-[100svh] md:justify-center md:px-8 md:pt-20 lg:px-12">
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute top-1/4 left-1/2 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-purple-600/20 blur-[120px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-1/4 bottom-1/3 h-[300px] w-[300px] rounded-full bg-teal-500/15 blur-[100px]"
        aria-hidden
      />
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <h1 className="mb-5 text-3xl leading-tight font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
          I give Solana brands something to feel
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
          Motion design rooted in the Solana ecosystem, built for brands with
          something to say
        </p>
        <GradientButton>Book a free call</GradientButton>

        <TrustedByLogos className="mt-10 md:hidden" />

        <div className="mt-10 flex flex-col items-center gap-2 md:mt-16">
          <span className="text-white/50" aria-hidden>
            ↓
          </span>
          <p className="max-w-xs text-sm text-white/70">
            Join me for a quick tour of my best projects
          </p>
        </div>

        <HeroProjectPreview />
      </div>
    </section>
  );
}
