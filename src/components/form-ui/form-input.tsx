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
import { FormUIType } from '@components/form-ui/type';
import { useForm } from 'react-hook-form';

export type FormInputType = FormUIType & {
  componentProps?: InputProps;
};

function FormInput({ fieldName, control, label, description, componentProps }: FormInputType) {
  const form = useForm();

  return (
    <FormField
      control={control ?? form.control}
      name={fieldName}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input {...componentProps} {...field} />
          </FormControl>
          <FormDescription>{description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default FormInput;
