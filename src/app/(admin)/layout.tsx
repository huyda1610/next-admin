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
          "h-screen ",
          !settings.disabled && (!getOpenState() ? "lg:ml-[90px]" : "lg:ml-64"),
        )}
      >
        <Navbar />
        <Suspense fallback={<Loading />}>
          <div className="bg-backgroundDeep min-h-screen overflow-y-auto">
            {children}
          </div>
        </Suspense>
      </main>
    </>
  );
}
