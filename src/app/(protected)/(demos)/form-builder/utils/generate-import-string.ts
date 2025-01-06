import { FormItemType } from "@/app/(protected)/(demos)/form-builder/type/type";
import { FieldTypeEnum } from "@/app/(protected)/(demos)/form-builder/enum/FieldTypeEnum.enum";

const generateImports = (formFields: FormItemType[]): Set<string> => {
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

  formFields.map((formField) => {
    switch (formField.type) {
      case FieldTypeEnum.INPUT:
        importSet.add(`import { Input } from "@/components/ui/input"`);
        break;
    }
  });

  return importSet;
};
