import { UseFormReturn } from "react-hook-form";

export type FormItemType = FormItemInput;

type DefaultFormItem = {
  id: string;
  isDemo?: boolean;
  isDraggingForm?: boolean;
  form?: UseFormReturn<any>;
};

// type FormItemInput = DefaultFormItem &
//   z.infer<typeof inputFormSchema> & {
//     type: 'input';
//   };

type FormItemInput = DefaultFormItem &
  ItemType & {
    fieldName: string;
  };

export type ItemsType = {
  root: FormItemType[];
  form: FormItemType[];
};

export type ItemType = {
  type:
    | "input"
    | "checkbox"
    | "date-picker"
    | "number"
    | "password"
    | "select"
    | "slider"
    | "text-area";
};
