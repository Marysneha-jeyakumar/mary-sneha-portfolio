import AboutSection from "@/components/sections/AboutSection";
import HeroSection from "@/components/sections/HeroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import WhatIBuildSection from "@/components/sections/WhatIBuildSection";

export default function Home() {
  return (
    <main className="hero-bg network-pattern min-h-screen overflow-hidden bg-[#0A0F1C] text-[#F8FAFC]">
      <HeroSection />
      <WhatIBuildSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
    </main>
  );
}