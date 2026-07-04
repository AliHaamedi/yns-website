type WorkMediaPlaceholderProps = {
  src?: string;
  poster?: string;
  title: string;
};

export function WorkMediaPlaceholder({
  src,
  poster,
  title,
}: WorkMediaPlaceholderProps) {
  return (
    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-[#141414] md:aspect-[2/1]">
      {src ? (
        src.endsWith(".mp4") || src.endsWith(".webm") ? (
          <video
            className="h-full w-full object-cover"
            src={src}
            poster={poster}
            controls
            playsInline
          />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={src}
            alt={title}
            className="h-full w-full object-cover"
          />
        )
      ) : (
        <div className="flex h-full items-center justify-center gap-8">
          <button
            type="button"
            className="flex h-20 w-20 items-center justify-center rounded-full bg-[#1a1a1a]"
            aria-label={`Play ${title}`}
            disabled
          >
            <svg
              className="ml-1 h-8 w-8 text-white/80"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
