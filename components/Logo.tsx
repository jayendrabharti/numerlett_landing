"use client";
import { cn } from "@/lib/utils";
import { appName } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { anurati } from "@/utils/fonts";

export default function Logo() {
  return (
    <Link href={"/"}>
      <motion.div
        className="flex items-center"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <Image
          src="/images/numerlett-logo-small.png"
          alt="Numerlett"
          width={40}
          height={40}
          className="mr-3"
        />
        <span
          className={cn(
            "text-xl font-bold text-foreground hidden sm:flex",
            anurati.className
          )}
        >
          {appName.toUpperCase()}
        </span>
      </motion.div>
    </Link>
  );
}
