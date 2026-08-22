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
  const displayLabel = badge || "";

  return (
    <div
      className={cn(
        "max-w-4xl mb-12 sm:mb-16",
        alignment === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {/* Editorial Category Marker & Thin Accent Line (No Rounded Capsule) */}
      {(index || displayLabel) && (
        <div
          className={cn(
            "flex items-center gap-3 mb-4",
            alignment === "center" && "justify-center"
          )}
        >
          <span
            className={cn(
              "font-mono text-xs sm:text-sm font-extrabold tracking-widest uppercase",
              isDark ? "text-[#FEC958]" : "text-[#076FB8]"
            )}
          >
            {index ? `${index} — ` : ""}
            {displayLabel}
          </span>
          <div
            className={cn(
              "h-px w-12 sm:w-16",
              isDark
                ? "bg-gradient-to-r from-[#FEC958]/50 via-white/20 to-transparent"
                : "bg-gradient-to-r from-[#076FB8]/40 via-[#EE7797]/30 to-transparent"
            )}
          />
        </div>
      )}

      <h2
        className={cn(
          "text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.2] pt-1 pb-1 overflow-visible",
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
            isDark ? "text-blue-100/90 font-normal" : "text-[#043E69]/75"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
};
