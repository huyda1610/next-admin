import React from 'react';
import Header from '@components/layout/header';
import Sidebar from '@components/layout/sidebar';

export default async function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <article className="flex w-full h-full">
      <Sidebar />
      <section className="flex flex-col w-full h-full">
        <Header />

        <section className="w-full h-full">{children}</section>
      </section>
    </article>
  );
}
