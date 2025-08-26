import type React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";
import NavBar from "@/components/NavBar";
import Main from "@/components/Main";
import Footer from "@/components/Footer";
import ThemeProvider from "@/providers/ThemeProvider";

export const metadata: Metadata = {
  title: "Numerlett - Revolutionize Your Retail Business",
  description:
    "SEED is the comprehensive retail management system that streamlines operations, boosts efficiency, and drives growth for modern businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full overflow-hidden">
      <body className={cn("h-full w-full flex flex-col overflow-hidden")}>
        <ThemeProvider>
          <NavBar />
          <Main
            className={cn(
              "flex w-full flex-col items-center overflow-y-auto overflow-x-hidden flex-1"
            )}
          >
            {children}
            <Footer />
          </Main>
          <Toaster richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
