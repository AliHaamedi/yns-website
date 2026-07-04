import { WorkCard } from "@/components/ui/WorkCard";
import { works } from "@/lib/works";

export function WorksIndex() {
  return (
    <section className="px-5 pt-28 pb-16 md:px-8 md:pt-32 md:pb-24 lg:px-12">
      <div className="mx-auto max-w-7xl">
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
