import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { About } from "@/components/sections/About";

export const metadata: Metadata = {
  title: "About — YNS",
  description:
    "Freelance motion and graphic designer for Solana brands and beyond.",
};

export default function AboutPage() {
  return (
    <main>
      <About />
      <Footer />
    </main>
  );
}
