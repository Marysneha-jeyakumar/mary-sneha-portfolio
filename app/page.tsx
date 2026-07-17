import AboutSection from "@/components/sections/AboutSection";
import HeroSection from "@/components/sections/HeroSection";
import WhatIBuildSection from "@/components/sections/WhatIBuildSection";

export default function Home() {
  return (
    <main className="hero-bg network-pattern min-h-screen overflow-hidden bg-[#0A0F1C] text-[#F8FAFC]">
      <HeroSection />
      <WhatIBuildSection />
      <AboutSection />
    </main>
  );
}