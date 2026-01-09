"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface ParallaxBackgroundProps {
  type: "technical" | "marketing";
  isActive: boolean;
}

export default function ParallaxBackground({
  type,
  isActive,
}: ParallaxBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const imageSrc =
    type === "technical"
      ? "/images/tech-services-background.png"
      : "/images/marketing-services-background.png";

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1 }}
        animate={{
          scale: isActive ? 1.05 : 1,
        }}
        transition={{
          scale: {
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1],
          },
        }}
      >
        <Image
          src={imageSrc}
          alt={`${type} services background`}
          fill
          className="object-cover object-center transition-opacity duration-500 ease-out"
          quality={90}
          priority={false}
          style={{
            opacity: isActive ? 0.5 : 0.25,
          }}
        />
      </motion.div>
    </div>
  );
}
