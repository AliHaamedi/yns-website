import { ArrowDownIcon } from "@/components/ui/ArrowDownIcon";
import { RevealBubble } from "@/components/ui/RevealBubble";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { WorkCard } from "@/components/ui/WorkCard";
import { getWorkRows } from "@/lib/works";

const columnClass: Record<2 | 3, string> = {
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3",
};

export function ProjectsGrid() {
  const rows = getWorkRows();
  let cardIndex = 0;

  return (
    <section
      id="work"
      className="scroll-mt-20 px-5 py-12 md:px-8 md:py-20 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <RevealOnScroll className="mb-10 flex flex-col items-start gap-2 text-center md:mb-14">
          <ArrowDownIcon className="size-7 text-white" />
          <p className="max-w-xs text-lg text-left text-white md:max-w-none md:text-2xl">
            Join me for a quick tour of my best projects
          </p>
        </RevealOnScroll>

        <div className="flex flex-col gap-4 md:gap-5">
          {rows.map((row) => (
            <div
              key={row.id}
              className={`grid gap-4 md:gap-5 ${columnClass[row.columns]}`}
            >
              {row.items.map((work, index) => {
                const delay = cardIndex * 90;
                cardIndex += 1;

                return (
                  <RevealBubble key={work.id} delay={delay}>
                    <WorkCard
                      work={work}
                      priority={row.id === "A" && index === 0}
                    />
                  </RevealBubble>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
