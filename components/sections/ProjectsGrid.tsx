import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/lib/projects";

export function ProjectsGrid() {
  return (
    <section
      id="work"
      className="scroll-mt-20 px-5 py-12 md:px-8 md:py-20 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 hidden flex-col items-center gap-2 text-center md:mb-14 md:flex">
          <span className="text-white/50" aria-hidden>
            ↓
          </span>
          <p className="text-base text-white/70">
            Join me for a quick tour of my best projects
          </p>
        </div>

        {/* Mobile: remaining projects (preview shown in hero) */}
        <div className="flex flex-col gap-4 md:hidden">
          {projects
            .filter(
              (p) =>
                ![
                  "zero-friction",
                  "conta-48",
                  "billboard-hall",
                  "c-logo",
                ].includes(p.id),
            )
            .map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
        </div>

        {/* Desktop: masonry-style grid */}
        <div className="hidden auto-rows-[minmax(120px,auto)] grid-cols-12 gap-4 md:grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              className={project.desktopClass}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
