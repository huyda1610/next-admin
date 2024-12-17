"use client";

import { Sidebar } from "@/components/layout/sidebar";
import { useSidebar } from "@/hooks/use-sidebar";
import { useStore } from "@/hooks/use-store";
import { cn } from "@/lib/utils";
import React, { Suspense } from "react";
import { Navbar } from "@/components/layout/navbar";
import Loading from "@/app/(admin)/loading";

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
          "max-h-screen overflow-hidden",
          !settings.disabled && (!getOpenState() ? "lg:ml-[90px]" : "lg:ml-64"),
        )}
      >
        <Navbar />
        <Suspense fallback={<Loading />}>
          <div className="bg-backgroundDeep overflow-y-auto h-screen">
            {children}
          </div>
        </Suspense>
      </main>
    </>
  );
}
