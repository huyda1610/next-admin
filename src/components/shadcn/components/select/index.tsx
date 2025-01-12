import React from "react";
import { FormControl } from "@/components/shadcn/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/shadcn/ui/select";

type Options = {
  label: string;
  value: string;
};

type NextSelectProps = {
  onValueChange?: (value: string) => void;
  defaultValue?: string;
  options?: Options[];
  placeholder?: string;
  disabled?: boolean;
};

function NextSelect({
  onValueChange,
  defaultValue,
  options,
  placeholder,
  disabled,
}: NextSelectProps) {
  return (
    <Select
      onValueChange={onValueChange}
      defaultValue={defaultValue}
      disabled={disabled}
    >
      <FormControl>
        <SelectTrigger>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
      </FormControl>
      <SelectContent>
        {options?.length &&
          options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
      </SelectContent>
    </Select>
  );
}

export default NextSelect;
