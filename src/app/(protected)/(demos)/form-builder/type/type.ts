import { inputFormSchema } from "../components/dialog/input/form-schema.type";
import { z } from "zod";
import { FieldTypeEnum } from "@/app/(protected)/(demos)/form-builder/enum/FieldTypeEnum.enum";
import { textAreaFormSchema } from "@/app/(protected)/(demos)/form-builder/components/dialog/text-area/form-schema.type";
import { numberFormSchema } from "@/app/(protected)/(demos)/form-builder/components/dialog/number/form-schema.type";
import { datePickerFormSchema } from "@/app/(protected)/(demos)/form-builder/components/dialog/date-picker/form-schema.type";

export type ItemsType = {
  root: FormItemType[];
  form: FormItemType[];
};

export type FormItemType =
  | FormItemInput
  | TextAreaItemInput
  | NumberItemInput
  | DatePickerItemInput;

type DefaultFormItem = {
  id: string;
  isDraggingForm: boolean;
};

type FormItemInput = DefaultFormItem &
  z.infer<typeof inputFormSchema> & {
    type: FieldTypeEnum.INPUT;
    value?: string;
  };

type TextAreaItemInput = DefaultFormItem &
  z.infer<typeof textAreaFormSchema> & {
    type: FieldTypeEnum.TEXT_AREA;
    value?: string;
  };

type NumberItemInput = DefaultFormItem &
  z.infer<typeof numberFormSchema> & {
    type: FieldTypeEnum.NUMBER;
    value?: number;
  };

type DatePickerItemInput = DefaultFormItem &
  z.infer<typeof datePickerFormSchema> & {
    type: FieldTypeEnum.DATE_PICKER;
    value?: Date;
  };
