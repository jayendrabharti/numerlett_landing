import type React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";
import ThemeProvider from "@/providers/ThemeProvider";
import NextAuthSessionProviders from "@/providers/NextAuthSessionProviders";

export function generateMetadata(): Metadata {
  return {
    title: `Numerlett - Technical & Marketing Solutions`,
    description:
      "Numerlett delivers comprehensive technical and marketing solutions including software development, AI automations, digital marketing, and innovative products to help businesses thrive.",
    openGraph: {
      title: `Numerlett - Technical & Marketing Solutions`,
      description:
        "Comprehensive technical and marketing solutions including software development, AI automations, digital marketing, and innovative products for modern businesses.",
      url: "https://www.numerlett.com",
      siteName: `Numerlett`,
      images: [
        {
          url: "/images/numerlett-logo-small.png",
          width: 358,
          height: 358,
        },
      ],
      locale: "en_US",
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
    <html
      lang="en"
      suppressHydrationWarning
      className="h-full overflow-hidden dark"
    >
      <body className={cn("h-full w-full flex flex-col overflow-hidden")}>
        <ThemeProvider>
          <NextAuthSessionProviders>
            {children}
            <Toaster richColors />
          </NextAuthSessionProviders>
        </ThemeProvider>
      </body>
    </html>
  );
}
