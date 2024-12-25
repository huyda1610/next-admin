import { ModeToggle } from "@/components/layout/navbar/mode-toggle";
import { UserNav } from "@/components/layout/navbar/user-nav";
import { SheetMenu } from "@/components/layout/navbar/sheet-menu";
import { Button } from "@/components/shadcn/ui/button";
import { PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { useStore } from "zustand";
import { useSidebar } from "@/hooks/zustand-store/use-sidebar";

export function Navbar() {
  const sidebar = useStore(useSidebar, (x) => x);
  const { settings, setSettings } = sidebar;

  if (!sidebar) return null;

  return (
    <header className="sticky top-0 z-10 w-full bg-background shadow backdrop-blur dark:shadow-secondary">
      <div className="mx-4 sm:mx-8 flex h-14 items-center">
        <div className="flex items-center space-x-4 lg:space-x-0">
          <SheetMenu />
          <Button
            className="h-8 p-2 max-lg:hidden"
            variant="ghost"
            size="icon"
            onClick={() => setSettings({ disabled: !settings.disabled })}
          >
            {settings.disabled ? (
              <PanelLeftOpen size={20} />
            ) : (
              <PanelLeftClose size={20} />
            )}
          </Button>
          {/*<h1 className="font-bold">{title}</h1>*/}
        </div>
        <div className="flex flex-1 items-center justify-end">
          <ModeToggle />
          <UserNav />
        </div>
      </div>
    </header>
  );
}
