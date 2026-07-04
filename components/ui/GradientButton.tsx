import Link from "next/link";

type GradientButtonProps = {
  href?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export function GradientButton({
  href = "/contact-us",
  children,
  className = "",
  onClick,
}: GradientButtonProps) {
  const wrapperClass = `inline-block rounded-full bg-[image:var(--gradient-cta)] p-[1px] ${className}`;
  const inner = (
    <span className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90 md:px-8 md:py-3.5 md:text-base">
      {children}
    </span>
  );

  const isExternal =
    href.startsWith("http") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:");

  if (isExternal) {
    return (
      <a
        href={href}
        onClick={onClick}
        target="_blank"
        rel="noopener noreferrer"
        className={wrapperClass}
      >
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} onClick={onClick} className={wrapperClass}>
      {inner}
    </Link>
  );
}
