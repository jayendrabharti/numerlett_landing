"use client";

import { cn } from "@/lib/utils";
import { CalendarDays, InfoIcon, Menu, Package2, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { FaCube, FaHome } from "react-icons/fa";
import AnimatedLogo from "./AnimatedLogo";
import UserButton from "./auth/UserButton";
import GoogleButton from "./auth/GoogleButton";

export const NavBarLinks = [
  { name: "Home", href: "/", icon: FaHome },
  { name: "Products", href: "/products", icon: Package2 },
  { name: "Services", href: "/services", icon: FaCube },
  { name: "Book Appointment", href: "/book-appointment", icon: CalendarDays },
];

export default function NavBar() {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState(false);

  const isActive = (href: string) => {
    if (!pathname) return false;
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href);
  };

  useEffect(() => {
    console.log(pathname);
  }, [pathname]);

  return (
    <nav
      className={cn(
        `w-full`,
        `sticky top-0 left-0 z-50`,
        `flex flex-row items-center py-4`,
        `transition-all duration-300`,
        "backdrop-blur-xl bg-transparent",
        expanded && "max-md:bg-background/80",
      )}
    >
      <div
        className={cn(
          "flex items-center justify-between",
          "mx-auto px-5 md:px-10",
          "w-full space-x-3",
        )}
      >
        <AnimatedLogo />

        <div
          className={cn(
            "backdrop-blur",
            `flex flex-col md:flex-row`,
            `items-start md:items-center`,
            `justify-center`,
            `gap-3 md:gap-1.5`,
            `top-full left-0 w-full`,
            "px-5 py-4 md:p-0",
            "absolute md:static",
            "transition-all duration-200",
            "shadow-lg md:shadow-none",
            expanded
              ? "translate-y-0 scale-y-100"
              : "-translate-y-1/2 scale-y-0 md:translate-y-0 md:scale-y-100",
            `border-border border-b md:border-0`,
            expanded && "max-md:bg-background/95",
          )}
        >
          {NavBarLinks.map((link, index) => {
            const active = isActive(link.href);

            return (
              <Link
                key={index}
                prefetch={true}
                href={link.href}
                scroll={true}
                onClick={() => setExpanded(false)}
                className={cn(
                  "flex flex-row items-center font-heading text-sm uppercase tracking-wider",
                  "rounded-full px-5 py-2 font-semibold md:px-4 md:py-1.5",
                  active && "bg-primary/10 text-primary",
                  !active &&
                    "hover:bg-secondary/80 text-muted-foreground hover:text-foreground",
                  "ring-primary/50 active:ring-2",
                  "transition-all duration-300",
                  "w-full md:w-max",
                )}
              >
                <link.icon className="mr-1.5 size-4" />
                {link.name}
              </Link>
            );
          })}
        </div>

        <UserButton
          className="ml-auto"
          unauthenticatedComponent={
            <GoogleButton text="Login" className="ml-auto" />
          }
        />

        <Button
          variant={"ghost"}
          size={"icon"}
          onClick={(e) => {
            setExpanded((prev) => !prev);
            e.stopPropagation();
          }}
          className={cn("relative flex md:hidden")}
        >
          <X
            className={cn(
              "absolute transition-all duration-200",
              expanded ? "scale-200 rotate-180" : "scale-0 rotate-0",
            )}
          />

          <Menu
            className={cn(
              "absolute transition-all duration-200",
              expanded ? "scale-0 rotate-180" : "scale-200 rotate-0",
            )}
          />
        </Button>
      </div>
    </nav>
  );
}
