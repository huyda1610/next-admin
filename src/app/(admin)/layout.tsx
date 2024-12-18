"use client";

import { Sidebar } from "@/components/layout/sidebar";
import { useSidebar } from "@/hooks/use-sidebar";
import { useStore } from "@/hooks/use-store";
import { cn } from "@/lib/utils";
import React, { Suspense } from "react";
import { Navbar } from "@/components/layout/navbar";
import Loading from "./loading";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const sidebar = useStore(useSidebar, (x) => x);
  if (!sidebar) return null;
  const { getOpenState, settings } = sidebar;

  return (
    <>
      <Sidebar />
      <main
        className={cn(
          "min-h-screen transition-[margin-left] ease-in-out duration-300 overflow-x-hidden",
          !settings.disabled && (!getOpenState() ? "lg:ml-[90px]" : "lg:ml-64"),
        )}
      >
        <Navbar />
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </main>
    </>
  );
}
