import { WorkCard } from "@/components/ui/WorkCard";
import { works } from "@/lib/works";

export function WorksIndex() {
  return (
    <section className="px-5 pt-28 pb-16 md:px-8 md:pt-32 md:pb-24 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col items-center gap-2 text-center md:mb-14">
          <span className="text-white/50" aria-hidden>
            ↓
          </span>
          <p className="max-w-xs text-sm text-white/70 md:max-w-none md:text-base">
            Join me for a quick tour of my best projects
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 md:grid-cols-3 md:gap-y-12">
          {works.map((work, index) => (
            <WorkCard
              key={work.id}
              work={work}
              showMeta
              priority={index < 3}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
