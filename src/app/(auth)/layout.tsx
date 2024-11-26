'use client';
import React from 'react';
import Header from '@components/layout/Header/header';
import Sidebar from '@components/layout/sidebar';

// const Loader = () => {
//   const pathname = usePathname();
//   const searchParams = useSearchParams();
//
//   useEffect(() => {
//     const handleStart = () => NProgress.start();
//     const handleStop = () => NProgress.done();
//     handleStop();
//
//     return () => {
//       handleStart();
//     };
//   }, [pathname, searchParams]);
//
//   return <></>;
// };

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <article className="flex w-full h-full">
      <Sidebar />
      <section className="flex flex-col w-full h-full">
        <Header />

        <section className="w-full h-full bg-white-background relative">{children}</section>
      </section>
    </article>
  );
}
