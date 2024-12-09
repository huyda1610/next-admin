import { UseFormReturn } from 'react-hook-form';

export type FormUIType = {
  label: string;
  fieldName: string;
  description?: string;
  required?: boolean;
  className?: string;
  form?: UseFormReturn<any>;
};
