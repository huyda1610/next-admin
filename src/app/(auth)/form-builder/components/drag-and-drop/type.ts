import { z } from 'zod';
import { inputFormSchema } from '@app/(auth)/form-builder/components/dialog/input/form-schema.type';

export type FormItemType = FormItemInput;

type DefaultFormItem = {
  id: string;
  isDemo?: boolean;
  isDraggingForm?: boolean;
};

type FormItemInput = DefaultFormItem &
  z.infer<typeof inputFormSchema> & {
    type: 'input';
  };

export type ItemsType = {
  root: FormItemType[];
  form: FormItemType[];
};
