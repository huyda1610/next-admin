import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../../ui/popover";
import { ControllerRenderProps } from "react-hook-form";
import { FormControl } from "@/components/shadcn/ui/form";
import { Button } from "@/components/shadcn/ui/button";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "../../ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns/format";

type NextDatePickerProps = {
  field: ControllerRenderProps;
  onSelect?: (date: Date | undefined) => void;
  disabled?: boolean;
  maxDate?: Date;
  minDate?: Date;
};

function NextDatePicker({
  field,
  onSelect,
  disabled,
  minDate,
  maxDate,
}: NextDatePickerProps) {
  return (
    <Popover>
      <PopoverTrigger asChild disabled={disabled}>
        <FormControl>
          <Button
            variant={"outline"}
            className={cn(
              "w-full pl-3 text-left font-normal",
              !field.value && "text-muted-foreground",
            )}
          >
            {field.value ? (
              format(field.value, "PPP")
            ) : (
              <span>Pick a date</span>
            )}
            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
          </Button>
        </FormControl>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={field.value}
          onSelect={(event) => {
            field.onChange(event);
            if (onSelect) onSelect(event);
          }}
          disabled={(date) => {
            if (minDate && maxDate) {
              return date > maxDate || date < minDate;
            }
            if (minDate) return date < minDate;
            if (maxDate) return date > maxDate;
            return false;
          }}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}

export default NextDatePicker;
