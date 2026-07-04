export type Work = {
  id: string;
  title: string;
  summary: string;
  description: string;
  thumbnail: string;
  xUrl?: string;
  /** Video or GIF for the project detail page */
  mediaSrc?: string;
};

export type ProjectRow = {
  id: string;
  columns: 2 | 3;
  itemIds: string[];
};

export const works: Work[] = [
  {
    id: "a-1",
    title: "Zero Friction",
    summary: "Crypto platform launch motion design with fast-paced editing.",
    description:
      "This project is a 30-second crypto promotional motion design created for a digital platform launch, focused on fast-paced editing, cinematic transitions, and a modern visual style.",
    thumbnail: "/thumbnails/A-1.jpg",
    xUrl: "https://x.com/ynsgh_",
  },
  {
    id: "a-2",
    title: "Breakpoint 2026",
    summary: "Event branding and motion graphics for a global Solana conference.",
    description:
      "Motion design and visual identity work for Breakpoint 2026 — built to capture energy, scale, and the forward momentum of the Solana ecosystem.",
    thumbnail: "/thumbnails/A-2.jpg",
    xUrl: "https://x.com/ynsgh_",
  },
  {
    id: "a-3",
    title: "Phoenix",
    summary: "Trading platform UI motion and product storytelling.",
    description:
      "A product-focused motion piece for Phoenix, highlighting interface flows, market dynamics, and a clean, high-contrast visual language.",
    thumbnail: "/thumbnails/A-3.jpg",
    xUrl: "https://x.com/ynsgh_",
  },
  {
    id: "b-1",
    title: "Dilovani",
    summary: "Brand film and motion system for a Solana-native product.",
    description:
      "End-to-end motion design for Dilovani — from launch film to social cutdowns, built to communicate trust, speed, and product clarity.",
    thumbnail: "/thumbnails/B-1.jpg",
    xUrl: "https://x.com/ynsgh_",
  },
  {
    id: "b-2",
    title: "Prediction Markets",
    summary: "Promotional motion for a sports prediction platform.",
    description:
      "A bold, editorial-style motion piece combining 3D elements and UI storytelling for a prediction market campaign.",
    thumbnail: "/thumbnails/B-2.jpg",
    xUrl: "https://x.com/ynsgh_",
  },
  {
    id: "c-1",
    title: "Yieldbay",
    summary: "DeFi aggregator brand motion and launch visuals.",
    description:
      "Visual storytelling for Yieldbay — distilling complex DeFi concepts into a clear, confident motion narrative for launch.",
    thumbnail: "/thumbnails/C-1.jpg",
    xUrl: "https://x.com/ynsgh_",
  },
  {
    id: "c-2",
    title: "Subscriptions on Solana",
    summary: "Product explainer with gradient-driven motion design.",
    description:
      "A sleek product motion piece explaining subscriptions and allowances on Solana, using luminous gradients and precise UI animation.",
    thumbnail: "/thumbnails/C-2.jpg",
    xUrl: "https://x.com/ynsgh_",
  },
  {
    id: "c-3",
    title: "Character Study",
    summary: "Stylized character animation and art direction.",
    description:
      "A character-driven motion study blending cel animation sensibilities with modern 3D lighting and surreal composition.",
    thumbnail: "/thumbnails/C-3.jpg",
    xUrl: "https://x.com/ynsgh_",
  },
  {
    id: "d-1",
    title: "Earn",
    summary: "On-chain earn product launch film.",
    description:
      "Launch motion for Earn — fast, transparent, on-chain. Built around bold typography, product UI, and a confident purple-led palette.",
    thumbnail: "/thumbnails/D-1.jpg",
    xUrl: "https://x.com/ynsgh_",
  },
  {
    id: "d-2",
    title: "DRiP",
    summary: "Brand motion for a creative distribution platform.",
    description:
      "Motion design for DRiP — capturing the platform's creative energy through gradient-rich visuals and dynamic logo treatments.",
    thumbnail: "/thumbnails/D-2.jpg",
    xUrl: "https://x.com/ynsgh_",
  },
];

export const projectRows: ProjectRow[] = [
  { id: "A", columns: 3, itemIds: ["a-1", "a-2", "a-3"] },
  { id: "B", columns: 2, itemIds: ["b-1", "b-2"] },
  { id: "C", columns: 3, itemIds: ["c-1", "c-2", "c-3"] },
  { id: "D", columns: 2, itemIds: ["d-1", "d-2"] },
];

export function getWorkById(id: string): Work | undefined {
  return works.find((work) => work.id === id);
}

export function getWorkRows() {
  return projectRows.map((row) => ({
    ...row,
    items: row.itemIds.map((id) => getWorkById(id)!),
  }));
}

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
