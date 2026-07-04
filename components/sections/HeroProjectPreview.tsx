import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/lib/projects";

const previewIds = ["zero-friction", "conta-48", "billboard-hall", "c-logo"];

export function HeroProjectPreview() {
  const previewProjects = projects.filter((p) => previewIds.includes(p.id));

  return (
    <div className="mt-12 flex flex-col gap-3 md:hidden">
      {previewProjects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
