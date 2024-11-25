import type { Metadata } from 'next';
import '../styles/globals.css';
import React from 'react';

export const metadata: Metadata = {
  title: '',
  description: '',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-white font-plus-jakarta text-sm/[22px] font-normal text-gray antialiased h-screen relative">
        {children}
      </body>
    </html>
  );
}
