import { z } from 'zod';

export const inputFormSchema = z.object({
  label: z.string(),
  description: z.string(),
  placeholder: z.string(),
  fieldName: z.string().min(1, {
    message: 'Field is required!',
  }),
});
