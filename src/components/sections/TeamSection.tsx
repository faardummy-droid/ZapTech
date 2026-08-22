"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Linkedin, Instagram, Globe, Github, Mail, X, ArrowRight } from "lucide-react";
import { SectionHeader } from "../ui/SectionHeader";
import { AnimatedGradientText } from "../animation/AnimatedGradientText";
import { RevealSection } from "../animation/RevealSection";
import { TEAM_MEMBERS_DETAILED, TeamMemberProfile } from "@/data/team";

const PARTNER_LOGOS = [
  {
    name: "ZapIn Official SVG",
    src: "/images/logo-3.svg",
    width: "w-36 sm:w-44",
  },
  {
    name: "Universitas Brawijaya",
    src: "/images/partners/ub.webp",
    width: "w-14 sm:w-16",
  },
  {
    name: "FILKOM UB",
    src: "/images/partners/filkom-ub.png",
    width: "w-32 sm:w-40",
  },
  {
    name: "Teknik Elektro UB",
    src: "/images/partners/elektro-ub.png",
    width: "w-14 sm:w-16",
  },
];

export const TeamSection: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMemberProfile | null>(null);

  return (
    <section id="team" className="py-32 bg-[#F0F7FB] relative overflow-hidden">
      {/* Rich Layered Background Ambience strictly in Brand Palette */}
      <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-[#076FB8]/12 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-[600px] h-[600px] bg-[#FEC958]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-2/3 left-1/3 w-[500px] h-[500px] bg-[#EE7797]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Decorative Technical Vector Grid Pattern */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-25"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="team-grid-pattern" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#076FB8" strokeWidth="0.5" strokeDasharray="3 3" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#team-grid-pattern)" />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Section Title */}
        <SectionHeader
          index="07"
          badge="TEAM"
          title={
            <>
              Leadership & Engineering{" "}
              <AnimatedGradientText>Behind ZapIn.</AnimatedGradientText>
            </>
          }
          description="Multidisciplinary engineering, IoT hardware architecture, artificial intelligence, and operations leaders dedicated to Indonesia's clean mobility future."
        />

        {/* Dynamic & Equal-Sized Team Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-14 items-stretch">
          {TEAM_MEMBERS_DETAILED.map((member, idx) => (
            <RevealSection key={member.id} delay={idx * 0.1} className="h-full">
              <div className="group relative h-full rounded-3xl bg-white/90 backdrop-blur-md border border-[#076FB8]/20 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col justify-between hover:-translate-y-1.5 hover:border-[#076FB8]/50">
                
                {/* Top Subtle Gradient Accent */}
                <div className="h-2 w-full bg-gradient-to-r from-[#076FB8] via-[#EE7797] to-[#FEC958] shrink-0" />

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  
                  {/* Photo Container with Sleek Glow */}
                  <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-[#043E69] border-2 border-white shadow-md group-hover:shadow-lg transition-all shrink-0">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#043E69]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Role Badge (NO ICON, Equalized Height) */}
                  <div className="min-h-[44px] flex items-center justify-center text-center">
                    <span className="w-full text-[9.5px] font-mono font-extrabold text-[#076FB8] bg-[#076FB8]/10 px-2.5 py-1.5 rounded-lg border border-[#076FB8]/20 tracking-wider uppercase leading-snug">
                      {member.roleBadge}
                    </span>
                  </div>

                  {/* Member Name & Institution (Equalized Height) */}
                  <div className="min-h-[60px] flex flex-col justify-start space-y-1">
                    <div className="text-lg font-black text-[#043E69] tracking-tight group-hover:text-[#076FB8] transition-colors leading-tight line-clamp-2">
                      {member.name}
                    </div>
                    <div className="text-[11px] font-medium text-[#043E69]/70 line-clamp-1">
                      {member.institution}
                    </div>
                  </div>

                  {/* Short Bio Snippet (Equalized Height) */}
                  <div className="min-h-[52px] flex items-start">
                    <p className="text-xs text-[#043E69]/80 leading-relaxed line-clamp-3">
                      {member.bio}
                    </p>
                  </div>

                  {/* Action "See More" Button & Standardized LinkedIn + Instagram Icons */}
                  <div className="pt-3 border-t border-[#076FB8]/15 flex items-center justify-between mt-auto shrink-0">
                    <button
                      onClick={() => setSelectedMember(member)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#076FB8] hover:text-[#043E69] transition-colors group/btn cursor-pointer"
                    >
                      <span>See More</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>

                    {/* Standardized Social Icons: LinkedIn & Instagram on ALL 4 cards */}
                    <div className="flex items-center gap-2">
                      <a
                        href={member.contacts.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="w-8 h-8 rounded-xl bg-[#F0F7FB] border border-[#076FB8]/20 flex items-center justify-center text-[#076FB8] hover:bg-[#076FB8] hover:text-white transition-all shadow-sm"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                      <a
                        href={
                          member.contacts.instagram?.startsWith("http")
                            ? member.contacts.instagram
                            : `https://${member.contacts.instagram}`
                        }
                        target="_blank"
                        rel="noreferrer"
                        className="w-8 h-8 rounded-xl bg-[#F0F7FB] border border-[#EE7797]/25 flex items-center justify-center text-[#EE7797] hover:bg-[#EE7797] hover:text-white transition-all shadow-sm"
                        aria-label="Instagram"
                      >
                        <Instagram className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                </div>

              </div>
            </RevealSection>
          ))}
        </div>

        {/* Academic Roots & Innovation Ecosystem (No box, no icon, bold animated text) */}
        <div className="mt-24 pt-12 border-t border-[#076FB8]/20">
          <div className="text-center mb-8">
            <h4 className="text-sm sm:text-base font-black tracking-widest uppercase font-mono">
              <AnimatedGradientText className="font-mono tracking-widest font-black">
                ACADEMIC ROOTS & INNOVATION ECOSYSTEM
              </AnimatedGradientText>
            </h4>
          </div>

          <div className="relative w-full overflow-hidden py-4">
            {/* Left & Right Gradient Shadows */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#F0F7FB] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#F0F7FB] to-transparent z-10 pointer-events-none" />

            {/* Seamless Infinite Running Ticker */}
            <div className="flex items-center gap-12 sm:gap-20 animate-marquee whitespace-nowrap w-max">
              {[...PARTNER_LOGOS, ...PARTNER_LOGOS, ...PARTNER_LOGOS, ...PARTNER_LOGOS].map((logo, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-center grayscale hover:grayscale-0 opacity-80 hover:opacity-100 transition-all duration-300 shrink-0"
                >
                  <div className={`h-12 sm:h-14 ${logo.width} relative flex items-center justify-center`}>
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      fill
                      sizes="180px"
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Experience Details Pop-up Modal */}
      <AnimatePresence>
        {selectedMember && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/65 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-[#076FB8]/20 overflow-hidden max-h-[90vh] flex flex-col"
            >
              {/* Modal Header */}
              <div className="p-6 sm:p-8 bg-[#043E69] text-white relative">
                <button
                  onClick={() => setSelectedMember(null)}
                  className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden relative border-2 border-white shadow-md shrink-0 bg-[#022744]">
                    <Image
                      src={selectedMember.image}
                      alt={selectedMember.name}
                      fill
                      sizes="96px"
                      className="object-cover"
                    />
                  </div>

                  <div className="space-y-1.5 text-center sm:text-left">
                    {/* Role Badge (NO ICON as requested) */}
                    <div>
                      <span className="inline-block text-[10px] sm:text-xs font-mono font-extrabold text-[#FEC958] bg-white/10 px-3 py-1 rounded-lg border border-white/20 uppercase tracking-wider">
                        {selectedMember.roleBadge}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl sm:text-3xl font-black text-white">
                      {selectedMember.name}
                    </h3>
                    
                    <div className="text-xs text-blue-100/90 font-medium">
                      {selectedMember.institution}
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Body / Scrollable Content */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 text-[#043E69]">
                
                {/* Statement Quote */}
                <div className="p-4 rounded-2xl bg-[#F0F7FB] border border-[#076FB8]/15 italic text-xs sm:text-sm text-[#043E69] leading-relaxed border-l-4 border-l-[#076FB8]">
                  &ldquo;{selectedMember.statement}&rdquo;
                </div>

                {/* Key Competencies & Focus */}
                <div className="space-y-2.5">
                  <div className="text-xs font-mono font-black text-[#076FB8] uppercase tracking-wider">
                    KEY COMPETENCIES & FOCUS:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedMember.competencies.map((comp, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 rounded-xl bg-[#F0F7FB] border border-[#076FB8]/20 text-xs font-semibold text-[#043E69]"
                      >
                        {comp}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Executive Experience & Leadership Impact */}
                <div className="space-y-3">
                  <div className="text-xs font-mono font-black text-[#076FB8] uppercase tracking-wider">
                    EXECUTIVE EXPERIENCE & LEADERSHIP IMPACT:
                  </div>
                  <div className="space-y-2.5">
                    {selectedMember.experience.map((exp, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#043E69]/85 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#076FB8] mt-2 shrink-0" />
                        <span>{exp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct Contact & Socials */}
                <div className="pt-4 border-t border-[#076FB8]/15 space-y-2">
                  <div className="text-xs font-mono font-black text-[#076FB8] uppercase tracking-wider">
                    DIRECT CONTACT & SOCIALS:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-[#076FB8] shrink-0" />
                      <a href={`mailto:${selectedMember.contacts.email}`} className="font-mono font-semibold text-[#076FB8] hover:underline">
                        {selectedMember.contacts.email}
                      </a>
                    </div>
                    {selectedMember.contacts.github && (
                      <div className="flex items-center gap-2">
                        <Github className="w-4 h-4 text-[#076FB8] shrink-0" />
                        <a href={selectedMember.contacts.github} target="_blank" rel="noreferrer" className="font-mono font-semibold text-[#076FB8] hover:underline truncate">
                          {selectedMember.contacts.github.replace("https://", "")}
                        </a>
                      </div>
                    )}
                    {selectedMember.contacts.linkedin && (
                      <div className="flex items-center gap-2">
                        <Linkedin className="w-4 h-4 text-[#076FB8] shrink-0" />
                        <a href={selectedMember.contacts.linkedin} target="_blank" rel="noreferrer" className="font-mono font-semibold text-[#076FB8] hover:underline truncate">
                          {selectedMember.contacts.linkedin.replace("https://", "")}
                        </a>
                      </div>
                    )}
                    {selectedMember.contacts.portfolio && (
                      <div className="flex items-center gap-2">
                        <Globe className="w-4 h-4 text-[#076FB8] shrink-0" />
                        <a href={selectedMember.contacts.portfolio} target="_blank" rel="noreferrer" className="font-mono font-semibold text-[#076FB8] hover:underline truncate">
                          {selectedMember.contacts.portfolio.replace("https://", "")}
                        </a>
                      </div>
                    )}
                    {selectedMember.contacts.instagram && (
                      <div className="flex items-center gap-2">
                        <Instagram className="w-4 h-4 text-[#076FB8] shrink-0" />
                        <a href={selectedMember.contacts.instagram.startsWith("http") ? selectedMember.contacts.instagram : `https://${selectedMember.contacts.instagram}`} target="_blank" rel="noreferrer" className="font-mono font-semibold text-[#076FB8] hover:underline truncate">
                          {selectedMember.contacts.instagram.replace("https://", "")}
                        </a>
                      </div>
                    )}
                  </div>
                </div>

              </div>

              {/* Modal Footer */}
              <div className="p-4 bg-[#F0F7FB] border-t border-[#076FB8]/10 flex justify-end">
                <button
                  onClick={() => setSelectedMember(null)}
                  className="px-6 py-2.5 rounded-xl bg-[#076FB8] text-white text-xs font-bold hover:bg-[#043E69] transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
