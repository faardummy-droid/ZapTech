import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  index?: string;
  badge?: string;
  title: React.ReactNode;
  description?: string;
  className?: string;
  alignment?: "left" | "center" | "asymmetric";
  theme?: "light" | "dark";
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  index,
  badge,
  title,
  description,
  className,
  alignment = "left",
  theme = "light",
}) => {
  const isDark = theme === "dark";
  const displayBadge = badge || index;

  return (
    <div
      className={cn(
        "max-w-4xl mb-12 sm:mb-16",
        alignment === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {/* Refined Category Tag & Accent Line */}
      {displayBadge && (
        <div
          className={cn(
            "flex items-center gap-3 mb-4",
            alignment === "center" && "justify-center"
          )}
        >
          <span
            className={cn(
              "text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full",
              isDark
                ? "bg-white/10 text-[#FEC958] border border-white/15 backdrop-blur-sm"
                : "bg-[#076FB8]/10 text-[#076FB8] border border-[#076FB8]/20"
            )}
          >
            {displayBadge}
          </span>
          <div
            className={cn(
              "h-px w-10",
              isDark ? "bg-white/20" : "bg-[#076FB8]/25"
            )}
          />
        </div>
      )}

      <h2
        className={cn(
          "text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.25] pt-1 pb-1 overflow-visible",
          isDark ? "text-white" : "text-[#043E69]"
        )}
      >
        {title}
      </h2>

      {description && (
        <p
          className={cn(
            "mt-4 text-base sm:text-lg leading-relaxed max-w-2xl",
            alignment === "center" && "mx-auto",
            isDark ? "text-blue-100/90 font-medium" : "text-[#043E69]/75"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
};

