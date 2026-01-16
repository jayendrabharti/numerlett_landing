import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: "default" | "muted";
  size?: "default" | "large";
}

export default function SectionContainer({
  children,
  className,
  id,
  background = "default",
  size = "default",
}: SectionContainerProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-20 md:py-28 w-full",
        background === "muted" && "bg-muted/20",
        size === "large" && "py-24 md:py-32",
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {children}
      </div>
    </section>
  );
}
