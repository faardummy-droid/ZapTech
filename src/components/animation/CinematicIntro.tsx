"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap } from "lucide-react";

interface CinematicIntroProps {
  onComplete: () => void;
}

export const CinematicIntro: React.FC<CinematicIntroProps> = ({ onComplete }) => {
  const [scene, setScene] = useState<number>(0);

  useEffect(() => {
    // Check if intro has already been played in this browser session
    const hasSeenIntro = sessionStorage.getItem("zapin_intro_seen");
    if (hasSeenIntro) {
      onComplete();
      return;
    }

    const timer1 = setTimeout(() => setScene(1), 300);   // Scene 1: Energy is everywhere
    const timer2 = setTimeout(() => setScene(2), 1400);  // Scene 2: Intelligence changes everything
    const timer3 = setTimeout(() => setScene(3), 2500);  // Scene 3: We build what comes next
    const timer4 = setTimeout(() => setScene(4), 3600);  // Scene 4: ZapIn Logo
    const timer5 = setTimeout(() => {
      sessionStorage.setItem("zapin_intro_seen", "true");
      onComplete();
    }, 4800); // Scene 5: Complete & Reveal Hero

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
    };
  }, [onComplete]);

  const handleSkip = () => {
    sessionStorage.setItem("zapin_intro_seen", "true");
    onComplete();
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-50 bg-[#F0F7FB] flex items-center justify-center p-6 select-none overflow-hidden"
    >
      {/* Background Vector Nodes & Ambient Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#076FB8]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#FEC958]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-[#EE7797]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Skip Button */}
      <button
        onClick={handleSkip}
        className="absolute top-8 right-8 text-xs font-mono text-[#076FB8]/70 hover:text-[#076FB8] uppercase tracking-widest bg-white/60 px-4 py-2 rounded-full border border-[#076FB8]/20 backdrop-blur-md transition-all shadow-sm"
      >
        Skip Intro →
      </button>

      <div className="max-w-2xl w-full text-center relative z-10">
        <AnimatePresence mode="wait">
          {scene === 1 && (
            <motion.h2
              key="scene1"
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="text-3xl sm:text-5xl font-extrabold text-[#043E69] tracking-tight"
            >
              Energy is everywhere.
            </motion.h2>
          )}

          {scene === 2 && (
            <motion.h2
              key="scene2"
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="text-3xl sm:text-5xl font-extrabold text-[#076FB8] tracking-tight"
            >
              Intelligence changes everything.
            </motion.h2>
          )}

          {scene === 3 && (
            <motion.h2
              key="scene3"
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="text-3xl sm:text-5xl font-extrabold text-[#043E69] tracking-tight"
            >
              We build what comes next.
            </motion.h2>
          )}

          {scene === 4 && (
            <motion.div
              key="scene4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="flex flex-col items-center gap-4"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#076FB8] via-[#EE7797] to-[#FEC958] p-0.5 flex items-center justify-center shadow-glow">
                <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center">
                  <Zap className="w-8 h-8 text-[#076FB8] fill-[#076FB8]/20 animate-pulse" />
                </div>
              </div>
              <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-[#043E69]">
                Zap<span className="text-[#EE7797]">In</span>
              </h1>
              <p className="text-xs font-mono text-[#076FB8]/70 uppercase tracking-widest">
                Powering Your Journey, Smarter!
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
