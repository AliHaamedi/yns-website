import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid";
import { TrustedBy } from "@/components/sections/TrustedBy";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustedBy />
      <ProjectsGrid />
      <Footer />
    </main>
  );
}
