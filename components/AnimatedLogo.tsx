"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export default function AnimatedLogo({
  className = "",
}: {
  className?: string;
}) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <motion.div
      className="z-50"
      initial={
        isHomePage
          ? {
              position: "fixed",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100dvw",
              height: "100dvh",
              top: 0,
              left: 0,
              backgroundColor:
                "color-mix(in oklab, var(--background) 100%, transparent)",
            }
          : false
      }
      animate={{
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "max-content",
        height: "max-content",
        top: "auto",
        left: "auto",
        backgroundColor:
          "color-mix(in oklab, var(--background) 0%, transparent)",
      }}
      transition={{
        backgroundColor: { duration: 0.5, delay: 0.5 },
        default: { duration: 1, delay: 1 },
      }}
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
