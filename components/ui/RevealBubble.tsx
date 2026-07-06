"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealBubbleProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function RevealBubble({
  children,
  className = "",
  delay = 0,
}: RevealBubbleProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -6% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`will-change-transform ${
        visible
          ? "animate-bubble-in scale-100 opacity-100 motion-reduce:animate-none"
          : "scale-[0.68] opacity-0"
      } ${className}`}
      style={{ animationDelay: visible ? `${delay}ms` : undefined }}
    >
      {children}
    </div>
  );
}
