import { z } from "zod";
import { FORM_REQUIRED } from "@/@core/const";

export const sliderFormSchema = z
  .object({
    label: z.string(),
    description: z.string(),
    fieldName: z.string().nonempty(FORM_REQUIRED),
    controls: z.string().default(""),
    max: z.number().min(0).default(100),
    min: z.number().min(0).default(0),
    step: z.number().min(1).default(1),
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
  )
  .refine(
    (data) => {
      if (!data.step || !data.max) return true;
      return data.step <= data.max;
    },
    {
      message: "Step value must be less than or equal to maximum value",
      path: ["step"],
    },
  );
