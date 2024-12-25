import { inputFormSchema } from "./dialog/input/form-schema.type";
import { z } from "zod";

export type FormItemType = FormItemInput;

type DefaultFormItem = {
  id: string;
  isDraggingForm: boolean;
};

type FormItemInput = DefaultFormItem &
  z.infer<typeof inputFormSchema> & {
    type: "input";
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
