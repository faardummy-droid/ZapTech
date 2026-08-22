"use client";

import React from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ChallengeSection } from "@/components/sections/ChallengeSection";
import { InfrastructureGapSection } from "@/components/sections/InfrastructureGapSection";
import { SolutionSection } from "@/components/sections/SolutionSection";
import { FeaturedProductSection } from "@/components/sections/FeaturedProductSection";
import { ImpactSection } from "@/components/sections/ImpactSection";
import { GrowthMapSection } from "@/components/sections/GrowthMapSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function ZapInHomepage() {
  return (
    <main className="min-h-screen bg-[#F0F7FB] selection:bg-[#076FB8]/20 selection:text-[#076FB8]">
      {/* 1. Hero: ZapIn — Powering Your Journey, Smarter! */}
      <HeroSection />

      {/* 2. 01 — About: Building the Infrastructure Behind a Smarter Energy Future */}
      <AboutSection />

      {/* 3. 02 — Challenge: EV Driver & Commercial Host Perspectives */}
      <ChallengeSection />

      {/* 4. The Infrastructure Gap: Standalone Editorial Bridge */}
      <InfrastructureGapSection />

      {/* 5. 03 — Solution: From Uncertainty to Intelligent Movement (4-Pillar Reference Grid) */}
      <SolutionSection />

      {/* 6. 04 — Featured Product: ZapIn (3 Core Advantages + Center Phone Mockup) */}
      <FeaturedProductSection />

      {/* 7. 05 — Impact: Auto-Rotating Images & Synchronized KPIs */}
      <ImpactSection />

      {/* 8. 06 — Growth Map: Vertical Animated Timeline (Build, Validate, Connect, Scale) */}
      <GrowthMapSection />

      {/* 9. 07 — Team: Leadership & Engineering Team */}
      <TeamSection />

      {/* 10. 08 — Contact: Commercial Host & Partner Inquiry */}
      <ContactSection />
    </main>
  );
}
