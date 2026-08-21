"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface AnimatedGradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export const AnimatedGradientText: React.FC<AnimatedGradientTextProps> = ({
  children,
  className,
}) => {
  return (
    <span
      className={cn(
        "bg-gradient-to-r from-[#076FB8] via-[#EE7797] to-[#FEC958] bg-[length:300%_auto] animate-gradient-flow bg-clip-text text-transparent font-bold inline-block",
        className
      )}
    >
      {children}
    </span>
  );
};
