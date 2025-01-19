import { FormItemType } from "@/app/(protected)/(demos)/form-builder/type/type";
import { FieldTypeEnum } from "@/app/(protected)/(demos)/form-builder/enum/FieldTypeEnum.enum";

export const generateCodeImports = (formItems: FormItemType[]): Set<string> => {
  const importSet = new Set([
    `"use client"\n`,
    `import * as React from 'react'`,
    `import { zodResolver } from "@hookform/resolvers/zod"`,
    `import { useForm } from "react-hook-form"`,
    `import { z } from "zod"\n`,
    `import { cn } from "@/lib/utils"`,
    `import { toast } from "@/hooks/use-toast"`,
    `import { Button } from "@/components/ui/button"`,
    `import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"`,
  ]);

  formItems.forEach((formField) => {
    switch (formField.type) {
      case FieldTypeEnum.INPUT:
      case FieldTypeEnum.NUMBER:
        importSet.add(`import { Input } from "@/components/ui/input"`);
        break;
      case FieldTypeEnum.TEXT_AREA:
        importSet.add(`import { Textarea } from "@/components/ui/textarea"`);
        break;
      case FieldTypeEnum.DATE_PICKER:
        importSet.add(`import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns/format";
import { CalendarIcon } from "lucide-react";`);
        break;
      case FieldTypeEnum.SELECT:
        importSet.add(`import {
Select,
SelectContent,
SelectItem,
SelectTrigger,
SelectValue,
} from "@/components/ui/select"`);
        break;
      case FieldTypeEnum.CHECKBOX:
        importSet.add(`import { Checkbox } from "@/components/ui/checkbox"`);
        break;
      case FieldTypeEnum.PASSWORD_OTP:
        importSet.add(`import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "@/components/ui/input-otp"`);
        break;
      case FieldTypeEnum.SLIDER:
        importSet.add(`import { Slider } from "@/components/ui/slider"`);
        break;
    }
  });

  return importSet;
};
