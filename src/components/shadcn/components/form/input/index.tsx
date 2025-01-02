import React from "react";
import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/shadcn/ui/form";
import { Input, InputProps } from "@/components/shadcn/ui/input";
import { FormUIType } from "../type";
import NextRenderIf from "@/components/utils/render-if";

export type FormInputType = FormUIType & {
  componentProps?: InputProps;
};

function NextFormInput({
  field,
  componentProps,
  label,
  description,
}: FormInputType) {
  return (
    <FormItem>
      <FormLabel>{label}</FormLabel>
      <FormControl>
        <Input {...field} {...(componentProps ?? {})} />
      </FormControl>
      <NextRenderIf ifTrue={description}>
        <FormDescription>{description}</FormDescription>
      </NextRenderIf>
      <FormMessage />
    </FormItem>
  );
}

export default NextFormInput;
