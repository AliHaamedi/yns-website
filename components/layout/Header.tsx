import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { contactLink, navLinks } from "@/lib/navigation";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-white/5 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-8 lg:px-12">
        <Logo className="text-white" />

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/90 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={contactLink.href}
            className="rounded-full bg-white px-5 py-2 text-sm font-medium text-black transition-opacity hover:opacity-90"
          >
            {contactLink.label}
          </Link>
        </nav>

        <MobileMenu />
      </div>
    </header>
  );
}
