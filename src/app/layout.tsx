import type { Metadata } from 'next';
import '../styles/globals.scss';
import React from 'react';
import { APP_NAME } from '@core/const/app-const';

import '@core/type/string.ts';
import '@core/type/number.ts';

export const metadata: Metadata = {
  title: APP_NAME,
  description: '',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-white font-normal text-gray antialiased h-screen relative">
        {children}
      </body>
    </html>
  );
}
