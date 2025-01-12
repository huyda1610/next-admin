"use client";
import NextFormItem from "@/components/shadcn/components/form/form-item";
import NextModalBody from "@/components/shadcn/components/modal/components/body";
import NextModalTitle from "@/components/shadcn/components/modal/components/title";
import { Button } from "@/components/shadcn/ui/button";
import { Form, FormField } from "@/components/shadcn/ui/form";
import { Input } from "@/components/shadcn/ui/input";
import { Textarea } from "@/components/shadcn/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { checkboxFormSchema } from "./form-schema.type";
import NextRadioGroup from "@/components/shadcn/components/radio-group";
import { FieldControlsOptions } from "@/app/(protected)/(demos)/form-builder/enum/FieldControlsEnum.enum";

const schema = checkboxFormSchema;

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

  return (
    <>
      <NextModalTitle>Edit Checkbox Field</NextModalTitle>
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
              name="fieldName"
              render={({ field }) => (
                <NextFormItem label="FieldName">
                  <Input {...field} />
                </NextFormItem>
              )}
            />

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
