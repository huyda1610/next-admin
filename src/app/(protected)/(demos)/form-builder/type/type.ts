import { inputFormSchema } from "../components/dialog/input/form-schema.type";
import { z } from "zod";
import { FieldTypeEnum } from "@/app/(protected)/(demos)/form-builder/enum/FieldTypeEnum.enum";
import { textAreaFormSchema } from "@/app/(protected)/(demos)/form-builder/components/dialog/text-area/form-schema.type";

export type FormItemType = FormItemInput | TextAreaItemInput;

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

export type ItemsType = {
  root: FormItemType[];
  form: FormItemType[];
};
