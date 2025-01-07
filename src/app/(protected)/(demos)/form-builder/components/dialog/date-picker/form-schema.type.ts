import { z } from "zod";
import { FORM_REQUIRED } from "@/@core/const";

export const datePickerFormSchema = z.object({
  label: z.string(),
  description: z.string(),
  placeholder: z.string(),
  fieldName: z.string().nonempty(FORM_REQUIRED),
  required: z.boolean(),
  disabled: z.boolean(),
  maxDate: z.date().optional(),
  minDate: z.date().optional(),
});
