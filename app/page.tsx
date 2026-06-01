import { Footer } from "@/components/layout/Footer";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { LetsTalk } from "@/components/sections/LetsTalk";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid";
import { TrustedBy } from "@/components/sections/TrustedBy";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustedBy />
      <ProjectsGrid />
      <LetsTalk />
      <Contact />
      <Footer />
    </main>
  );
}
