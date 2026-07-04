import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Contact } from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Contact — YNS",
  description:
    "Get in touch for Motion Design, Art Direction, Character Animation, and Cel Animation.",
};

export default function ContactPage() {
  return (
    <main>
      <Contact />
      <Footer />
    </main>
  );
}
