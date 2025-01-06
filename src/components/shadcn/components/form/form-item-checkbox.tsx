import React from "react";
import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
} from "@/components/shadcn/ui/form";
import NextRenderIf from "@/components/utils/render-if";

export type FormItemType = {
  label?: string;
  description?: string;
  required?: boolean;
  children: React.ReactElement;
};

function NextFormItemCheckBox({
  label,
  description,
  required,
  children,
}: FormItemType) {
  return (
    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow">
      <FormControl>{children}</FormControl>
      <div className="space-y-1 leading-none">
        <FormLabel>
          {label}
          {required && <span className="text-red-500">*</span>}
        </FormLabel>
        <NextRenderIf ifTrue={description}>
          <FormDescription>{description}</FormDescription>
        </NextRenderIf>{" "}
      </div>
    </FormItem>
  );
}

export default NextFormItemCheckBox;
