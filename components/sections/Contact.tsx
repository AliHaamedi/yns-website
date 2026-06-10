import { GradientButton } from "@/components/ui/GradientButton";

export function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 border-t border-white/5 px-5 py-16 md:px-8 md:py-24 lg:px-12"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="mb-5 text-2xl font-bold text-white md:text-4xl lg:text-5xl">
          Have a project in mind? Let&apos;s talk.
        </h2>
        <p className="mb-10 text-sm leading-relaxed text-white/70 md:text-base">
          Motion Design, Art Direction, Brand Films, Launch Videos, Social
          Content, and Visual Storytelling — let&apos;s shape something memorable
          together.
        </p>
        <GradientButton className="mb-12">Book a free call</GradientButton>

        <div
          className="relative mb-12 aspect-video w-full overflow-hidden rounded-2xl bg-[#1a1a1a]"
          role="img"
          aria-label="Showreel video placeholder"
        >
          <button
            type="button"
            className="absolute inset-0 flex items-center justify-center"
            aria-label="Play showreel"
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-sm">
              <svg
                className="ml-1 h-6 w-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </button>
        </div>

        <div className="flex flex-col items-center gap-2">
          <span className="text-white/50" aria-hidden>
            ↓
          </span>
          <a
            href="mailto:web3yns@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl font-medium text-white transition-opacity hover:opacity-80 md:text-3xl"
          >
            web3yns@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
