import { AboutSection } from "../components/about/AboutSection";
import { HeroSection } from "../components/hero/HeroSection";
import { Navbar } from "../components/navigation/Navbar";
import { ProjectSection } from "../components/projects/ProjectSection";

export default function Home() {
  return (
    <main>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <ProjectSection></ProjectSection>
      <AboutSection></AboutSection>
    </main>
  );
}