import Link from "next/link";

type GradientButtonProps = {
  href?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

const buttonClass =
  "inline-flex items-center justify-center rounded-full border border-white bg-transparent px-6 py-3 text-sm font-medium text-white/60 transition-all duration-300 ease-in-out hover:border-white hover:bg-white hover:text-black md:px-8 md:py-3.5 md:text-base";

export function GradientButton({
  href = "/contact-us",
  children,
  className = "",
  onClick,
}: GradientButtonProps) {
  const classNames = `${buttonClass} ${className}`;

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
        className={classNames}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} onClick={onClick} className={classNames}>
      {children}
    </Link>
  );
}
