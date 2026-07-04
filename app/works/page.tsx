import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { WorksIndex } from "@/components/sections/WorksIndex";

export const metadata: Metadata = {
  title: "Work — YNS",
  description: "Selected motion design and brand projects for Solana and beyond.",
};

export default function WorksPage() {
  return (
    <main>
      <WorksIndex />
      <Footer />
    </main>
  );
}
