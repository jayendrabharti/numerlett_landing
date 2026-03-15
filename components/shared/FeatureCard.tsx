"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  image?: string;
  index?: number;
  className?: string;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  image,
  index = 0,
  className,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      viewport={{ once: true }}
      className={cn("h-full", className)}
    >
      <Card className="h-full relative overflow-hidden group border-border/50 bg-card hover:bg-accent/50 transition-all duration-500 hover:shadow-lg p-0 gap-0">
        {image && (
          <div className="w-full aspect-[4/3] overflow-hidden relative border-b border-border/50">
            <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent z-10 opacity-70"></div>
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        )}
        <CardContent
          className={cn(
            "relative z-10 flex flex-col h-full",
            image ? "p-6 pt-6" : "p-6",
          )}
        >
          <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 text-primary mb-5 border border-primary/10 shadow-sm transition-transform duration-300 group-hover:scale-110">
            <Icon className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-heading font-semibold mb-3 text-foreground tracking-tight">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
