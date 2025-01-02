"use client";
import React from "react";
import { FormItemType } from "../../type";
import { cn } from "@/lib/utils";
import { FormField } from "@/components/shadcn/ui/form";
import NextFormInput from "@/components/shadcn/components/form/input";
import { UseFormReturn } from "react-hook-form";
import InputDialog from "@/app/(admin)/(demos)/form-builder/components/dialog/input";
import { Button } from "@/components/shadcn/ui/button";
import { Trash2 } from "lucide-react";
import { FormDragHandle } from "@/app/(admin)/(demos)/form-builder/components/drag-and-drop/form/sortable-item";
import { z } from "zod";
import { inputFormSchema } from "@/app/(admin)/(demos)/form-builder/components/dialog/input/form-schema.type";

type FormItemProps = FormItemType & {
  isDragging?: boolean;
  form: UseFormReturn;
  handleRemoveAction: (id: string) => void;
  handleEditAction: (
    id: string,
    values: z.infer<typeof inputFormSchema>,
  ) => void;
};

export default function FormItem({
  id,
  type,
  isDragging,
  handleRemoveAction,
  handleEditAction,
  ...rest
}: FormItemProps) {
  const renderItem = (): React.ReactNode => {
    switch (type) {
      case "input":
        return (
          <FormField
            control={rest.form?.control}
            name={rest.fieldName}
            render={({ field }) => <NextFormInput {...rest} field={field} />}
          />
        );
      default:
        return <></>;
    }
  };

  return (
    <div
      id={id}
      className={cn(
        isDragging && "border-primary border-dashed opacity-50",
        "relative group",
      )}
    >
      <div className="w-full">{renderItem()}</div>
      {/*Button*/}
      <div className="absolute -left-12 top-1/2 flex -translate-y-1/2 flex-col gap-1 opacity-0 transition-opacity group-hover:opacity-100">
        <InputDialog
          values={{ ...rest }}
          onSubmit={(values) => {
            handleEditAction(id, values);
          }}
        />

        <Button
          variant="ghost"
          size="icon"
          onClick={() => handleRemoveAction(id)}
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
