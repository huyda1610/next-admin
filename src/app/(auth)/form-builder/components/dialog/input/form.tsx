'use client';
import React from 'react';
import NextDialog from '@components/shadcn/components/dialog';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from '@components/shadcn/ui/form';
import { Button } from '@components/shadcn/ui/button';
import NextFormInput, { FormInputType } from '@components/shadcn/components/form/input';

type PropsType = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  componentControls: FormInputType;
};

const formSchema = z.object({
  label: z.string(),
  description: z.string(),
  placeholder: z.string(),
  name: z.string().min(1, {
    message: 'Field is required!',
  }),
});

function InputForm({ open, setOpen, componentControls }: PropsType) {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      label: componentControls?.label,
      description: componentControls?.description ?? '',
      placeholder: componentControls?.componentProps?.placeholder ?? '',
      name: componentControls?.fieldName,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {}

  return (
    <NextDialog
      open={open}
      setOpen={setOpen}
      header={{
        title: 'Edit Input Field',
      }}
      size="xl"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <NextFormInput form={form} fieldName="label" label="Label" />
          <NextFormInput form={form} fieldName="description" label="Description" />
          <NextFormInput form={form} fieldName="placeholder" label="Placeholder" />
          <NextFormInput form={form} fieldName="name" label="Name" required />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </NextDialog>
  );
}

export default InputForm;
