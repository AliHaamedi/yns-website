export type ProjectTile = {
  id: string;
  label?: string;
  background: string;
  textColor?: string;
  /** Tailwind classes for desktop grid placement */
  desktopClass: string;
  /** Min height for the tile */
  minHeight?: string;
};

export const projects: ProjectTile[] = [
  {
    id: "zero-friction",
    label: "ZERO FRICTION FULL CONTROL",
    background: "bg-[#6B3FA0]",
    textColor: "text-white",
    desktopClass: "md:col-span-4 md:row-span-2",
    minHeight: "min-h-[220px] md:min-h-[280px]",
  },
  {
    id: "billboard-hall",
    background: "bg-[#2a2a32]",
    desktopClass: "md:col-span-8 md:row-span-2",
    minHeight: "min-h-[200px] md:min-h-[280px]",
  },
  {
    id: "kiosk-night",
    background: "bg-[#1a1a24]",
    desktopClass: "md:col-span-4 md:row-span-2",
    minHeight: "min-h-[220px] md:min-h-[280px]",
  },
  {
    id: "dilovani",
    label: "Dilovani",
    background: "bg-[#1c1814]",
    textColor: "text-white/90",
    desktopClass: "md:col-span-8 md:row-span-2",
    minHeight: "min-h-[200px] md:min-h-[260px]",
  },
  {
    id: "conta-48",
    label: "conta 48",
    background: "bg-[#B8F55A]",
    textColor: "text-black",
    desktopClass: "md:col-span-4 md:row-span-2",
    minHeight: "min-h-[180px] md:min-h-[260px]",
  },
  {
    id: "c-logo",
    label: "C",
    background: "bg-[#0d0d0d]",
    textColor: "text-white text-6xl font-bold",
    desktopClass: "md:col-span-4 md:row-span-2",
    minHeight: "min-h-[180px] md:min-h-[240px]",
  },
  {
    id: "latitud",
    label: "Latitud",
    background: "bg-[#121218]",
    textColor: "text-white/80",
    desktopClass: "md:col-span-4 md:row-span-2",
    minHeight: "min-h-[180px] md:min-h-[240px]",
  },
  {
    id: "dr-naaeini",
    label: "Dr. Naaeini",
    background: "bg-[#1a2438]",
    textColor: "text-white",
    desktopClass: "md:col-span-4 md:row-span-2",
    minHeight: "min-h-[200px] md:min-h-[240px]",
  },
  {
    id: "gestures",
    background: "bg-[#A8E6CF]",
    desktopClass: "md:col-span-8 md:row-span-2",
    minHeight: "min-h-[160px] md:min-h-[220px]",
  },
  {
    id: "groowfi",
    label: "groowfi",
    background: "bg-[#4a4f56]",
    textColor: "text-white",
    desktopClass: "md:col-span-4 md:row-span-2",
    minHeight: "min-h-[160px] md:min-h-[220px]",
  },
];

export const socialLinks = [
  { id: "x", label: "X", href: "https://x.com/ynsgh_" },
  { id: "telegram", label: "Telegram", href: "https://t.me/gh_yns" },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/younes-ghazanfar/",
  },
  { id: "email", label: "Email", href: "mailto:web3yns@gmail.com" },
];
