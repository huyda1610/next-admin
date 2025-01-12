import { z } from "zod";
import { FORM_REQUIRED } from "@/@core/const";

export const inputFormSchema = z.object({
  label: z.string(),
  description: z.string(),
  placeholder: z.string(),
  fieldName: z.string().nonempty(FORM_REQUIRED),
  controls: z.string().default(""),
});
