import {
  ChartArea,
  LayoutGrid,
  LucideIcon,
  SquareMousePointer,
} from "lucide-react";

type Submenu = {
  href: string;
  label: string;
  active?: boolean;
};

type Menu = {
  href: string;
  label: string;
  active?: boolean;
  icon: LucideIcon;
  submenus?: Submenu[];
};

type Group = {
  groupLabel: string;
  menus: Menu[];
};

export function getMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: "/analytics",
          label: "Analytics",
          icon: ChartArea,
          submenus: [],
        },
        {
          href: "/workspace",
          label: "Workspace",
          icon: LayoutGrid,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: "Demos",
      menus: [
        {
          href: "/form-builder",
          label: "Form Builder",
          icon: SquareMousePointer,
          submenus: [],
        },
      ],
    },
  ];
}
