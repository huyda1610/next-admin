"use client";
import React from "react";
import { FormItemType } from "@/app/(protected)/(demos)/form-builder/type/type";
import { Card, CardContent } from "@/components/shadcn/ui/card";
import { NextIcon } from "@/components/shared/icon";
import { cn } from "@/lib/utils";
import { FieldTypeEnum } from "@/app/(protected)/(demos)/form-builder/enum/FieldTypeEnum.enum";

type PropsType = {
  type: FormItemType["type"];
  isDragging?: boolean;
};

function RootItem({ type, isDragging }: PropsType) {
  const getItem = () => {
    switch (type) {
      case FieldTypeEnum.INPUT:
        return {
          icon: (
            <NextIcon.TextField width={32} height={32}></NextIcon.TextField>
          ),
          title: "Text Field",
        };
      case FieldTypeEnum.NUMBER:
        return {
          icon: <NextIcon.Number width={32} height={32}></NextIcon.Number>,
          title: "Number Field",
        };
      case FieldTypeEnum.TEXT_AREA:
        return {
          icon: <NextIcon.TextArea width={32} height={32}></NextIcon.TextArea>,
          title: "TextArea Field",
        };
      case FieldTypeEnum.DATE_PICKER:
        return {
          icon: (
            <NextIcon.DatePicker width={32} height={32}></NextIcon.DatePicker>
          ),
          title: "Date Field",
        };
      case FieldTypeEnum.SELECT:
        return {
          icon: (
            <NextIcon.SelectList width={32} height={32}></NextIcon.SelectList>
          ),
          title: "Select Field",
        };
      case FieldTypeEnum.CHECKBOX:
        return {
          icon: <NextIcon.CheckBox width={32} height={32}></NextIcon.CheckBox>,
          title: "Checkbox Field",
        };
      case FieldTypeEnum.PASSWORD_OPT:
        return {
          icon: <NextIcon.Password width={32} height={32}></NextIcon.Password>,
          title: "Password OPT Field",
        };
      case FieldTypeEnum.SLIDER:
        return {
          icon: <NextIcon.Slider width={32} height={32}></NextIcon.Slider>,
          title: "Slider Field",
        };
      default:
        return {
          icon: <></>,
          title: "",
        };
    }
  };

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

export default RootItem;
