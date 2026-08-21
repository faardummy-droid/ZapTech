import React from "react";
import { cn } from "@/lib/utils";

interface GradientTextProps {
  children: React.ReactNode;
  variant?: "blue-pink" | "blue-yellow";
  className?: string;
}

export const GradientText: React.FC<GradientTextProps> = ({
  children,
  variant = "blue-pink",
  className,
}) => {
  const gradientClass =
    variant === "blue-pink"
      ? "gradient-text-blue-pink"
      : "gradient-text-blue-yellow";

  return <span className={cn(gradientClass, "font-bold", className)}>{children}</span>;
};
