import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/layout/Header";

const franklinGothic = localFont({
  src: "../assets/fonts/Franklin Gothic Heavy Regular.ttf",
  variable: "--font-franklin-gothic",
  weight: "900",
  display: "swap",
});

export const metadata: Metadata = {
  title: "YNS — Motion Design for Solana Brands",
  description:
    "Motion design rooted in the Solana ecosystem, built for brands with something to say.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${franklinGothic.variable} ${franklinGothic.className} h-full antialiased`}
    >
      <body className="min-h-full overflow-x-hidden bg-black text-white">
        <Header />
        {children}
      </body>
    </html>
  );
}
