import { WorkCard } from "@/components/ui/WorkCard";
import { getWorkRows } from "@/lib/works";

const columnClass: Record<2 | 3, string> = {
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3",
};

export function ProjectsGrid() {
  const rows = getWorkRows();

  return (
    <section
      id="work"
      className="scroll-mt-20 px-5 py-12 md:px-8 md:py-20 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col items-center gap-2 text-center md:mb-14">
          <span className="text-white/50" aria-hidden>
            ↓
          </span>
          <p className="max-w-xs text-sm text-white/70 md:max-w-none md:text-base">
            Join me for a quick tour of my best projects
          </p>
        </div>

        <div className="flex flex-col gap-4 md:gap-5">
          {rows.map((row) => (
            <div
              key={row.id}
              className={`grid gap-4 md:gap-5 ${columnClass[row.columns]}`}
            >
              {row.items.map((work, index) => (
                <WorkCard
                  key={work.id}
                  work={work}
                  priority={row.id === "A" && index === 0}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
