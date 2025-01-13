import { z } from "zod";
import { FORM_REQUIRED } from "@/@core/const";

export const passwordOtpFormSchema = z
  .object({
    label: z.string(),
    description: z.string(),
    fieldName: z.string().nonempty(FORM_REQUIRED),
    controls: z.string().default(""),
    maxLength: z.number().min(1).default(6),
    separatorAt: z.number().min(0).optional(),
  })
  .refine(
    (data) => {
      if (!data.separatorAt || !data.maxLength) return true;
      return data.separatorAt <= data.maxLength;
    },
    {
      message: "Value must be less than or equal to MaxLength value",
      path: ["separatorAt"],
    },
  );
