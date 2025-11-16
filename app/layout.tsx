import type React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";
import ThemeProvider from "@/providers/ThemeProvider";
import { DataProvider } from "@/providers/DataProvider";
import NextAuthSessionProviders from "@/providers/NextAuthSessionProviders";

export function generateMetadata(): Metadata {
  return {
    title: `Numerlett`,
    description:
      "SEED is the comprehensive retail management system that streamlines operations, boosts efficiency, and drives growth for modern businesses.",
    openGraph: {
      title: `Numerlett`,
      description:
        "SEED is the comprehensive retail management system that streamlines operations, boosts efficiency, and drives growth for modern businesses.",
      url: "https://www.numerlett.com",
      siteName: `Numerlett`,
      images: [
        {
          url: "/images/numerlett-logo-small.png",
          width: 358,
          height: 358,
        },
      ],
      locale: "en_IN",
      type: "website",
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full overflow-hidden">
      <body className={cn("h-full w-full flex flex-col overflow-hidden")}>
        <ThemeProvider>
          <NextAuthSessionProviders>
            <DataProvider>
              {children}
              <Toaster richColors />
            </DataProvider>
          </NextAuthSessionProviders>
        </ThemeProvider>
      </body>
    </html>
  );
}
