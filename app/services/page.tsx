"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Logo from "@/components/Logo";
import ThemeSwitch from "@/components/ThemeSwitch";

const TABS: { id: number; title: string; description: string; href: string }[] =
  [
    {
      id: 1,
      title: "TECH SERVICES",
      description:
        "Secure technical solutions, engineering support, and cloud integrations.",
      href: "/services/technical",
    },
    {
      id: 2,
      title: "MARKETING SERVICES",
      description:
        "Growth strategies, campaigns, and analytics to boost your brand.",
      href: "/services/marketing",
    },
    {
      id: 3,
      title: "PRODUCTS",
      description:
        "High-quality digital products designed for performance and scale.",
      href: "/products",
    },
  ];

export default function GoToPage() {
  const [activeId, setActiveId] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

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
      "text-foreground group even:bg-brand flex cursor-pointer flex-col items-center justify-center gap-6 text-4xl font-bold transition-all duration-300",
      active ? "flex-3" : "flex-1"
    );

  return (
    <main
      className="flex h-full min-h-screen flex-col overflow-hidden"
      ref={containerRef}
    >
      <div className="flex flex-row justify-between p-6">
        <span></span>
        <Logo />
        <ThemeSwitch />
      </div>
      {TABS.map((tab) => (
        <div
          className={TabClassName(activeId === tab.id)}
          key={tab.id}
          onMouseEnter={() => setActiveId(tab.id)}
          onMouseLeave={() => setActiveId(null)}
          onClick={() => setActiveId(tab.id)}
        >
          <span>{tab.title}</span>
          <AnimatePresence>
            {activeId === tab.id && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center gap-3"
              >
                <Link href={tab.href}>
                  <Button
                    variant={"secondary"}
                    size={"lg"}
                    className="bg-[#0003] text-xl text-inherit"
                  >
                    ENTER
                  </Button>
                </Link>
                <p className="text-foreground mt-2 max-w-prose text-center text-sm">
                  {tab.description}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </main>
  );
}
