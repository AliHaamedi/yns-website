"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { GradientButton } from "@/components/ui/GradientButton";
import { contactLink, navLinks } from "@/lib/navigation";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  const overlay =
    open &&
    createPortal(
      <div
        className="mobile-menu-overlay fixed inset-0 z-[49] flex flex-col md:hidden"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <button
          type="button"
          aria-label="Close menu"
          className="absolute inset-0"
          onClick={close}
        />

        <nav className="relative z-10 flex flex-1 flex-col items-center justify-center gap-8 px-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={close}
              className="text-2xl font-medium text-white transition-colors hover:text-white/80"
            >
              {link.label}
            </Link>
          ))}

          <Link
            href={contactLink.href}
            onClick={close}
            className="rounded-full bg-white px-6 py-2.5 text-base font-medium text-black transition-opacity hover:opacity-90"
          >
            {contactLink.label}
          </Link>

          <div className="mt-4 border-t border-white/10 pt-8">
            <GradientButton href="/contact-us" onClick={close}>
              Book a free call
            </GradientButton>
          </div>
        </nav>
      </div>,
      document.body,
    );

  return (
    <>
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className="relative z-[60] flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
      >
        <span
          className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${open ? "translate-y-2 rotate-45" : ""}`}
        />
        <span
          className={`block h-0.5 w-6 bg-white transition-opacity duration-300 ${open ? "opacity-0" : ""}`}
        />
        <span
          className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${open ? "-translate-y-2 -rotate-45" : ""}`}
        />
      </button>

      {mounted && overlay}
    </>
  );
}
