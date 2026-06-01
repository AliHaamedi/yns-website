import Link from "next/link";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="YNS home"
      className={`flex h-9 w-9 items-center justify-center ${className}`}
    >
      <svg
        viewBox="0 0 32 32"
        fill="none"
        className="h-8 w-8"
        aria-hidden
      >
        <path
          d="M8 6L16 26L24 6"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="16" cy="8" r="2" fill="currentColor" />
      </svg>
    </Link>
  );
}
