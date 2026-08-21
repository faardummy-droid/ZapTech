"use client";

import React from "react";
import { SectionHeader } from "../ui/SectionHeader";
import { AnimatedGradientText } from "../animation/AnimatedGradientText";
import { EcosystemDiagram } from "../diagrams/EcosystemDiagram";

export const SolutionsSection: React.FC = () => {
  return (
    <section id="solutions-legacy" className="py-24 relative bg-[#F0F7FB] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          index="03 — SOLUTION"
          title={
            <>
              An Intelligent Infrastructure Layer{" "}
              <AnimatedGradientText>Connecting Energy & People.</AnimatedGradientText>
            </>
          }
          description="ZapTech bridges drivers, hardware, and host business partners through an integrated software and edge hardware intelligence layer."
        />

        <EcosystemDiagram />
      </div>
    </section>
  );
};
