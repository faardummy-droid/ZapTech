"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Linkedin, Github, Mail, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeader } from "../ui/SectionHeader";
import { AnimatedGradientText } from "../animation/AnimatedGradientText";
import { TEAM_MEMBERS } from "@/data/team";

export const TeamSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const total = TEAM_MEMBERS.length;
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-scroll carousel every 4.5 seconds (paused when hovered)
  useEffect(() => {
    if (isHovered) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, 4500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isHovered, total]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const currentMember = TEAM_MEMBERS[activeIndex];

  return (
    <section
      id="team"
      className="py-24 relative bg-[#043E69] text-white overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Ambient Soft Glow Background Accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#076FB8]/25 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -top-20 right-10 w-96 h-96 bg-[#FEC958]/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Section Header with Dark Theme & Clean Tag */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeader
            badge="Leadership & Team"
            theme="dark"
            title={
              <span className="text-white">
                Built by People Who Believe Technology Should{" "}
                <AnimatedGradientText className="text-white">
                  Move the World Forward.
                </AnimatedGradientText>
              </span>
            }
            description="A multidisciplinary team of clean-tech visionaries, embedded systems engineers, and market strategists."
            className="mb-0 max-w-3xl"
          />

          {/* Navigation Controls (Prev / Next Arrows + Auto-scroll indicator) */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={handlePrev}
              aria-label="Previous Team Member"
              className="w-12 h-12 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all hover:scale-105 active:scale-95 shadow-lg backdrop-blur-md"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next Team Member"
              className="w-12 h-12 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all hover:scale-105 active:scale-95 shadow-lg backdrop-blur-md"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Featured Interactive Team Member Showcase Card */}
        <div className="relative rounded-3xl bg-[#022744]/90 border border-white/20 shadow-2xl backdrop-blur-xl p-6 sm:p-10 lg:p-12 overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#076FB8]/20 rounded-full blur-3xl pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={currentMember.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              {/* Executive Portrait Frame */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="w-full max-w-sm aspect-[3/4] rounded-3xl overflow-hidden bg-[#043E69] border-2 border-white/20 shadow-2xl relative group">
                  <Image
                    src={currentMember.image}
                    alt={currentMember.name}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#022744] via-transparent to-transparent opacity-60" />
                </div>
              </div>

              {/* Member Information & Bio */}
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-2">
                  <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold text-[#FEC958] uppercase tracking-wider bg-[#FEC958]/15 border border-[#FEC958]/30 backdrop-blur-sm">
                    {currentMember.role}
                  </span>
                  <h3 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                    {currentMember.name}
                  </h3>
                </div>

                <div className="p-6 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md text-blue-100/90 leading-relaxed text-sm sm:text-base">
                  {currentMember.bio}
                </div>

                {/* Social Connect Links */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  {currentMember.linkedin && (
                    <a
                      href={currentMember.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-[#076FB8] text-white font-medium text-xs border border-white/20 transition-all hover:scale-105 shadow-sm"
                    >
                      <Linkedin className="w-4 h-4 text-[#FEC958]" />
                      <span>Connect on LinkedIn</span>
                    </a>
                  )}
                  {currentMember.github && (
                    <a
                      href={currentMember.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-[#EE7797] text-white font-medium text-xs border border-white/20 transition-all hover:scale-105 shadow-sm"
                    >
                      <Github className="w-4 h-4 text-[#FEC958]" />
                      <span>View GitHub Profile</span>
                    </a>
                  )}
                  {currentMember.email && (
                    <a
                      href={`mailto:${currentMember.email}`}
                      className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-[#FEC958] hover:text-[#043E69] text-white font-medium text-xs border border-white/20 transition-all hover:scale-105 shadow-sm"
                    >
                      <Mail className="w-4 h-4 text-[#FEC958] group-hover:text-[#043E69]" />
                      <span>Send Direct Email</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Thumbnail Selector & Indicator Strip */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {TEAM_MEMBERS.map((member, idx) => {
            const isSelected = activeIndex === idx;
            return (
              <button
                key={member.id}
                onClick={() => setActiveIndex(idx)}
                className={`p-4 rounded-2xl text-left transition-all border backdrop-blur-md flex items-center gap-3.5 cursor-pointer ${
                  isSelected
                    ? "bg-white/20 border-[#FEC958] shadow-[0_0_20px_rgba(254,201,88,0.25)] scale-[1.02]"
                    : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/25 opacity-75 hover:opacity-100"
                }`}
              >
                <div className="w-11 h-11 rounded-xl overflow-hidden relative shrink-0 border border-white/20">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div className="truncate">
                  <div className="text-sm font-bold text-white truncate">{member.name}</div>
                  <div className="text-[11px] text-[#FEC958] truncate">{member.role}</div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

