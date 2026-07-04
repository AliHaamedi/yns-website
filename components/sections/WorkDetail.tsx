import { ArrowDownIcon } from "@/components/ui/ArrowDownIcon";
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
          <ArrowDownIcon className="size-7 text-white mb-6" />
          <p className="max-w-5xl border-b border-white/20 pb-8 text-base leading-relaxed text-white/80 md:text-xl">
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
