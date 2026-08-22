"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "../ui/SectionHeader";
import { AnimatedGradientText } from "../animation/AnimatedGradientText";
import { RevealSection } from "../animation/RevealSection";
import { IMAGERY } from "@/data/imagery";

interface ImpactSlide {
  id: string;
  image: string;
  alt: string;
  value: string;
  title: string;
  description: string;
}

const IMPACT_SLIDES: ImpactSlide[] = [
  {
    id: "mobility",
    image: IMAGERY.impactMobility.src,
    alt: "Clean Mobility Acceleration",
    value: "120k+",
    title: "Clean Mobility Acceleration",
    description:
      "Zero-emission kilometers enabled through intelligent charging availability, predictive route guidance, and eliminated range anxiety.",
  },
  {
    id: "kafe",
    image: IMAGERY.impactKafe.src,
    alt: "Local Business Revenue Growth",
    value: "+45%",
    title: "Local Host Business Revenue",
    description:
      "Average foot-traffic and dwell-time spending boost for commercial UMKM cafes and retail hosts operating ZapIn charging infrastructure.",
  },
  {
    id: "grid",
    image: IMAGERY.impactGrid.src,
    alt: "Energy Telemetry and Grid Efficiency",
    value: "98%",
    title: "Energy Telemetry & Grid Efficiency",
    description:
      "Operational telemetry reliability and uptime across distributed edge controllers with active grid load balancing.",
  },
];

export const ImpactSection: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isHovered) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % IMPACT_SLIDES.length);
    }, 4500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isHovered]);

  const currentSlide = IMPACT_SLIDES[activeIdx];

  return (
    <section
      id="impact"
      className="py-32 relative bg-[#02182B] text-white overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Full-Bleed Auto-Changing Photographic Background */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide.id}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 0.35, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={currentSlide.image}
              alt={currentSlide.alt}
              fill
              priority
              className="object-cover object-center mix-blend-luminosity brightness-95"
            />
          </motion.div>
        </AnimatePresence>

        {/* Multi-Layered Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#02182B]/95 via-[#043E69]/80 to-[#02182B]/95 pointer-events-none" />
      </div>

      {/* Ambient Glows */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-[#076FB8]/20 rounded-full blur-3xl pointer-events-none z-[1]" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#FEC958]/15 rounded-full blur-3xl pointer-events-none z-[1]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Section Title */}
        <SectionHeader
          index="05"
          badge="IMPACT"
          theme="dark"
          title={
            <span className="text-white">
              Technology That Creates{" "}
              <AnimatedGradientText className="text-white">
                Measurable Impact.
              </AnimatedGradientText>
            </span>
          }
          description="Quantifiable environmental, economic, and operational value delivered as charging infrastructure scales."
        />

        {/* Dynamic Image & Synchronized KPI Showcase Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-12">
          
          {/* Main Active Detail & KPI Card */}
          <div className="lg:col-span-8">
            <div className="p-8 sm:p-12 rounded-3xl bg-[#022744]/90 border border-white/20 backdrop-blur-xl shadow-2xl min-h-[340px] flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-4"
                >
                  <div className="text-5xl sm:text-7xl font-black text-[#FEC958] tracking-tight">
                    {currentSlide.value}
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
                    {currentSlide.title}
                  </h3>

                  <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed max-w-2xl font-normal">
                    {currentSlide.description}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Progress Slider Controller */}
              <div className="pt-6 mt-6 border-t border-white/10 flex items-center gap-3">
                {IMPACT_SLIDES.map((slide, idx) => (
                  <button
                    key={slide.id}
                    onClick={() => setActiveIdx(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      activeIdx === idx
                        ? "w-12 bg-[#FEC958]"
                        : "w-3 bg-white/20 hover:bg-white/40"
                    }`}
                    aria-label={`Go to impact slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Thumbnails / Scene Previews */}
          <div className="lg:col-span-4 space-y-3.5">
            {IMPACT_SLIDES.map((slide, idx) => {
              const isSelected = activeIdx === idx;
              return (
                <button
                  key={slide.id}
                  onClick={() => setActiveIdx(idx)}
                  className={`w-full p-4 rounded-2xl border text-left transition-all flex items-center gap-4 ${
                    isSelected
                      ? "bg-white/20 border-[#FEC958] shadow-lg scale-[1.02]"
                      : "bg-white/5 border-white/10 hover:bg-white/10 opacity-60 hover:opacity-100"
                  }`}
                >
                  <div className="w-14 h-14 rounded-xl overflow-hidden relative shrink-0 border border-white/20">
                    <Image
                      src={slide.image}
                      alt={slide.alt}
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-lg font-black text-[#FEC958] leading-none">
                      {slide.value}
                    </div>
                    <div className="text-xs font-bold text-white mt-1 line-clamp-1">
                      {slide.title}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

        </div>

        {/* Future Impact / Carbon Horizon Strip with Image */}
        <RevealSection delay={0.3} className="mt-12">
          <div className="p-8 rounded-3xl bg-white/5 border border-white/15 backdrop-blur-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-3">
              <span className="text-xs font-mono font-bold text-[#EE7797] uppercase tracking-widest block">
                FUTURE HORIZON
              </span>
              <h4 className="text-2xl sm:text-3xl font-black text-white">
                Future Carbon Impact
              </h4>
              <p className="text-xs sm:text-sm text-blue-100/90 leading-relaxed font-normal">
                As the ZapIn network scales across commercial hubs, integrated IoT telemetry and smart load balancing are modeled to prevent grid strain and accelerate fossil fuel displacement across Indonesia.
              </p>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5">
              <div className="relative w-full h-48 sm:h-52 rounded-2xl overflow-hidden border border-white/20 shadow-xl group">
                <Image
                  src={IMAGERY.impactCarbon.src}
                  alt={IMAGERY.impactCarbon.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#02182B]/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-[11px] font-mono font-medium text-white/90">
                  Clean Energy Attribution & Solar Grid Balancing
                </div>
              </div>
            </div>
          </div>
        </RevealSection>

      </div>
    </section>
  );
};
