import Image from "next/image";
import { ArrowDownIcon } from "@/components/ui/ArrowDownIcon";

export function About() {
  return (
    <section className="overflow-hidden border-t border-white/10 px-5 pt-28 pb-16 md:px-8 md:pt-32 md:pb-24 lg:px-12">
      <div className="relative mx-auto max-w-7xl overflow-hidden">
        <div
          className="pointer-events-none absolute top-0 -left-1/4 h-[500px] w-[min(600px,100vw)] rounded-full bg-teal-500/10 blur-[120px]"
          aria-hidden
        />

        <div className="relative grid min-w-0 gap-12 md:grid-cols-[1.15fr_0.85fr] md:items-start md:gap-16 lg:gap-20">
          <div className="min-w-0 flex flex-col gap-10 md:gap-12">
            <h1 className="text-[clamp(3rem,10vw,5rem)] leading-[1.04] tracking-normal text-white">
              About Me
            </h1>

            <p className="max-w-3xl font-duplet text-[clamp(1.25rem,2.5vw,2rem)] leading-[1.1] text-white">
              I&apos;m Younes, a freelance motion and graphic designer who found
              a natural home in the Solana ecosystem. Animation has always been
              my way of making sense of the world — blending rhythm, design, and
              narrative into visuals that feel as alive as the projects behind
              them.
            </p>

            <div className="flex flex-col gap-4">
              <h2 className="text-[clamp(1.25rem,2.5vw,2rem)] leading-[1.1] tracking-normal text-white uppercase">
                Roles you can hire me for
              </h2>
              <ArrowDownIcon className="text-white size-7" />
              <p className="max-w-2xl font-duplet text-[clamp(1.25rem,2.5vw,1.4rem)] leading-[1.1] text-white">
                Motion graphics. Launch videos. Visual storytelling. Graphic
                design — wherever your brand needs to show up.
              </p>
            </div>
          </div>

          <div className="relative mx-auto min-w-0 aspect-[4/5] w-full max-w-md overflow-hidden md:mx-0 md:max-w-none">
            <Image
              src="/images/about-portrait.png"
              alt="Younes — motion designer portrait with a cloud for a head"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 40vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
