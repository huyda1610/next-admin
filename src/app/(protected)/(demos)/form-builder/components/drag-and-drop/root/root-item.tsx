"use client";
import React from "react";
import { ItemType } from "@/app/(protected)/(demos)/form-builder/type/type";
import { Card, CardContent } from "@/components/shadcn/ui/card";
import { NextIcon } from "@/components/shared/icon";
import { cn } from "@/lib/utils";

type PropsType = ItemType & {
  isDragging?: boolean;
};

function RootItem({ type, isDragging }: PropsType) {
  const getItem = () => {
    switch (type) {
      case "number":
        return {
          icon: <NextIcon.Number width={32} height={32}></NextIcon.Number>,
          title: "Number Field",
        };
      case "text-area":
        return {
          icon: <NextIcon.TextArea width={32} height={32}></NextIcon.TextArea>,
          title: "TextArea Field",
        };
      case "date-picker":
        return {
          icon: (
            <NextIcon.DatePicker width={32} height={32}></NextIcon.DatePicker>
          ),
          title: "Date Field",
        };
      case "select":
        return {
          icon: (
            <NextIcon.SelectList width={32} height={32}></NextIcon.SelectList>
          ),
          title: "Select Field",
        };
      case "checkbox":
        return {
          icon: (
            <NextIcon.TextField width={32} height={32}></NextIcon.TextField>
          ),
          title: "Checkbox Field",
        };
      case "password":
        return {
          icon: <NextIcon.Password width={32} height={32}></NextIcon.Password>,
          title: "Password Field",
        };
      case "slider":
        return {
          icon: <NextIcon.Slider width={32} height={32}></NextIcon.Slider>,
          title: "Slider Field",
        };
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
          <span className="text-xs font-semibold">{getItem()?.title}</span>
        </CardContent>
      </Card>
    );
  }

  return <div></div>;
}

export default RootItem;
