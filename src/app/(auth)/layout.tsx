'use client';
import React from 'react';
import Sidebar from '@components/layout/sidebar';
import Header from '@components/layout/header/header';

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

        <div className="w-full h-full bg-white-background relative text-black">{children}</div>
      </section>
    </article>
  );
}
