import { WorkCard } from "@/components/ui/WorkCard";
import { getWorkRows } from "@/lib/works";

export function HeroProjectPreview() {
  const previewItems = getWorkRows()[0].items;

  return (
    <div className="mt-12 flex flex-col gap-3 md:hidden">
      {previewItems.map((work, index) => (
        <WorkCard key={work.id} work={work} priority={index === 0} />
      ))}
    </div>
  );
}
