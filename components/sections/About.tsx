import Image from "next/image";

export function About() {
  return (
    <section className="px-5 pt-28 pb-16 md:px-8 md:pt-32 md:pb-24 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-2 md:items-start md:gap-16">
          <div>
            <h2 className="mb-6 text-3xl font-bold text-white leading-tight tracking-tight sm:text-4xl md:text-8xl lg:text-9xl">
              About Me
            </h2>
            <p className="text-base leading-relaxed text-white/75 md:text-lg">
              I&apos;m a freelance motion and graphic designer helping brands in
              the Solana ecosystem and beyond tell stories that land. From
              launch films to social motion systems, I combine craft with
              clarity so your audience feels something real.
            </p>
          </div>

          <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-2xl md:max-w-none">
            <Image
              src="/images/about-portrait.png"
              alt="Younes — motion designer portrait with a cloud for a head"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>

        <div className="mt-16 md:mt-24">
          <div className="mb-4 flex items-center gap-2">
            <span className="text-white/50" aria-hidden>
              ↓
            </span>
            <h3 className="text-sm font-bold tracking-widest text-white uppercase md:text-base">
              Roles you can hire me for
            </h3>
          </div>
          <p className="max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
            Motion graphics. Launch videos. Visual storytelling. Graphic design
            — wherever your brand needs to show up.
          </p>
        </div>
      </div>
    </section>
  );
}
