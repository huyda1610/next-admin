'use client';
import React from 'react';
import LayoutHeader from '@components/layout/header/page';

import '../styles/globals.scss';

type PropsType = {
  children: React.ReactNode;
};

export default function Layout({ children }: Readonly<PropsType>) {
  return (
    <html lang="en">
      <body className="bg-layoutBg">
        <LayoutHeader />

        {children}
      </body>
    </html>
  );
}
