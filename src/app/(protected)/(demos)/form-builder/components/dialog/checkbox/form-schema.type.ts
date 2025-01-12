import { z } from "zod";
import { FORM_REQUIRED } from "@/@core/const";

export const checkboxFormSchema = z.object({
  label: z.string(),
  description: z.string(),
  fieldName: z.string().nonempty(FORM_REQUIRED),
  controls: z.string().default(""),
});
