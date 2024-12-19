'use client';
import React from 'react';
import NextDialog from '@components/shadcn/components/dialog';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from '@components/shadcn/ui/form';
import { Button } from '@components/shadcn/ui/button';
import NextFormInput from '@components/shadcn/components/form/input';
import { inputFormSchema } from './form-schema.type';

type PropsType = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  values: z.infer<typeof inputFormSchema>;
  onSubmit: (values: z.infer<typeof inputFormSchema>) => void;
};

function InputForm({ open, setOpen, values, onSubmit: submit }: PropsType) {
  const form = useForm({
    resolver: zodResolver(inputFormSchema),
    defaultValues: {
      ...values,
    },
  });

  async function onSubmit(values: z.infer<typeof inputFormSchema>) {
    submit(values);
    setOpen(false);
  }

  return (
    <NextDialog
      open={open}
      setOpen={setOpen}
      header={{
        title: 'Edit Input Field',
      }}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <NextFormInput form={form} fieldName="label" label="Label" />
          <NextFormInput form={form} fieldName="description" label="Description" />
          <NextFormInput form={form} fieldName="placeholder" label="Placeholder" />
          <NextFormInput form={form} fieldName="fieldName" label="Field Name" required />
          <div className="w-full flex justify-end">
            <Button type="submit">Save Changes</Button>
          </div>
        </form>
      </Form>
    </NextDialog>
  );
}

export default InputForm;
