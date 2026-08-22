"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedGradientText } from "../animation/AnimatedGradientText";
import { IMAGERY } from "@/data/imagery";

const HERO_SCENES = [
  {
    prefix: "Indonesia's ",
    highlight: "energy",
    suffix: " is changing.",
  },
  {
    prefix: "",
    highlight: "Mobility",
    suffix: " is changing.",
  },
  {
    prefix: "",
    highlight: "Infrastructure",
    suffix: " should change with it.",
  },
  {
    prefix: "ZapIn powers the ",
    highlight: "journey",
    suffix: " forward.",
  },
];

export const HeroSection: React.FC = () => {
  const [activeSceneIdx, setActiveSceneIdx] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSceneIdx((prev) => (prev + 1) % HERO_SCENES.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  const currentScene = HERO_SCENES[activeSceneIdx];

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-[#02182B] text-white pt-24 pb-20"
    >
      {/* 1. Full-Bleed EV Car Background Image with Slow Subtle Zoom */}
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 z-0"
      >
        <Image
          src={IMAGERY.heroEVCharging.src}
          alt={IMAGERY.heroEVCharging.alt}
          fill
          priority
          className="object-cover object-center opacity-35 mix-blend-luminosity brightness-90"
        />
      </motion.div>

      {/* 2. Sophisticated Multi-Layered Dark Gradient & Glass Overlay strictly in Brand Palette */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#02182B]/90 via-[#043E69]/80 to-[#02182B]/95 pointer-events-none" />
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#02182B]/50 to-[#02182B] pointer-events-none" />

      {/* 3. Ambient Glowing Energy Orbs in Approved Colors (#076FB8, #EE7797, #FEC958) */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.25, 0.45, 0.25],
          x: [-20, 20, -20],
          y: [-10, 15, -10],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] sm:w-[850px] h-[450px] bg-[#076FB8]/25 rounded-full blur-[120px] pointer-events-none z-[2]"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-1/3 right-1/4 w-[380px] h-[380px] bg-[#EE7797]/20 rounded-full blur-[100px] pointer-events-none z-[2]"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.35, 0.15],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-[#FEC958]/15 rounded-full blur-[100px] pointer-events-none z-[2]"
      />

      {/* 4. Animated Energy Vector Paths Overlay */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-[2] opacity-40"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="heroEnergyGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#076FB8" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#FEC958" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#EE7797" stopOpacity="0.7" />
          </linearGradient>
          <linearGradient id="heroEnergyGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FEC958" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#076FB8" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#FEC958" stopOpacity="0.6" />
          </linearGradient>
        </defs>

        <motion.path
          d="M -100 250 C 300 120, 600 480, 1100 200 S 1600 350, 2000 180"
          fill="none"
          stroke="url(#heroEnergyGrad1)"
          strokeWidth="2.5"
          strokeDasharray="10 14"
          animate={{ strokeDashoffset: [200, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        />
        <motion.path
          d="M -50 480 C 400 620, 800 220, 1300 420 S 1800 180, 2100 400"
          fill="none"
          stroke="url(#heroEnergyGrad2)"
          strokeWidth="1.8"
          strokeDasharray="6 10"
          animate={{ strokeDashoffset: [0, 200] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        />
      </svg>

      {/* 5. Centered Hero Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center flex flex-col items-center justify-center my-auto">
        
        {/* Brand Official Dual SVG Logo (icon.svg + zapinputih.svg) */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-2.5 sm:gap-3.5 mb-6 mx-auto"
        >
          <div className="w-11 h-11 sm:w-14 sm:h-14 relative shrink-0">
            <Image
              src="/images/icon.svg"
              alt="ZapIn Icon"
              fill
              sizes="(max-width: 640px) 44px, 56px"
              className="object-contain drop-shadow-xl"
              priority
            />
          </div>
          <div className="w-44 sm:w-56 h-11 sm:h-14 relative shrink-0">
            <Image
              src="/images/zapinputih.svg"
              alt="ZapIn — Powering Your Journey, Smarter!"
              fill
              sizes="(max-width: 640px) 176px, 224px"
              className="object-contain object-left drop-shadow-xl"
              priority
            />
          </div>
        </motion.div>

        {/* Dynamic Looping Centered Headline */}
        <div className="h-[130px] sm:h-[160px] md:h-[170px] flex items-center justify-center overflow-visible w-full relative">
          <AnimatePresence mode="wait">
            <motion.h1
              key={activeSceneIdx}
              initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -16, filter: "blur(4px)" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.12] pt-2 pb-2 text-white drop-shadow-lg absolute inset-0 flex items-center justify-center"
            >
              <span>
                {currentScene.prefix}
                <AnimatedGradientText className="text-white">
                  {currentScene.highlight}
                </AnimatedGradientText>
                {currentScene.suffix}
              </span>
            </motion.h1>
          </AnimatePresence>
        </div>

        {/* High-Contrast Crisp Value Proposition */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 sm:mt-8 text-base sm:text-xl md:text-2xl text-blue-100/90 leading-relaxed max-w-3xl mx-auto font-normal drop-shadow"
        >
          ZapIn turns charging uncertainty into an intelligent journey by connecting real-time telemetry, availability forecasting, and guaranteed spot holds.
        </motion.p>

        {/* Text-Led Clean CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-5 w-full"
        >
          <Link
            href="/#featured-product"
            className="group px-8 py-4 rounded-2xl bg-[#076FB8] text-white font-bold hover:bg-[#0983d6] transition-all shadow-[0_0_25px_rgba(7,111,184,0.45)] hover:shadow-[0_0_35px_rgba(7,111,184,0.7)] hover:scale-105 active:scale-95 text-sm sm:text-base border border-white/20"
          >
            Explore ZapIn
          </Link>

          <a
            href="#about"
            className="px-7 py-4 rounded-2xl bg-white/10 backdrop-blur-md text-white font-semibold border border-white/25 hover:bg-white/20 hover:border-white/40 transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 text-sm sm:text-base"
          >
            Discover Featured Product
          </a>
        </motion.div>
      </div>
    </section>
  );
};
