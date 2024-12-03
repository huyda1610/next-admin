export type FormItemType = FormItemInput;

type DefaultFormItem = {
  id: string;
};

type FormItemInput = DefaultFormItem & {
  type: 'input';
};
