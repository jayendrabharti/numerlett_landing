"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Logo from "@/components/Logo";
import ThemeSwitch from "@/components/ThemeSwitch";
import ParallaxBackground from "@/components/services/ParallaxBackground";
import useIsMobile from "@/hooks/useIsMobile";

const TABS: {
  id: number;
  title: string;
  description: string;
  href: string;
  bgType: "technical" | "marketing";
}[] = [
  {
    id: 1,
    title: "TECH SERVICES",
    description:
      "Secure technical solutions, engineering support, and cloud integrations.",
    href: "/services/technical",
    bgType: "technical",
  },
  {
    id: 2,
    title: "MARKETING SERVICES",
    description:
      "Growth strategies, campaigns, and analytics to boost your brand.",
    href: "/services/marketing",
    bgType: "marketing",
  },
];

export default function GoToPage() {
  const [activeId, setActiveId] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  // On mobile/tablet, all tabs are always "active" (show content)
  const isTabActive = (tabId: number) => isMobile || activeId === tabId;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setActiveId(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const TabClassName = (active: boolean) =>
    cn(
      "text-white group flex cursor-pointer flex-col items-center justify-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold transition-all duration-500 ease-out !p-0 !m-0 !border-0",
      isMobile ? "flex-1" : active ? "flex-[3]" : "flex-1"
    );

  return (
    <main className="flex h-screen flex-col overflow-hidden" ref={containerRef}>
      <div className="flex flex-row justify-between p-6">
        <span></span>
        <Logo />
        <ThemeSwitch />
      </div>
      <div className="flex flex-col flex-1">
        {TABS.map((tab) => (
          <div
            className={cn(
              TabClassName(activeId === tab.id),
              "relative overflow-hidden p-0! m-0! mb-0"
            )}
            key={tab.id}
            onMouseEnter={() => !isMobile && setActiveId(tab.id)}
            onMouseLeave={() => !isMobile && setActiveId(null)}
            onClick={() => !isMobile && setActiveId(tab.id)}
            style={{
              padding: 0,
              margin: 0,
              paddingBottom: 0,
              marginBottom: 0,
              border: "none",
              borderBottom: "none",
              borderTop: "none",
              outline: "none",
              boxSizing: "border-box",
              backgroundColor: "rgba(0, 0, 0, 0.4)",
            }}
          >
            <ParallaxBackground
              type={tab.bgType}
              isActive={isTabActive(tab.id)}
            />
            <motion.span
              className="relative z-10 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] m-0! p-0! mb-0! leading-none"
              animate={isTabActive(tab.id) ? { scale: 1.08 } : { scale: 1 }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              style={{
                margin: 0,
                padding: 0,
                marginBottom: 0,
                paddingBottom: 0,
                lineHeight: 1,
                display: "block",
                border: "none",
                outline: "none",
              }}
            >
              {tab.title}
            </motion.span>
            <AnimatePresence>
              {isTabActive(tab.id) && (
                <motion.div
                  initial={isMobile ? false : { opacity: 0, height: 0, y: 10 }}
                  animate={{ opacity: 1, height: "auto", y: 0 }}
                  exit={isMobile ? undefined : { opacity: 0, height: 0, y: 10 }}
                  transition={{
                    duration: isMobile ? 0 : 0.4,
                    ease: [0.25, 0.1, 0.25, 1],
                    opacity: { duration: isMobile ? 0 : 0.3 },
                  }}
                  className="flex flex-col items-center relative z-10 p-0! m-0! mb-0!"
                  style={{
                    padding: 0,
                    margin: 0,
                    paddingBottom: 0,
                    marginBottom: 0,
                  }}
                >
                  <Link href={tab.href} className="p-0! inline-block">
                    <Button
                      variant={"secondary"}
                      size={"lg"}
                      className="bg-[#0003] text-sm sm:text-base md:text-lg lg:text-xl text-inherit hover:bg-[#0005] transition-colors p-0! px-3! sm:px-4! py-1.5! sm:py-2! m-0! drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]"
                    >
                      ENTER
                    </Button>
                  </Link>
                  <p className="text-white max-w-[90%] sm:max-w-prose text-center text-xs sm:text-sm px-4 drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)] m-0! p-0! mb-0!">
                    {tab.description}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </main>
  );
}
