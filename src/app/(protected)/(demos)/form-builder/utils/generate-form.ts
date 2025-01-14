import { FieldTypeEnum } from "@/app/(protected)/(demos)/form-builder/enum/FieldTypeEnum.enum";
import { z } from "zod";
import { FieldControlsEnum } from "@/app/(protected)/(demos)/form-builder/enum/FieldControlsEnum.enum";
import { FORM_REQUIRED } from "@/@core/const";
import { FormItemType } from "@/app/(protected)/(demos)/form-builder/type/type";

export const generateForm = (items: FormItemType[]) => {
  return items.reduce(
    (acc: any, cur) => {
      switch (cur.type) {
        case FieldTypeEnum.NUMBER:
        case FieldTypeEnum.SLIDER:
          acc[cur.fieldName] = z
            .number()
            .optional()
            .refine(
              (data) => {
                if (data) return true;
                return cur.controls !== FieldControlsEnum.REQUIRED;
              },
              { message: FORM_REQUIRED },
            );
          break;
        case FieldTypeEnum.DATE_PICKER:
          acc[cur.fieldName] = z
            .date()
            .optional()
            .refine(
              (data) => {
                if (data) return true;
                return cur.controls !== FieldControlsEnum.REQUIRED;
              },
              { message: FORM_REQUIRED },
            );
          break;
        case FieldTypeEnum.CHECKBOX:
          acc[cur.fieldName] = z
            .boolean()
            .optional()
            .default(cur?.value ?? false)
            .refine(
              (data) => {
                if (data) return true;
                return cur.controls !== FieldControlsEnum.REQUIRED;
              },
              { message: FORM_REQUIRED },
            );
          break;
        default:
          acc[cur.fieldName] = z
            .string()
            .refine(
              (data) => {
                if (data) return true;
                return cur.controls !== FieldControlsEnum.REQUIRED;
              },
              { message: FORM_REQUIRED },
            )
            .optional();

          break;
      }

      return acc;
    },
    {} as Record<string, z.ZodString>,
  );
};
