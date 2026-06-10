import { TrustedByMarquee } from "@/components/ui/TrustedByMarquee";

export function TrustedByLogos({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <p className="mb-6 text-center text-xs tracking-widest text-white/50 uppercase md:mb-8">
        Trusted by
      </p>
      <TrustedByMarquee />
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
