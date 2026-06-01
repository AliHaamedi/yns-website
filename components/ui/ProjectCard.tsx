import type { ProjectTile } from "@/lib/projects";

type ProjectCardProps = {
  project: ProjectTile;
  className?: string;
};

export function ProjectCard({ project, className = "" }: ProjectCardProps) {
  return (
    <article
      className={`group relative overflow-hidden rounded-2xl ${project.background} ${project.minHeight ?? "min-h-[200px]"} ${className}`}
    >
      {project.id === "gestures" && (
        <div className="flex h-full items-center justify-center gap-6 p-8">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="h-14 w-14 rounded-full border-2 border-[#7c3aed]"
            />
          ))}
        </div>
      )}
      {project.id === "c-logo" && (
        <div className="flex h-full items-center justify-center">
          <span
            className={`${project.textColor ?? "text-white"} drop-shadow-[0_0_24px_rgba(132,204,22,0.4)]`}
          >
            C
          </span>
        </div>
      )}
      {project.label &&
        project.id !== "c-logo" &&
        project.id !== "gestures" && (
          <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-6">
            <p
              className={`text-sm font-semibold tracking-wide uppercase md:text-base ${project.textColor ?? "text-white"}`}
            >
              {project.label}
            </p>
          </div>
        )}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
        aria-hidden
      />
    </article>
  );
}
