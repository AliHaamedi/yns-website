import { GradientButton } from "@/components/ui/GradientButton";
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

      <div className="relative z-10 mx-auto w-full max-w-7xl text-center">
        <h1 className="mb-5 cursor-default select-none text-3xl leading-tight font-bold tracking-tight text-white sm:text-4xl md:text-8xl lg:text-9xl">
          I give Solana brands <br />
          something to feel
        </h1>
        <p className="mx-auto mb-10 max-w-7xl text-base leading-relaxed text-white/75 md:text-4xl mt-10">
          Motion design rooted in the Solana ecosystem, built <br /> for brands with
          something to say
        </p>
        <GradientButton>Book a free call</GradientButton>
      </div>

      <TrustedByLogos className="relative z-10 mt-10 -mx-5 w-[calc(100%+2.5rem)] md:hidden" />
    </section>
  );
}
