import { FormInputType } from '@components/shadcn/components/form/input';

export type FormItemType = FormItemInput;

type DefaultFormItem = {
  id: string;
  isDemo?: boolean;
};

type FormItemInput = DefaultFormItem & {
  type: 'input';
  componentControls: FormInputType;
};

export type ItemsType = {
  root: FormItemType[];
  form: FormItemType[];
};
