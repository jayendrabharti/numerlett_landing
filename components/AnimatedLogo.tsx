"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function AnimatedLogo({
  className = "",
}: {
  className?: string;
}) {
  return (
    <motion.div
      className="z-50"
      initial={{
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100dvw",
        height: "100dvh",
        top: 0,
        left: 0,
        backdropFilter: "blur(5px)",
        backgroundColor:
          "color-mix(in oklab, var(--background) 100%, transparent)",
      }}
      animate={{
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "max-content",
        height: "max-content",
        top: "auto",
        left: "auto",
        backdropFilter: "blur(5px)",
        backgroundColor:
          "color-mix(in oklab, var(--background) 80%, transparent)",
      }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <Link
        className={cn("flex items-center max-h-full", className)}
        href={"/"}
      >
        <Image
          src="/images/numerlett-logo.png"
          alt="Numerlett"
          width={200}
          height={200}
          className="h-full max-h-full"
        />
      </Link>
    </motion.div>
  );
}
