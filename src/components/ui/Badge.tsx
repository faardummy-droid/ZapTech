import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  variant?: "primary" | "yellow" | "pink" | "outline";
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  icon,
  variant = "primary",
  className,
}) => {
  const variants = {
    primary: "bg-[#076FB8]/10 text-[#076FB8] border-[#076FB8]/20",
    yellow: "bg-[#FEC958]/20 text-[#8F6300] border-[#FEC958]/40",
    pink: "bg-[#EE7797]/15 text-[#C02652] border-[#EE7797]/30",
    outline: "bg-white/80 text-slate-700 border-slate-200",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider border transition-all duration-300 shadow-sm",
        variants[variant],
        className
      )}
    >
      {icon && <span className="w-3.5 h-3.5 flex items-center justify-center">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
