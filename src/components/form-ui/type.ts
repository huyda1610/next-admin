import { Control } from 'react-hook-form';

export type FormUIType = {
  label: string;
  name: string;
  placeholder?: string;
  description?: string;
  control?: Control<any>;
};
