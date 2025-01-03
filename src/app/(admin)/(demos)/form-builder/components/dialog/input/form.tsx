"use client";
import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField } from "@/components/shadcn/ui/form";
import { Button } from "@/components/shadcn/ui/button";
import { inputFormSchema } from "./form-schema.type";
import NextModalTitle from "@/components/shadcn/components/modal/components/title";
import NextModalBody from "@/components/shadcn/components/modal/components/body";
import NextFormItem from "@/components/shadcn/components/form/form-item";
import { Input } from "@/components/shadcn/ui/input";

type PropsType = {
  values: z.infer<typeof inputFormSchema>;
  onSubmit: (values: z.infer<typeof inputFormSchema>) => void;
  onClose: () => void;
};

function InputForm({ values, onSubmit: submit, onClose }: PropsType) {
  const form = useForm({
    resolver: zodResolver(inputFormSchema),
    defaultValues: {
      ...values,
    },
  });

  async function onSubmit(values: z.infer<typeof inputFormSchema>) {
    submit(values);
    onClose();
  }

  return (
    <>
      <NextModalTitle>Edit Input Field</NextModalTitle>
      <NextModalBody className="pb-3">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-6"
          >
            <FormField
              control={form.control}
              name="label"
              render={({ field }) => (
                <NextFormItem label="Label">
                  <Input {...field} />
                </NextFormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <NextFormItem label="Description">
                  <Input {...field} />
                </NextFormItem>
              )}
            />

            <FormField
              control={form.control}
              name="placeholder"
              render={({ field }) => (
                <NextFormItem label="Placeholder">
                  <Input {...field} />
                </NextFormItem>
              )}
            />

            <FormField
              control={form.control}
              name="fieldName"
              render={({ field }) => (
                <NextFormItem label="FieldName">
                  <Input {...field} />
                </NextFormItem>
              )}
            />

            <div className="w-full flex justify-end">
              <Button type="submit">Save Changes</Button>
            </div>
          </form>
        </Form>
      </NextModalBody>
    </>
  );
}

export default InputForm;
