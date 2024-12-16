"use client";

import { Sidebar } from "@/components/layout/sidebar";
import { useSidebar } from "@/hooks/use-sidebar";
import { useStore } from "@/hooks/use-store";
import { cn } from "@/lib/utils";
import React from "react";
import { Navbar } from "@/components/layout/navbar";

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
          "min-h-screen",
          !settings.disabled && (!getOpenState() ? "lg:ml-[90px]" : "lg:ml-64"),
        )}
      >
        <Navbar title={"abc"} />
        <div className="bg-background">{children}</div>
      </main>
    </>
  );
}
