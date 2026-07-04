export type ProjectThumbnail = {
  id: string;
  src: string;
  alt: string;
};

export type ProjectRow = {
  id: string;
  columns: 2 | 3;
  items: ProjectThumbnail[];
};

export const projectRows: ProjectRow[] = [
  {
    id: "A",
    columns: 3,
    items: [
      { id: "a-1", src: "/thumbnails/A-1.jpg", alt: "Project showcase A1" },
      { id: "a-2", src: "/thumbnails/A-2.jpg", alt: "Project showcase A2" },
      { id: "a-3", src: "/thumbnails/A-3.jpg", alt: "Project showcase A3" },
    ],
  },
  {
    id: "B",
    columns: 2,
    items: [
      { id: "b-1", src: "/thumbnails/B-1.jpg", alt: "Project showcase B1" },
      { id: "b-2", src: "/thumbnails/B-2.jpg", alt: "Project showcase B2" },
    ],
  },
  {
    id: "C",
    columns: 3,
    items: [
      { id: "c-1", src: "/thumbnails/C-1.jpg", alt: "Project showcase C1" },
      { id: "c-2", src: "/thumbnails/C-2.jpg", alt: "Project showcase C2" },
      { id: "c-3", src: "/thumbnails/C-3.jpg", alt: "Project showcase C3" },
    ],
  },
  {
    id: "D",
    columns: 2,
    items: [
      { id: "d-1", src: "/thumbnails/D-1.jpg", alt: "Project showcase D1" },
      { id: "d-2", src: "/thumbnails/D-2.jpg", alt: "Project showcase D2" },
    ],
  },
];

export const allProjectThumbnails = projectRows.flatMap((row) => row.items);

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
