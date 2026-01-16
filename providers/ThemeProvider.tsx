"use client";

import { ThemeProvider as NextThemeProvider } from "next-themes";
import { Fragment, useEffect, useState } from "react";

export default function ThemeProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <NextThemeProvider
      attribute="class"
      storageKey="theme"
      defaultTheme="dark"
      forcedTheme="dark"
      enableSystem={false}
    >
      <Fragment key={mounted ? "mounted" : "unmounted"}>{children}</Fragment>
    </NextThemeProvider>
  );
}
