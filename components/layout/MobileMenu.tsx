"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { GradientButton } from "@/components/ui/GradientButton";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
      >
        <span
          className={`block h-0.5 w-6 bg-white transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
        />
        <span
          className={`block h-0.5 w-6 bg-white transition-opacity ${open ? "opacity-0" : ""}`}
        />
        <span
          className={`block h-0.5 w-6 bg-white transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
        />
      </button>

      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/95 backdrop-blur-sm md:hidden"
          role="dialog"
          aria-modal="true"
        >
          <nav className="flex h-full flex-col items-center justify-center gap-10 px-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-2xl font-medium text-white"
              >
                {link.label}
              </Link>
            ))}
            <GradientButton href="/#contact" onClick={() => setOpen(false)}>
              Book a free call
            </GradientButton>
          </nav>
        </div>
      )}
    </>
  );
}
