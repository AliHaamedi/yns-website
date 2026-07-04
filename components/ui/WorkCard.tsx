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
          className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10"
          aria-hidden
        />
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
