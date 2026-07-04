import { YnsLogoMark } from "@/components/ui/YnsLogoMark";

type ContactMediaPlaceholderProps = {
  /** Set when a showreel GIF or video asset is ready */
  src?: string;
  poster?: string;
  className?: string;
};

export function ContactMediaPlaceholder({
  src,
  poster,
  className = "aspect-square w-full",
}: ContactMediaPlaceholderProps) {
  return (
    <div
      className={`relative overflow-hidden bg-[#141414] ${className}`}
    >
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
            alt="Showreel preview"
            className="h-full w-full object-cover"
          />
        )
      ) : (
        <div className="flex h-full flex-col items-center justify-center gap-6">
          <button
            type="button"
            className="flex h-20 w-20 items-center justify-center rounded-full bg-[#1a1a1a]"
            aria-label="Play showreel"
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
