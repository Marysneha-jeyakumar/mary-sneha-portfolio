import Navbar from "@/components/layout/Navbar";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import HeroSection from "@/components/sections/HeroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import WhatIBuildSection from "@/components/sections/WhatIBuildSection";
import { Reveal } from "@/components/ui";

function Divider() {
  return <div className="section-container section-divider" />;
}

export default function Home() {
  return (
    <main className="hero-bg network-pattern min-h-screen overflow-hidden bg-[#0A0F1C] text-[#F8FAFC]">
      <Navbar />

      <Reveal y={16} duration={0.8}>
        <HeroSection />
      </Reveal>

      <Divider />

      <Reveal>
        <WhatIBuildSection />
      </Reveal>

      <Divider />

      <Reveal>
        <AboutSection />
      </Reveal>

      <Divider />

      <Reveal>
        <SkillsSection />
      </Reveal>

      <Divider />

      <Reveal>
        <ProjectsSection />
      </Reveal>

      <Divider />

      <Reveal>
        <ContactSection />
      </Reveal>
    </main>
  );
}