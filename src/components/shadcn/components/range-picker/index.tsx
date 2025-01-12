import React from "react";
import { ControllerRenderProps } from "react-hook-form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/shadcn/ui/popover";
import { FormControl } from "@/components/shadcn/ui/form";
import { Button } from "@/components/shadcn/ui/button";
import { cn } from "@/lib/utils";
import { format } from "date-fns/format";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/shadcn/ui/calendar";
import { DateRange } from "react-day-picker";

type NextRangePickerProps = {
  field: ControllerRenderProps<any>;
  onSelect?: (date: DateRange | undefined) => void;
  disabled?: boolean;
  maxDate?: Date;
  minDate?: Date;
};

function NextRangePicker({
  field,
  onSelect,
  disabled,
  maxDate,
  minDate,
}: NextRangePickerProps) {
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
            {field?.value?.from ? (
              field?.value.to ? (
                <>
                  {format(field?.value.from, "LLL dd, y")} -{" "}
                  {format(field?.value.to, "LLL dd, y")}
                </>
              ) : (
                format(field?.value.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
          </Button>
        </FormControl>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="range"
          selected={field.value}
          onSelect={(event) => {
            field.onChange(event);
            if (onSelect) onSelect(event);
          }}
          disabled={(date) => {
            if (minDate && maxDate) return date > minDate || date < maxDate;
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

export default NextRangePicker;
