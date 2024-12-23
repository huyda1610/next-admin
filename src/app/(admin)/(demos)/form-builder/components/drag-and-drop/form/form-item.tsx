"use client";
import React from "react";
import { FormItemType } from "../../type";
import { cn } from "@/lib/utils";
import { Button } from "@/components/shadcn/ui/button";
import { GripVertical, Pencil, Trash2 } from "lucide-react";
import { FormField } from "@/components/shadcn/ui/form";
import NextFormInput from "@/components/shadcn/components/form/input";
import NextRenderIf from "@/components/utils/render-if";

type FormItemProps = FormItemType & {
  isDragging?: boolean;
  extra?: React.ReactNode;
};

export default function FormItem({
  id,
  type,
  isDemo,
  isDragging,
  extra,
  isDraggingForm,
  ...rest
}: FormItemProps) {
  const renderItem = (): React.ReactNode => {
    switch (type) {
      case "input":
        return (
          // <NextFormInput
          //   className="p-0"
          //   form={rest.form}
          //   label={rest.label}
          //   fieldName={rest.fieldName}
          //   description={rest.description}
          //   componentProps={{
          //     placeholder: rest.placeholder,
          //     disabled: isRoot,
          //     maxLength: 20,
          //   }}
          // />
          <FormField
            control={rest.form?.control}
            name={rest.fieldName}
            render={({ field }) => <NextFormInput field={field} />}
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
        "w-full h-full bg-white p-4 border-2 border-solid border-border-color rounded-xl flex relative" +
          " gap-2 w-full",
        isDemo && "border-primary border-dashed",
        isDragging && "border-primary border-dashed opacity-50",
      )}
    >
      <div className="w-full">{renderItem()}</div>
      {extra}
      <NextRenderIf ifTrue={isDraggingForm}>
        <div className="ease-in-out transition duration-400 flex flex-col justify-between gap-2">
          <Button variant="default" className="p-2 rounded-full">
            <Pencil className="size-2" />
          </Button>
          <Button className="p-2 rounded-full" variant="outline">
            <GripVertical />
          </Button>
          <Button variant="destructive" className="p-2 rounded-full">
            <Trash2 className="size-2" />
          </Button>
        </div>
      </NextRenderIf>
    </div>
  );
}
