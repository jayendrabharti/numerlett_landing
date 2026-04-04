"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";

const LOGO_FINAL_SIZE = 60;
const LOGO_PADDING = 16; // distance from viewport edge

export default function AnimatedLogo({
  className = "",
}: {
  className?: string;
}) {
  return (
    <Link
      className={cn("pointer-events-auto flex items-center", className)}
      href="/"
    >
      <Image
        src="/images/numerlett-logo-small.png"
        alt="Numerlett"
        width={60}
        height={60}
      />
    </Link>
  );
}
