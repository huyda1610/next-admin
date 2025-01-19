"use client";
import NextFormItem from "@/components/shadcn/components/form/form-item";
import NextModalBody from "@/components/shadcn/components/modal/components/body";
import NextModalTitle from "@/components/shadcn/components/modal/components/title";
import { Button } from "@/components/shadcn/ui/button";
import { Form, FormField } from "@/components/shadcn/ui/form";
import { Input } from "@/components/shadcn/ui/input";
import { Textarea } from "@/components/shadcn/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";
import { selectFormSchema } from "./form-schema.type";
import NextRadioGroup from "@/components/shadcn/components/radio-group";
import { FieldControlsOptions } from "@/app/(protected)/(demos)/form-builder/enum/FieldControlsEnum.enum";
import { CirclePlus, Trash2 } from "lucide-react";
import React from "react";
import { randomGenerate } from "@/@core/utils/randomGenerate";

const schema = selectFormSchema;

type PropsType = {
  values: z.infer<typeof schema>;
  onSubmit: (values: z.infer<typeof schema>) => void;
  onClose: () => void;
};

function FormModal({ values, onSubmit: submit, onClose }: PropsType) {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      ...values,
    },
  });

  async function onSubmit(values: z.infer<typeof schema>) {
    submit(values);
    onClose();
  }

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "options",
  });

  return (
    <>
      <NextModalTitle>Edit Select Field</NextModalTitle>
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
                  <Textarea {...field} />
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

            <section>
              <div className="flex gap-1 items-center">
                <strong className="text-[14px]">Options</strong>
                <Button
                  variant="ghost"
                  onClick={(event) => {
                    event.preventDefault();
                    append({
                      value: (
                        "value" +
                        fields.length +
                        randomGenerate.number(1, fields.length)
                      ).toString(),
                      label: "label",
                    });
                  }}
                  size="icon"
                >
                  <CirclePlus size={18}></CirclePlus>
                </Button>
              </div>

              <div className="max-h-[222px] overflow-y-auto flex flex-col gap-1 px-3 py-2">
                {fields.map((field, index) => (
                  <div
                    key={field.id}
                    className="flex justify-between items-center gap-4"
                  >
                    <FormField
                      control={form.control}
                      name={`options.${index}.label`}
                      render={({ field }) => (
                        <NextFormItem
                          label={
                            <span className="text-xs font-normal">Label</span>
                          }
                          className="w-full"
                        >
                          <Input {...field} />
                        </NextFormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name={`options.${index}.value`}
                      render={({ field }) => (
                        <NextFormItem
                          label={
                            <span className="text-xs font-normal">Value</span>
                          }
                          className="w-full"
                        >
                          <Input {...field} />
                        </NextFormItem>
                      )}
                    />

                    <Button
                      className="mt-6 px-2"
                      variant="ghost"
                      size="icon"
                      onClick={() => remove(index)}
                    >
                      <Trash2 className="text-destructive" size={16} />
                    </Button>
                  </div>
                ))}
              </div>
            </section>

            <FormField
              control={form.control}
              name="controls"
              render={({ field }) => (
                <NextFormItem label="Controls">
                  <NextRadioGroup
                    className="flex flex-row items-center gap-6"
                    options={FieldControlsOptions}
                    defaultValue={field.value}
                    onValueChange={field.onChange}
                  />
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

export default FormModal;
