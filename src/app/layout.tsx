import type { Metadata } from 'next';
import '../styles/globals.scss';
import React from 'react';

export const metadata: Metadata = {
  // icons: {
  //   shortcut: './',
  // },
  title: 'Next Admin',
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
