import Image from "next/image";
import Link from "next/link";
import { withBasePath } from "@/lib/base-path";
import type { Work } from "@/lib/works";

type WorkCardProps = {
  work: Work;
  priority?: boolean;
  showMeta?: boolean;
  className?: string;
};

export function WorkCard({
  work,
  priority = false,
  showMeta = false,
  className = "",
}: WorkCardProps) {
  const showHoverMeta = !showMeta;

  return (
    <Link
      href={`/works/${work.id}`}
      className={`group block ${className}`}
    >
      <article className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-[#141414]">
        <Image
          src={withBasePath(work.thumbnail)}
          alt={work.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={priority}
        />
        <div
          className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20"
          aria-hidden
        />

        {showHoverMeta && (
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-2 opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100"
            aria-hidden
          >
            <div className="bg-gradient-to-t from-black/85 via-black/50 to-transparent px-5 pt-16 pb-5 md:px-6 md:pb-6">
              <p className="truncate text-xl font-bold text-white md:text-2xl">
                {work.title}
              </p>
              <p className="mt-1 truncate text-sm text-white/75 md:text-base">
                {work.summary}
              </p>
            </div>
          </div>
        )}
      </article>

      {showMeta && (
        <div className="mt-4">
          <h2 className="text-lg font-bold text-white md:text-xl">{work.title}</h2>
          <p className="mt-1 text-sm leading-relaxed text-white/60 md:text-base">
            {work.summary}
          </p>
        </div>
      )}
    </Link>
  );
}
