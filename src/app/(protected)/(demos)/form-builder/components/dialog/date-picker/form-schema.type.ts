import { z } from "zod";
import { FORM_REQUIRED } from "@/@core/const";

export const datePickerFormSchema = z.object({
  label: z.string(),
  description: z.string(),
  placeholder: z.string(),
  fieldName: z.string().nonempty(FORM_REQUIRED),
  controls: z.string().default(""),
  dateDisabledRange: z
    .object({
      from: z.date({
        required_error: "Start date is required",
      }),
      to: z.date({
        required_error: "End date is required",
      }),
    })
    .optional(),
});
