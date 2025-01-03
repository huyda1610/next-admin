import React from "react";
import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/shadcn/ui/form";
import NextRenderIf from "@/components/utils/render-if";

export type FormItemType = {
  label?: string;
  description?: string;
  required?: boolean;
  children: React.ReactElement;
};

function NextFormItem({
  label,
  description,
  required,
  children,
}: FormItemType) {
  return (
    <FormItem>
      <FormLabel>
        {label} {required && <span className="text-red-500">*</span>}
      </FormLabel>
      <FormControl>{children}</FormControl>
      <NextRenderIf ifTrue={description}>
        <FormDescription>{description}</FormDescription>
      </NextRenderIf>
      <FormMessage />
    </FormItem>
  );
}

export default NextFormItem;
