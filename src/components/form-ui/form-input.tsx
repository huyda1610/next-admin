import React from 'react';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@components/shadcn/ui/form';
import { Input } from '@components/shadcn/ui/input';
import { FormUIType } from '@components/form-ui/type';

type FormInputType = FormUIType & {};

function FormInput({ name, control, label, description, placeholder }: FormInputType) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input placeholder={placeholder} {...field} />
          </FormControl>
          <FormDescription>{description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default FormInput;
