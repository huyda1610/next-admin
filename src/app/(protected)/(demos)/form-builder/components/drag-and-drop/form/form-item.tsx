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
import { Textarea } from "@/components/shadcn/ui/textarea";
import TextAreaDialog from "@/app/(protected)/(demos)/form-builder/components/dialog/text-area";
import NumberDialog from "@/app/(protected)/(demos)/form-builder/components/dialog/number";

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
  const getDragItem = (placeholder: string): React.ReactElement => {
    switch (item.type) {
      case FieldTypeEnum.INPUT:
        return <Input placeholder={placeholder} />;
      case FieldTypeEnum.TEXT_AREA:
        return <Textarea placeholder={placeholder} />;
      case FieldTypeEnum.NUMBER:
        return <Input type="number" placeholder={placeholder} />;
      default:
        return <></>;
    }
  };

  const renderItem = (): React.ReactElement => {
    if (!form) {
      return (
        <NextFormItem label={item.label} description={item.description}>
          {getDragItem(item.placeholder)}
        </NextFormItem>
      );
    }

    switch (item.type) {
      case FieldTypeEnum.INPUT:
        return (
          <FormField
            control={form.control}
            name={item.fieldName}
            render={({ field }) => (
              <NextFormItem
                label={item.label}
                description={item.description}
                required={item.required}
              >
                <Input
                  {...field}
                  placeholder={item.placeholder}
                  disabled={item.disabled}
                />
              </NextFormItem>
            )}
          />
        );
      case FieldTypeEnum.TEXT_AREA:
        return (
          <FormField
            control={form.control}
            name={item.fieldName}
            render={({ field }) => (
              <NextFormItem
                label={item.label}
                description={item.description}
                required={item.required}
              >
                <Textarea
                  {...field}
                  placeholder={item.placeholder}
                  disabled={item.disabled}
                />
              </NextFormItem>
            )}
          />
        );
      case FieldTypeEnum.NUMBER:
        return (
          <FormField
            control={form.control}
            name={item.fieldName}
            render={({ field }) => (
              <NextFormItem
                label={item.label}
                description={item.description}
                required={item.required}
              >
                <Input
                  {...field}
                  type="number"
                  placeholder={item.placeholder}
                  disabled={item.disabled}
                  max={item?.max}
                  min={item?.min}
                  // Convert string value to number
                  onChange={(event) => field.onChange(+event.target.value)}
                  // Prevent empty string being passed to number field
                  value={field.value === undefined ? "" : field.value}
                />
              </NextFormItem>
            )}
          />
        );
      default:
        return <></>;
    }
  };

  const renderEditButton = (): React.ReactElement => {
    switch (item.type) {
      case FieldTypeEnum.INPUT:
        return (
          <InputDialog
            values={item}
            onSubmit={(values) => {
              handleEditAction(item.id, values);
            }}
          />
        );
      case FieldTypeEnum.TEXT_AREA:
        return (
          <TextAreaDialog
            values={item}
            onSubmit={(values) => {
              handleEditAction(item.id, values);
            }}
          />
        );
      case FieldTypeEnum.NUMBER:
        return (
          <NumberDialog
            values={item}
            onSubmit={(values) => {
              handleEditAction(item.id, values);
            }}
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
        {renderEditButton()}

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
