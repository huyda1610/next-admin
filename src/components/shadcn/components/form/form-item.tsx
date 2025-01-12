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
  label?: React.ReactNode;
  description?: string;
  required?: boolean;
  children: React.ReactElement;
  className?: string;
};

function NextFormItem({
  label,
  description,
  required,
  children,
  className,
}: FormItemType) {
  return (
    <FormItem className={className}>
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
