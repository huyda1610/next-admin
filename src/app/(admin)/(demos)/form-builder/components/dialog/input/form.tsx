"use client";
import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/shadcn/ui/form";
import { Button } from "@/components/shadcn/ui/button";
import { inputFormSchema } from "./form-schema.type";
import NextModalTitle from "@/components/shadcn/components/modal/components/title";
import NextModalBody from "@/components/shadcn/components/modal/components/body";

type PropsType = {
  values: z.infer<typeof inputFormSchema>;
  onSubmit: (values: z.infer<typeof inputFormSchema>) => void;
};

function InputForm({ values, onSubmit: submit }: PropsType) {
  const form = useForm({
    resolver: zodResolver(inputFormSchema),
    defaultValues: {
      ...values,
    },
  });

  async function onSubmit(values: z.infer<typeof inputFormSchema>) {
    submit(values);
  }

  return (
    <>
      <NextModalTitle>Edit Input Field</NextModalTitle>
      <NextModalBody className="pb-3">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            {/*<FormField*/}
            {/*  control={form.control}*/}
            {/*  name="label"*/}
            {/*  render={({ field }) => <NextFormInput field={field} />}*/}
            {/*/>*/}

            {/*<NextFormInput form={form} fieldName="label" label="Label" />*/}
            {/*<NextFormInput*/}
            {/*  form={form}*/}
            {/*  fieldName="description"*/}
            {/*  label="Description"*/}
            {/*/>*/}
            {/*<NextFormInput*/}
            {/*  form={form}*/}
            {/*  fieldName="placeholder"*/}
            {/*  label="Placeholder"*/}
            {/*/>*/}
            {/*<NextFormInput*/}
            {/*  form={form}*/}
            {/*  fieldName="fieldName"*/}
            {/*  label="Field Name"*/}
            {/*  required*/}
            {/*/>*/}
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
