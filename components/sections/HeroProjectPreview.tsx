import { ProjectCard } from "@/components/ui/ProjectCard";
import { projectRows } from "@/lib/projects";

export function HeroProjectPreview() {
  const previewItems = projectRows[0].items;

  return (
    <div className="mt-12 flex flex-col gap-3 md:hidden">
      {previewItems.map((project, index) => (
        <ProjectCard key={project.id} project={project} priority={index === 0} />
      ))}
    </div>
  );
}
