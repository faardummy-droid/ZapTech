"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Clock, Calendar } from "lucide-react";
import { SectionHeader } from "../ui/SectionHeader";
import { AnimatedGradientText } from "../animation/AnimatedGradientText";
import { RevealSection } from "../animation/RevealSection";
import { MILESTONES } from "@/data/milestones";
import { cn } from "@/lib/utils";

export const MilestonesSection: React.FC = () => {
  return (
    <section id="milestones" className="py-24 bg-white/70 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Growth & Roadmap"
          title={
            <>
              From Research to{" "}
              <AnimatedGradientText>Real-World Innovation.</AnimatedGradientText>
            </>
          }
          description="A track record of award-winning clean-tech validation, hardware prototypes, and scaling roadmap."
        />

        <div className="relative max-w-4xl mx-auto">
          {/* Progressive Connecting Line SVG */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 -translate-x-1/2 w-1 bg-[#076FB8]/15">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="w-full bg-gradient-to-b from-[#076FB8] via-[#EE7797] to-[#FEC958]"
            />
          </div>

          <div className="space-y-12 relative">
            {MILESTONES.map((m, idx) => {
              const isEven = idx % 2 === 0;
              const isCompleted = m.status === "completed";
              const isCurrent = m.status === "current";

              return (
                <RevealSection key={m.id} delay={idx * 0.15}>
                  <div
                    className={cn(
                      "flex flex-col sm:flex-row items-start gap-8 relative",
                      isEven ? "sm:flex-row" : "sm:flex-row-reverse"
                    )}
                  >
                    {/* Timeline Card Content */}
                    <div
                      className={cn(
                        "w-full sm:w-[calc(50%-2rem)] p-6 rounded-3xl border bg-white shadow-md hover:shadow-xl transition-all",
                        isCurrent
                          ? "border-[#076FB8] ring-2 ring-[#076FB8]/20"
                          : "border-[#076FB8]/15"
                      )}
                    >
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#076FB8] bg-[#076FB8]/10 px-3 py-1 rounded-full border border-[#076FB8]/20">
                          <Calendar className="w-3.5 h-3.5" />
                          {m.date}
                        </span>
                        <span
                          className={cn(
                            "text-[11px] font-semibold uppercase px-2.5 py-0.5 rounded-full border",
                            isCompleted
                              ? "bg-emerald-500/10 text-emerald-700 border-emerald-500/30"
                              : isCurrent
                              ? "bg-[#FEC958]/20 text-[#043E69] border-[#FEC958]/40"
                              : "bg-[#F0F7FB] text-[#076FB8]/70 border-[#076FB8]/15"
                          )}
                        >
                          {m.status}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-[#043E69] mb-1.5">{m.title}</h3>
                      <p className="text-xs text-[#043E69]/75 leading-relaxed mb-3">{m.description}</p>
                      <div className="text-[11px] font-semibold text-[#076FB8]/70 uppercase tracking-wider">
                        Domain: {m.category}
                      </div>
                    </div>

                    {/* Node Marker */}
                    <div className="absolute left-4 sm:left-1/2 top-6 -translate-x-1/2 w-8 h-8 rounded-full bg-white border-2 border-[#076FB8] shadow-md flex items-center justify-center shrink-0 z-10">
                      {isCompleted ? (
                        <CheckCircle2 className="w-4 h-4 text-[#076FB8]" />
                      ) : (
                        <Clock className="w-4 h-4 text-[#FEC958] animate-pulse" />
                      )}
                    </div>
                  </div>
                </RevealSection>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

