"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function WelcomeLogo() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [imageLoaded, setImageLoaded] = useState(false);
  const [done, setDone] = useState(false);

  if (!isHomePage || done) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={imageLoaded ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 1, delay: 1.5, ease: "easeIn" }}
      onAnimationComplete={() => {
        if (imageLoaded) setDone(true);
      }}
      className="fixed z-100 w-full h-full flex items-center justify-center bg-black"
    >
      <Image
        src="/images/numerlett-logo.png"
        alt="Numerlett"
        width={200}
        height={200}
        style={
          imageLoaded ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }
        }
        className="transition-all duration-1000 ease-in-out"
        onLoad={() => setImageLoaded(true)}
      />
    </motion.div>
  );
}
