import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";

import "../styles/globals.css";
import { ThemeProvider } from "@/components/provider/theme-provider";
import React from "react";

const renderMetaData = (): string => {
  if (process.env.APP_URL) return process.env.APP_URL;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return `http://localhost:${process.env.PORT ?? 3000}`;
};

export const metadata: Metadata = {
  metadataBase: new URL(renderMetaData()),
  title: "Next Admin",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={GeistSans.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
