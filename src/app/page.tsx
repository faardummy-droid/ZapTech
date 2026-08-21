"use client";

import React from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ChallengeSection } from "@/components/sections/ChallengeSection";
import { SolutionSection } from "@/components/sections/SolutionSection";
import { TechnologySection } from "@/components/sections/TechnologySection";
import { ZapINPreviewSection } from "@/components/sections/ZapINPreviewSection";
import { ImpactSection } from "@/components/sections/ImpactSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { MilestonesSection } from "@/components/sections/MilestonesSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function CorporateHomepage() {
  return (
    <main className="min-h-screen bg-[#F0F7FB] selection:bg-[#076FB8]/20 selection:text-[#076FB8]">
      {/* Hero section is visible IMMEDIATELY on page load */}
      <HeroSection />
      <AboutSection />
      <ChallengeSection />
      <SolutionSection />
      <TechnologySection />
      <ZapINPreviewSection />
      <ImpactSection />
      <TeamSection />
      <MilestonesSection />
      <ContactSection />
    </main>
  );
}
