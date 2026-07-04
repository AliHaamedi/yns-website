import { GradientButton } from "@/components/ui/GradientButton";
import { WorkMediaPlaceholder } from "@/components/ui/WorkMediaPlaceholder";
import type { Work } from "@/lib/works";

type WorkDetailProps = {
  work: Work;
};

export function WorkDetail({ work }: WorkDetailProps) {
  return (
    <section className="px-5 pt-28 pb-16 md:px-8 md:pt-32 md:pb-24 lg:px-12">
      <div className="mx-auto max-w-5xl">
        <WorkMediaPlaceholder
          src={work.mediaSrc}
          title={work.title}
        />

        <div className="mt-10 md:mt-12">
          <span className="mb-4 block text-white/50" aria-hidden>
            ↓
          </span>
          <p className="max-w-3xl border-b border-white/20 pb-8 text-base leading-relaxed text-white/80 md:text-lg">
            {work.description}
          </p>

          {work.xUrl && (
            <GradientButton href={work.xUrl} className="mt-8">
              Check in on X
            </GradientButton>
          )}
        </div>
      </div>
    </section>
  );
}
