'use client';
import React from 'react';
import Sidebar from '@components/layout/sidebar';
import Header from '@components/layout/header/header';

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <article className="flex h-full w-full">
      <Sidebar />
      <section className="flex flex-1 flex-col overflow-hidden">
        <Header />

        <div className=" bg-white-background relative text-black overflow-x-hidden overflow-auto h-full w-full">
          {children}
        </div>
      </section>
    </article>
  );
}
