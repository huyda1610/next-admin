import { inputFormSchema } from "../components/dialog/input/form-schema.type";
import { z } from "zod";
import { FieldTypeEnum } from "@/app/(protected)/(demos)/form-builder/enum/FieldTypeEnum.enum";

export type FormItemType = FormItemInput;

type DefaultFormItem = {
  id: string;
  isDraggingForm: boolean;
};

type FormItemInput = DefaultFormItem &
  z.infer<typeof inputFormSchema> & {
    type: FieldTypeEnum.INPUT;
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
