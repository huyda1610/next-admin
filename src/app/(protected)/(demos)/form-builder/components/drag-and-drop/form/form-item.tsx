"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { FormField } from "@/components/shadcn/ui/form";
import { UseFormReturn } from "react-hook-form";
import InputDialog from "@/app/(protected)/(demos)/form-builder/components/dialog/input";
import { Button } from "@/components/shadcn/ui/button";
import { Trash2 } from "lucide-react";
import { FormDragHandle } from "@/app/(protected)/(demos)/form-builder/components/drag-and-drop/form/sortable-item";
import { z } from "zod";
import { inputFormSchema } from "@/app/(protected)/(demos)/form-builder/components/dialog/input/form-schema.type";
import NextFormItem from "@/components/shadcn/components/form/form-item";
import { Input } from "@/components/shadcn/ui/input";
import { FormItemType } from "@/app/(protected)/(demos)/form-builder/type/type";
import { FieldTypeEnum } from "@/app/(protected)/(demos)/form-builder/enum/FieldTypeEnum.enum";

type FormItemProps = {
  form?: UseFormReturn;
  handleRemoveAction: (id: string) => void;
  handleEditAction: (
    id: string,
    values: z.infer<typeof inputFormSchema>,
  ) => void;
  item: FormItemType;
  isDragging?: boolean;
};

export default function FormItem({
  form,
  handleRemoveAction,
  handleEditAction,
  item,
  isDragging,
}: FormItemProps) {
  const renderItem = (): React.ReactNode => {
    if (!form) {
      switch (item.type) {
        case FieldTypeEnum.INPUT:
          return (
            <NextFormItem label={item.label} description={item.description}>
              <Input placeholder={item.placeholder} />
            </NextFormItem>
          );
        default:
          return <></>;
      }
    }

    switch (item.type) {
      case FieldTypeEnum.INPUT:
        return (
          <FormField
            control={form.control}
            name={item.fieldName}
            render={({ field }) => (
              <NextFormItem label={item.label} description={item.description}>
                <Input {...field} placeholder={item.placeholder} />
              </NextFormItem>
            )}
          />
        );
      default:
        return <></>;
    }
  };

  return (
    <div
      id={item.id}
      className={cn(
        isDragging &&
          "border-2 border-solid border-border rounded-lg p-1 px-2 bg-background",
        "relative group",
      )}
    >
      <div className="w-full">{renderItem()}</div>
      {/*Button*/}
      <div className="absolute -left-12 top-1/2 flex -translate-y-1/2 flex-col gap-1 opacity-0 transition-opacity group-hover:opacity-100">
        <InputDialog
          values={item}
          onSubmit={(values) => {
            handleEditAction(item.id, values);
          }}
        />

        <Button
          variant="ghost"
          size="icon"
          onClick={() => handleRemoveAction(item.id)}
          className="p-0"
        >
          <Trash2 className="text-destructive" size={16} />
        </Button>
      </div>
      <div className="absolute -right-12 top-1/2 flex -translate-y-1/2 flex-col gap-1 opacity-0 transition-opacity group-hover:opacity-100">
        <FormDragHandle />
      </div>
    </div>
  );
}
