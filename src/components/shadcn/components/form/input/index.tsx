import React from 'react';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@components/shadcn/ui/form';
import { Input, InputProps } from '@components/shadcn/ui/input';
import { FormUIType } from '../type';
import { useForm } from 'react-hook-form';
import { cn } from '@lib/utils';

export type FormInputType = FormUIType & {
  componentProps?: InputProps;
};

function NextFormInput({
  fieldName,
  form,
  label,
  description,
  required,
  componentProps,
}: FormInputType) {
  const internalForm = useForm();

  return (
    <FormField
      control={form ? form.control : internalForm.control}
      name={fieldName}
      render={({ field }) => (
        <FormItem className={form?.getFieldState(fieldName)?.invalid ? '' : 'pb-5'}>
          <FormLabel>
            <span className="font-semibold">{label}</span>{' '}
            {required && <span className="text-danger">*</span>}
          </FormLabel>
          <FormControl>
            <Input {...componentProps} {...field} className={cn(componentProps?.className)} />
          </FormControl>
          <FormDescription>{description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default NextFormInput;
