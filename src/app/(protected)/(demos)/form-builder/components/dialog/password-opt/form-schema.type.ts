import { z } from "zod";
import { FORM_REQUIRED } from "@/@core/const";

export const passwordOptFormSchema = z.object({
  label: z.string(),
  description: z.string(),
  fieldName: z.string().nonempty(FORM_REQUIRED),
  controls: z.string().default(""),
  maxLength: z.number().min(1).default(6),
  separatorAt: z.number().min(1).optional(),
});
