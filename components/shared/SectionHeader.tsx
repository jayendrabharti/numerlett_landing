"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import RevealHero from "@/components/animations/RevealHero";
import Reveal from "@/components/animations/Reveal";

interface SectionHeaderProps {
  title: string | ReactNode;
  description?: string | ReactNode;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeader({
  title,
  description,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <Reveal
      className={cn(
        "mb-16",
        align === "center" && "text-center",
        align === "left" && "text-left",
        className
      )}
    >
      <RevealHero
        className={cn(
          "text-3xl md:text-4xl font-bold text-foreground mb-4",
          align === "center" && "mx-auto"
        )}
      >
        {title}
      </RevealHero>
      {description && (
        <p
          className={cn(
            "text-lg text-muted-foreground max-w-2xl",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
