"use client";

import React from "react";
import { RevealSection } from "../animation/RevealSection";
import { AnimatedGradientText } from "../animation/AnimatedGradientText";

export const InfrastructureGapSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#F0F7FB] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <RevealSection>
          <div className="space-y-6">
            <div className="inline-block">
              <span className="font-mono text-xs sm:text-sm font-extrabold tracking-widest uppercase text-[#076FB8]">
                THE INFRASTRUCTURE GAP
              </span>
              <div className="h-0.5 w-16 bg-gradient-to-r from-[#076FB8] to-[#EE7797] mx-auto mt-2 rounded-full" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#043E69] leading-tight tracking-tight max-w-4xl mx-auto">
              When driver demand and host capacity are disconnected,{" "}
              <AnimatedGradientText>everyone loses time.</AnimatedGradientText>
            </h2>

            <p className="text-base sm:text-xl text-[#043E69]/75 leading-relaxed max-w-2xl mx-auto font-normal">
              ZapIn bridges this divide through real-time intelligence, en-route spot reservations, and connected charging journeys.
            </p>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};
