"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeader } from "../ui/SectionHeader";
import { AnimatedGradientText } from "../animation/AnimatedGradientText";
import { RevealSection } from "../animation/RevealSection";
import { IMAGERY } from "@/data/imagery";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-28 bg-gradient-to-b from-[#F0F7FB] via-white to-[#F0F7FB] relative overflow-hidden">
      {/* Subtle Ambient Background Gradients */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-[#076FB8]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#FEC958]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Section Title */}
        <SectionHeader
          index="01"
          badge="ABOUT"
          title={
            <>
              Building the Infrastructure Behind a{" "}
              <AnimatedGradientText>Smarter Energy Future.</AnimatedGradientText>
            </>
          }
        />

        {/* Asymmetric Editorial Layout: Narrative Text on Left, Circular Photo with Outer Orbital System on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Asymmetric Editorial Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <RevealSection delay={0.1}>
              <p className="text-xl sm:text-2xl text-[#043E69] font-medium leading-relaxed">
                ZapIn is designed to transform how electric vehicles interact with charging networks, business hosts, and local power grids across Indonesia.
              </p>
            </RevealSection>

            <RevealSection delay={0.2}>
              <div className="space-y-4 text-sm sm:text-base text-[#043E69]/80 leading-relaxed font-normal">
                <p>
                  ZapIn bridges real-time hardware telemetry with predictive intelligence. Rather than leaving drivers to navigate fragmented charging points and uncertain queues, our platform coordinates movement and capacity in advance.
                </p>
                <p>
                  By partnering with commercial hosts through a zero-capital framework, ZapIn expands accessible charging points at high-frequency destinations—turning every charging stop into a predictable, seamless segment of the journey.
                </p>
              </div>
            </RevealSection>

            {/* Editorial Highlights Row */}
            <RevealSection delay={0.3}>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-6 border-t border-[#076FB8]/15">
                <div>
                  <div className="text-xs font-mono font-bold text-[#076FB8] uppercase tracking-wider">
                    Infrastructure
                  </div>
                  <div className="text-base sm:text-lg font-extrabold text-[#043E69] mt-1">
                    Edge IoT Sync
                  </div>
                </div>

                <div>
                  <div className="text-xs font-mono font-bold text-[#EE7797] uppercase tracking-wider">
                    Intelligence
                  </div>
                  <div className="text-base sm:text-lg font-extrabold text-[#043E69] mt-1">
                    Predictive AI
                  </div>
                </div>

                <div>
                  <div className="text-xs font-mono font-bold text-[#FEC958] uppercase tracking-wider">
                    Ecosystem
                  </div>
                  <div className="text-base sm:text-lg font-extrabold text-[#043E69] mt-1">
                    Zero-CapEx Host
                  </div>
                </div>
              </div>
            </RevealSection>
          </div>

          {/* Right Column: Prominent Circular Photograph with Animated Outer Energy Ring System */}
          <div className="lg:col-span-5 flex justify-center items-center relative py-6">
            <RevealSection direction="right" className="relative flex items-center justify-center">
              
              {/* Outer Energy Orbital SVG Ring System */}
              <div className="absolute -inset-10 sm:-inset-14 flex items-center justify-center pointer-events-none">
                
                {/* Orbital Ring 1: Clockwise Dashed Energy Stream */}
                <motion.svg
                  className="absolute w-full h-full animate-orbit-rotate"
                  viewBox="0 0 400 400"
                  fill="none"
                >
                  <circle
                    cx="200"
                    cy="200"
                    r="185"
                    stroke="#076FB8"
                    strokeWidth="1.5"
                    strokeDasharray="12 18"
                    strokeOpacity="0.35"
                  />
                  <circle cx="200" cy="15" r="4" fill="#076FB8" />
                  <circle cx="200" cy="385" r="3" fill="#EE7797" />
                </motion.svg>

                {/* Orbital Ring 2: Counter-Clockwise Subtle Line */}
                <motion.svg
                  className="absolute w-[92%] h-[92%] animate-orbit-reverse"
                  viewBox="0 0 360 360"
                  fill="none"
                >
                  <circle
                    cx="180"
                    cy="180"
                    r="165"
                    stroke="#FEC958"
                    strokeWidth="1"
                    strokeDasharray="6 24"
                    strokeOpacity="0.45"
                  />
                  <circle cx="180" cy="15" r="3.5" fill="#FEC958" />
                  <circle cx="345" cy="180" r="2.5" fill="#076FB8" />
                </motion.svg>

                {/* Outer Ambient Glow Halo */}
                <div className="w-72 sm:w-80 h-72 sm:h-80 rounded-full bg-[#076FB8]/15 blur-2xl pointer-events-none" />
              </div>

              {/* Central Circular Image Container */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-64 sm:w-80 md:w-96 aspect-square rounded-full overflow-hidden border-4 border-white shadow-2xl shadow-[#076FB8]/25 z-10 bg-[#043E69]"
              >
                <Image
                  src={IMAGERY.aboutLab.src}
                  alt={IMAGERY.aboutLab.alt}
                  fill
                  sizes="(max-width: 768px) 256px, 384px"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#043E69]/40 via-transparent to-[#076FB8]/20 mix-blend-multiply" />
              </motion.div>

            </RevealSection>
          </div>

        </div>

      </div>
    </section>
  );
};
