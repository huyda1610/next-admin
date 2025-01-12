import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/shadcn/ui/radio-group";
import { FormControl, FormItem, FormLabel } from "@/components/shadcn/ui/form";
import { cn } from "@/lib/utils";

type Options = {
  label: string;
  value: string;
};

type NextRadioGroupProps = {
  onValueChange?: (value: string) => void;
  defaultValue?: string;
  options?: Options[];
  className?: string;
};

function NextRadioGroup({
  onValueChange,
  defaultValue,
  options,
  className,
}: NextRadioGroupProps) {
  return (
    <RadioGroup
      onValueChange={onValueChange}
      defaultValue={defaultValue}
      className={cn("flex flex-col", className)}
    >
      {options?.length &&
        options.map((option) => (
          <FormItem
            key={option.value}
            className="flex items-center space-x-3 space-y-0"
          >
            <FormControl>
              <RadioGroupItem value={option.value} />
            </FormControl>
            <FormLabel className="font-normal">{option.label}</FormLabel>
          </FormItem>
        ))}
    </RadioGroup>
  );
}

export default NextRadioGroup;
