import { HeroSection } from "../components/hero/HeroSection";
import { Footer } from "../components/navigation/Footer";
import { Navbar } from "../components/navigation/Navbar";
import { ProjectSection } from "../components/projects/ProjectSection";
import { CtaBanner } from "../components/global/CtaBanner";

export default function Home() {
  return (
    <main>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <ProjectSection></ProjectSection>
      <CtaBanner></CtaBanner>
      <Footer></Footer>
    </main>
  );
}
