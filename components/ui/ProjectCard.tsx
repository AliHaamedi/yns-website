import Image from "next/image";
import type { ProjectThumbnail } from "@/lib/projects";

type ProjectCardProps = {
  project: ProjectThumbnail;
  className?: string;
  priority?: boolean;
};

export function ProjectCard({
  project,
  className = "",
  priority = false,
}: ProjectCardProps) {
  return (
    <article
      className={`group relative aspect-[16/10] overflow-hidden rounded-2xl bg-[#141414] ${className}`}
    >
      <Image
        src={project.src}
        alt={project.alt}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority={priority}
      />
      <div
        className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10"
        aria-hidden
      />
    </article>
  );
}
