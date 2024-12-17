import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";

import "../styles/globals.css";
import { ThemeProvider } from "@/components/provider/theme-provider";
import { ProgressBar, ProgressBarProvider } from "react-transition-progress";
import React from "react";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.APP_URL
      ? `${process.env.APP_URL}`
      : process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : `http://localhost:${process.env.PORT || 3000}`,
  ),
  title: "Next Admin",
  description:
    "A stunning and functional retractable sidebar for Next.js built on top of shadcn/ui complete with desktop and mobile responsiveness.",
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
          <ProgressBarProvider>
            {/* I.e. using Tailwind CSS to show the progress bar with custom styling */}
            <ProgressBar className="fixed h-1 shadow-lg shadow-sky-500/20 bg-sky-500 top-0" />
            {children}
          </ProgressBarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
