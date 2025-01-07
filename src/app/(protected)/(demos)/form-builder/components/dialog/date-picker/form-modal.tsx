"use client";
import NextFormItem from "@/components/shadcn/components/form/form-item";
import NextFormItemCheckBox from "@/components/shadcn/components/form/form-item-checkbox";
import NextModalBody from "@/components/shadcn/components/modal/components/body";
import NextModalTitle from "@/components/shadcn/components/modal/components/title";
import { Button } from "@/components/shadcn/ui/button";
import { Checkbox } from "@/components/shadcn/ui/checkbox";
import { Form, FormField } from "@/components/shadcn/ui/form";
import { Input } from "@/components/shadcn/ui/input";
import { Textarea } from "@/components/shadcn/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { datePickerFormSchema } from "./form-schema.type";

const schema = datePickerFormSchema;

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

            <div className="flex gap-2">
              <FormField
                control={form.control}
                name="required"
                render={({ field }) => (
                  <NextFormItemCheckBox label="Required">
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      disabled={form.watch("disabled")}
                    />
                  </NextFormItemCheckBox>
                )}
              />

              <FormField
                control={form.control}
                name="disabled"
                render={({ field }) => (
                  <NextFormItemCheckBox label="Disabled">
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      disabled={form.watch("required")}
                    />
                  </NextFormItemCheckBox>
                )}
              />
            </div>

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
