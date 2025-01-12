import { inputFormSchema } from "../components/dialog/input/form-schema.type";
import { z } from "zod";
import { FieldTypeEnum } from "@/app/(protected)/(demos)/form-builder/enum/FieldTypeEnum.enum";
import { textAreaFormSchema } from "@/app/(protected)/(demos)/form-builder/components/dialog/text-area/form-schema.type";
import { numberFormSchema } from "@/app/(protected)/(demos)/form-builder/components/dialog/number/form-schema.type";
import { datePickerFormSchema } from "@/app/(protected)/(demos)/form-builder/components/dialog/date-picker/form-schema.type";
import { selectFormSchema } from "@/app/(protected)/(demos)/form-builder/components/dialog/select/form-schema.type";
import { checkboxFormSchema } from "@/app/(protected)/(demos)/form-builder/components/dialog/checkbox/form-schema.type";
import { passwordOptFormSchema } from "@/app/(protected)/(demos)/form-builder/components/dialog/password/form-schema.type";
import { sliderFormSchema } from "@/app/(protected)/(demos)/form-builder/components/dialog/slider/form-schema.type";

export type ItemsType = {
  root: FormItemType[];
  form: FormItemType[];
};

export type ItemSchemaType = z.infer<
  | typeof inputFormSchema
  | typeof textAreaFormSchema
  | typeof numberFormSchema
  | typeof datePickerFormSchema
  | typeof selectFormSchema
  | typeof checkboxFormSchema
  | typeof passwordOptFormSchema
  | typeof sliderFormSchema
>;

export type FormItemType =
  | FormItemInput
  | TextAreaItemInput
  | NumberItemInput
  | DatePickerItemInput
  | SelectItemInput
  | CheckboxItemInput
  | PasswordItemInput
  | SliderItemInput;

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

type SelectItemInput = DefaultFormItem &
  z.infer<typeof selectFormSchema> & {
    type: FieldTypeEnum.SELECT;
    value?: string;
  };

type CheckboxItemInput = DefaultFormItem &
  z.infer<typeof checkboxFormSchema> & {
    type: FieldTypeEnum.CHECKBOX;
    value?: boolean;
  };

type PasswordItemInput = DefaultFormItem &
  z.infer<typeof passwordOptFormSchema> & {
    type: FieldTypeEnum.PASSWORD;
    value?: string | number;
  };

type SliderItemInput = DefaultFormItem &
  z.infer<typeof sliderFormSchema> & {
    type: FieldTypeEnum.SLIDER;
    value?: string | number;
  };
