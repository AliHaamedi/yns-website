import { GradientButton } from "@/components/ui/GradientButton";
import { ContactMediaPlaceholder } from "@/components/ui/ContactMediaPlaceholder";

export function Contact() {
  return (
    <section className="relative px-5 pt-28 pb-16 md:px-8 md:pt-32 md:pb-24 lg:px-12">
      <div
        className="pointer-events-none absolute top-1/3 left-0 h-[400px] w-[500px] -translate-y-1/2 rounded-full bg-teal-500/10 blur-[120px]"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-stretch md:gap-16 lg:gap-20">
        <div className="flex flex-col justify-between gap-10 md:min-h-[480px] lg:min-h-[520px]">
          <div>
            <h1 className="mb-6 text-3xl leading-tight font-bold text-white md:text-4xl lg:text-5xl">
              Have a project in mind? Let&apos;s talk.
            </h1>
            <p className="max-w-md text-base leading-relaxed text-white/70 md:text-lg">
              If you&apos;re in need of great Motion Design, Art Direction,
              Character Animation or Cel Animation, don&apos;t hesitate to reach
              out.
            </p>
            <GradientButton className="mt-8">Book a free call</GradientButton>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-white/50" aria-hidden>
              ↓
            </span>
            <a
              href="mailto:web3yns@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-medium text-white transition-opacity hover:opacity-80 md:text-2xl lg:text-3xl"
            >
              web3yns@gmail.com
            </a>
          </div>
        </div>

        <ContactMediaPlaceholder />
      </div>
    </section>
  );
}
