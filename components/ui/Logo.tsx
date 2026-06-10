import Link from "next/link";
import { YnsLogoMark } from "./YnsLogoMark";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="YNS home"
      className={`inline-flex items-center text-white ${className}`}
    >
      <YnsLogoMark className="h-9 w-auto" />
    </Link>
  );
}
