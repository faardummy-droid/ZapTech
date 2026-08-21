"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Zap, Sparkles } from "lucide-react";
import { AnimatedGradientText } from "../animation/AnimatedGradientText";
import { RevealSection } from "../animation/RevealSection";

export const ContactCTA: React.FC = () => {
  return (
    <section className="py-16 bg-[#F0F7FB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealSection>
          <div className="relative rounded-3xl p-8 sm:p-12 lg:p-16 overflow-hidden bg-[#043E69] text-white shadow-xl border border-[#076FB8]/30">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#EE7797]/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FEC958]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 text-[#FEC958] border border-white/20 backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Partner With ZapTech</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
                Ready to Join the{" "}
                <AnimatedGradientText className="text-white">Clean Mobility Revolution?</AnimatedGradientText>
              </h2>

              <p className="text-blue-100/90 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                Whether you are a host business partner looking to install zero-CapEx chargers, an investor, or a technology collaborator, we want to hear from you.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="/#contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#076FB8] text-white font-bold hover:bg-[#022744] transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 text-sm"
                >
                  <span>Start a Conversation</span>
                  <ArrowRight className="w-5 h-5" />
                </a>

                <Link
                  href="/technology/zapin"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 text-white font-bold border border-white/20 hover:bg-white/20 transition-all text-sm"
                >
                  <span>Explore ZapIN Platform</span>
                </Link>
              </div>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};
