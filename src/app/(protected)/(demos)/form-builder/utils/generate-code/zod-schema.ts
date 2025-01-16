import * as z from "zod";
import { FormItemType } from "@/app/(protected)/(demos)/form-builder/type/type";
import { FieldTypeEnum } from "@/app/(protected)/(demos)/form-builder/enum/FieldTypeEnum.enum";

const generateZodSchema = (formFields: FormItemType[]) => {
  const formSchemaObject: Record<string, z.ZodType<any, any>> = {};
  formFields.forEach((field) => {
    let fieldSchema: z.ZodTypeAny;
    switch (field.type) {
      case FieldTypeEnum.INPUT:
        fieldSchema = z.string();
        break;
    }
    formSchemaObject[field.fieldName] = fieldSchema;
  });

  return z.object(formSchemaObject);
};

const zodSchemaToString = (schema: z.ZodTypeAny): string => {
  if (schema instanceof z.ZodDefault) {
    return `${zodSchemaToString(schema._def.innerType)}`;
  }

  if (schema instanceof z.ZodBoolean) {
    return `z.boolean()`;
  }

  if (schema instanceof z.ZodNumber) {
    let result = "z.coerce.number()";
    if ("checks" in schema._def) {
      schema._def.checks.forEach((check: z.ZodNumberCheck) => {
        if (check.kind === "min") {
          result += `.min(${check.value})`;
        } else if (check.kind === "max") {
          result += `.max(${check.value})`;
        }
      });
    }
    return result;
  }

  if (schema instanceof z.ZodString) {
    let result = "z.string()";
    if ("checks" in schema._def) {
      schema._def.checks.forEach((check: z.ZodStringCheck) => {
        if (check.kind === "min") {
          result += `.min(${check.value})`;
        } else if (check.kind === "max") {
          result += `.max(${check.value})`;
        } else if (check.kind === "email") {
          result += `.email()`;
        }
      });
    }
    return result;
  }

  if (schema instanceof z.ZodDate) {
    return `z.coerce.date()`;
  }

  if (schema instanceof z.ZodObject) {
    const shape = schema.shape;
    const shapeStrs = Object.entries(shape).map(
      ([key, value]) => `${key}: ${zodSchemaToString(value as z.ZodTypeAny)}`,
    );
    return `z.object({
  ${shapeStrs.join(",\n  ")}
})`;
  }

  if (schema instanceof z.ZodOptional) {
    return `${zodSchemaToString(schema.unwrap())}.optional()`;
  }

  return "z.unknown()";
};

export const generateCodeZodSchema = (formFields: FormItemType[]): string => {
  const schema = generateZodSchema(formFields);
  const schemaEntries = Object.entries(schema.shape)
    .map(([key, value]) => {
      return `  ${key.replaceAll(" ", "_")}: ${zodSchemaToString(value as z.ZodTypeAny)}`;
    })
    .join(",\n");

  return `const formSchema = z.object({\n${schemaEntries}\n})`;
};
