"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface CapabilityCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index?: number;
  className?: string;
}

export default function CapabilityCard({
  icon: Icon,
  title,
  description,
  index = 0,
  className,
}: CapabilityCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      viewport={{ once: true }}
      className={cn("flex flex-col items-center text-center group", className)}
    >
      <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-primary/10 text-primary mb-4 transition-all duration-300 group-hover:bg-primary/15 group-hover:scale-105">
        <Icon className="w-7 h-7 sm:w-8 sm:h-8" />
      </div>
      <h3 className="text-base sm:text-lg font-semibold mb-2.5 text-foreground">
        {title}
      </h3>
      <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
