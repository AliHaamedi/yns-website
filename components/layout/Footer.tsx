import { GradientButton } from "@/components/ui/GradientButton";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { socialLinks } from "@/lib/projects";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-5 py-16 md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center md:mb-16">
          <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl">
            Let&apos;s Talk
          </h2>
          <p className="mx-auto mb-8 max-w-lg text-sm leading-relaxed text-white/70 md:text-base">
            Got a project or idea that needs creative execution? I&apos;d love to
            elevate your brand and deliver value.
          </p>
          <GradientButton>Book a free call</GradientButton>
        </div>

        <div className="mb-10 flex flex-wrap justify-center gap-8 md:gap-12">
          {socialLinks.map((social) => (
            <a
              key={social.id}
              href={social.href}
              className="flex flex-col items-center gap-2 text-white/80 transition-colors hover:text-white"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30">
                <SocialIcon id={social.id} />
              </span>
              <span className="text-xs text-white/60">{social.label}</span>
            </a>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-xs text-white/50">© 2026 YNS</p>
        </div>
      </div>
    </footer>
  );
}
