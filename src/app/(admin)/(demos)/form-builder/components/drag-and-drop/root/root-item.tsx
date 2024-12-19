"use client";
import React from "react";
import { ItemType } from "@/app/(admin)/(demos)/form-builder/components/type";
import { Card, CardContent } from "@/components/shadcn/ui/card";
import { NextIcon } from "@/components/shared/icon";
import { cn } from "@/lib/utils";

type PropsType = ItemType & {
  isDragging?: boolean;
};

function RootItem({ type, isDragging }: PropsType) {
  const getItem = () => {
    switch (type) {
      case "input":
      default:
        return {
          icon: (
            <NextIcon.TextField width={32} height={32}></NextIcon.TextField>
          ),
          title: "Text Field",
        };
    }
  };

  if (type === "input") {
    return (
      <Card
        className={cn(
          isDragging && "border-primary border-solid",
          "hover:bg-muted transition duration-200 ease-in-out",
        )}
      >
        <CardContent className="flex flex-col gap-2 px-4 py-2 justify-center items-center h-[120px] w-full">
          {getItem()?.icon}
          <span className="text-xs">{getItem()?.title}</span>
        </CardContent>
      </Card>
    );
  }

  return <div></div>;
}

export default RootItem;
