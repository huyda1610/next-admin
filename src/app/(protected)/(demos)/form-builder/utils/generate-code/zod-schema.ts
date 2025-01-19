import * as z from "zod";
import { FormItemType } from "@/app/(protected)/(demos)/form-builder/type/type";
import { FieldTypeEnum } from "@/app/(protected)/(demos)/form-builder/enum/FieldTypeEnum.enum";
import { FieldControlsEnum } from "../../enum/FieldControlsEnum.enum";

const generateZodSchema = (formFields: FormItemType[]) => {
  const formSchemaObject: Record<string, z.ZodType<any, any>> = {};
  formFields.forEach((field) => {
    let fieldSchema: z.ZodTypeAny;
    switch (field.type) {
      case FieldTypeEnum.INPUT:
        fieldSchema = z.string();
        break;
      case FieldTypeEnum.TEXT_AREA:
        fieldSchema = z.string();
        break;
      case FieldTypeEnum.NUMBER:
        fieldSchema = z.number();
        break;
      case FieldTypeEnum.DATE_PICKER:
        fieldSchema = z.date();
        break;
      case FieldTypeEnum.SELECT:
        fieldSchema = z.string();
        break;
      case FieldTypeEnum.CHECKBOX:
        fieldSchema = z.boolean();
        break;
      case FieldTypeEnum.PASSWORD_OTP:
        fieldSchema = z.string();
        break;
      case FieldTypeEnum.SLIDER:
        fieldSchema = z.number();
        break;
      default:
        fieldSchema = z.string();
        break;
    }
    formSchemaObject[field.fieldName] = fieldSchema;
  });

  return z.object(formSchemaObject);
};

const zodSchemaToString = (
  schema: z.ZodTypeAny,
  key: string,
  formFields: FormItemType[],
): string => {
  const isRequired =
    formFields.find((field) => field.fieldName === key)?.controls ===
    FieldControlsEnum.REQUIRED;

  const requiredRefine: string = isRequired
    ? `.refine(
    (data) => {
      if (data) return true;
      return false;
    },
   { message: "Field is required!" },
  )`
    : "";

  if (schema instanceof z.ZodBoolean) {
    return "z.boolean().optional().default(false)" + requiredRefine;
  }

  if (schema instanceof z.ZodNumber) {
    return "z.number().optional()" + requiredRefine;
  }

  if (schema instanceof z.ZodString) {
    return "z.string().optional()" + requiredRefine;
  }

  if (schema instanceof z.ZodDate) {
    return `z.date().optional()` + requiredRefine;
  }

  return "z.unknown()";
};

export const generateCodeZodSchema = (formFields: FormItemType[]): string => {
  const schema = generateZodSchema(formFields);
  const schemaEntries = Object.entries(schema.shape)
    .map(([key, value]) => {
      return `  ${key.replaceAll(" ", "_")}: ${zodSchemaToString(value as z.ZodTypeAny, key, formFields)}`;
    })
    .join(",\n");

  return `const formSchema = z.object({\n${schemaEntries}\n})`;
};
