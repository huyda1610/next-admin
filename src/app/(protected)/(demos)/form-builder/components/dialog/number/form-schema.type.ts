import { z } from "zod";
import { FORM_REQUIRED } from "@/@core/const";

export const numberFormSchema = z
  .object({
    label: z.string(),
    description: z.string(),
    placeholder: z.string(),
    fieldName: z.string().nonempty(FORM_REQUIRED),
    controls: z.string().default(""),
    max: z.number().optional(),
    min: z.number().optional(),
  })
  .refine(
    (data) => {
      if (!data.min || !data.max) return true;
      return data.min <= data.max;
    },
    {
      message: "Minimum value must be less than or equal to maximum value",
      path: ["min"],
    },
  );
