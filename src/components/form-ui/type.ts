import { Control } from 'react-hook-form';

export type FormUIType = {
  label: string;
  fieldName: string;
  description?: string;
  control?: Control<any>;
};
