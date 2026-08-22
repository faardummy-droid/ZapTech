"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Mail, MapPin, Sparkles } from "lucide-react";
import { SectionHeader } from "../ui/SectionHeader";
import { AnimatedGradientText } from "../animation/AnimatedGradientText";
import { RevealSection } from "../animation/RevealSection";

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-28 relative overflow-hidden bg-[#F0F7FB]">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#076FB8]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Editorial Section Title */}
        <SectionHeader
          index="08"
          badge="CONTACT"
          title={
            <>
              Let&apos;s Build the Future of{" "}
              <AnimatedGradientText>Energy Together.</AnimatedGradientText>
            </>
          }
          description="For host business partners, investors, technology collaborators, and fleet operators looking to deploy ZapIn infrastructure across Indonesia."
        />

        {/* Clean Call-to-Action to Subpage */}
        <RevealSection delay={0.2} className="mt-10 flex flex-col items-center justify-center space-y-6">
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-medium text-[#043E69]/80">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#076FB8]" />
              <span>Malang, Jawa Timur, Indonesia</span>
            </div>
            <span className="text-[#076FB8]/30 hidden sm:inline">•</span>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#076FB8]" />
              <a href="mailto:info@zapin.id" className="font-mono font-bold text-[#076FB8] hover:underline">
                info@zapin.id
              </a>
            </div>
          </div>

          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 rounded-2xl bg-[#076FB8] text-white text-base font-bold hover:bg-[#043E69] transition-all shadow-xl shadow-[#076FB8]/25 hover:shadow-2xl hover:scale-105 active:scale-95 group"
            >
              <span>Contact Us & Start Partnership</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </RevealSection>

      </div>
    </section>
  );
};
