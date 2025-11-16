"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href={"/"}>
      <motion.div
        className={cn("flex items-center max-h-full", className)}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <Image
          src="/images/numerlett-logo.png"
          alt="Numerlett"
          width={200}
          height={200}
          className="h-full max-h-full"
        />
      </motion.div>
    </Link>
  );
}
