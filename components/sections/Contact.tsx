import { ArrowDownIcon } from "@/components/ui/ArrowDownIcon";
import { ContactMediaPlaceholder } from "@/components/ui/ContactMediaPlaceholder";
import { GradientButton } from "@/components/ui/GradientButton";

export function Contact() {
  return (
    <section className="border-t border-white/10 px-5 pt-28 pb-16 md:px-8 md:pt-32 md:pb-24 lg:px-12">
      <div className="relative mx-auto max-w-7xl">
        <div
          className="pointer-events-none absolute top-0 left-0 h-[500px] w-[600px] rounded-full bg-teal-500/10 blur-[120px]"
          aria-hidden
        />

        <div className="relative grid gap-12 md:grid-cols-[1.15fr_0.85fr] md:items-start md:gap-16 lg:gap-20">
          <div className="flex flex-col gap-10 md:gap-12">
            <h1 className="text-[clamp(3rem,10vw,4rem)] leading-[1.04] tracking-normal text-white">
              Have a project in mind? Let&apos;s talk.
            </h1>

            <p className="max-w-3xl font-duplet text-[clamp(1.25rem,2.5vw,2rem)] leading-[1.1] text-white">
              If you&apos;re in need of great Motion Design, Art Direction,
              Character Animation or Cel Animation, don&apos;t hesitate to reach
              out.
            </p>

            <div>
              <GradientButton>Book a free call</GradientButton>
            </div>

            <div className="flex flex-col gap-4">
              <ArrowDownIcon className="size-7 text-white" />
              <a
                href="mailto:web3yns@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-duplet text-[clamp(1.25rem,2.5vw,2rem)] leading-[1.1] text-white transition-opacity hover:opacity-80"
              >
                web3yns@gmail.com
              </a>
            </div>
          </div>

          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden md:mx-0 md:max-w-none">
            <ContactMediaPlaceholder className="h-full w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
