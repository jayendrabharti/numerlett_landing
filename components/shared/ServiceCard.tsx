"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  technologies?: string[];
  index?: number;
  className?: string;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  features,
  technologies,
  index = 0,
  className,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={cn("h-full", className)}
    >
      <Card className="h-full border border-border/50 bg-card hover:border-primary/20 transition-all duration-300 group">
        <CardHeader>
          <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-4 transition-colors group-hover:bg-primary/15">
            <Icon className="w-7 h-7" />
          </div>
          <CardTitle className="text-xl font-bold text-foreground">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-muted-foreground text-sm leading-relaxed">
            {description}
          </p>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-foreground">
              Key Features:
            </h4>
            <ul className="space-y-2">
              {features.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <CheckIcon className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {technologies && technologies.length > 0 && (
            <div className="pt-4 border-t border-border/50">
              <h4 className="text-sm font-semibold text-foreground mb-3">
                Technologies:
              </h4>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}
