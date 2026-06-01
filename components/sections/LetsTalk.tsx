import { GradientButton } from "@/components/ui/GradientButton";

/** Mid-page CTA — visible on desktop between projects and about */
export function LetsTalk() {
  return (
    <section className="hidden border-t border-white/5 px-5 py-20 text-center md:block md:px-8 lg:px-12">
      <div className="mx-auto max-w-2xl">
        <h2 className="mb-4 text-3xl font-bold text-white">Let&apos;s Talk</h2>
        <p className="mb-8 text-base leading-relaxed text-white/70">
          Got a project or idea that needs creative execution? I&apos;d love to
          elevate your brand and deliver value.
        </p>
        <GradientButton>Book a free call</GradientButton>
      </div>
    </section>
  );
}
