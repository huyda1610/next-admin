import { z } from "zod";
import { FORM_REQUIRED } from "@/@core/const";

export const selectFormSchema = z.object({
  label: z.string(),
  description: z.string(),
  placeholder: z.string(),
  fieldName: z.string().nonempty(FORM_REQUIRED),
  controls: z.string().default(""),
  options: z.array(z.object({ label: z.string(), value: z.string() })),
});
