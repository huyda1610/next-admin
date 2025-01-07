import { inputFormSchema } from "../components/dialog/input/form-schema.type";
import { z } from "zod";
import { FieldTypeEnum } from "@/app/(protected)/(demos)/form-builder/enum/FieldTypeEnum.enum";
import { textAreaFormSchema } from "@/app/(protected)/(demos)/form-builder/components/dialog/text-area/form-schema.type";
import { numberFormSchema } from "@/app/(protected)/(demos)/form-builder/components/dialog/number/form-schema.type";

export type FormItemType = FormItemInput | TextAreaItemInput | NumberItemInput;

type DefaultFormItem = {
  id: string;
  isDraggingForm: boolean;
};

type FormItemInput = DefaultFormItem &
  z.infer<typeof inputFormSchema> & {
    type: FieldTypeEnum.INPUT;
  };

type TextAreaItemInput = DefaultFormItem &
  z.infer<typeof textAreaFormSchema> & {
    type: FieldTypeEnum.TEXT_AREA;
  };

type NumberItemInput = DefaultFormItem &
  z.infer<typeof numberFormSchema> & {
    type: FieldTypeEnum.NUMBER;
  };

export type ItemsType = {
  root: FormItemType[];
  form: FormItemType[];
};
