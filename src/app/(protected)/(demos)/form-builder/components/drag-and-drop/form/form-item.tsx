"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { FormField } from "@/components/shadcn/ui/form";
import { UseFormReturn } from "react-hook-form";
import InputDialog from "@/app/(protected)/(demos)/form-builder/components/dialog/input";
import { Button } from "@/components/shadcn/ui/button";
import { CalendarIcon, Trash2 } from "lucide-react";
import { FormDragHandle } from "@/app/(protected)/(demos)/form-builder/components/drag-and-drop/form/sortable-item";
import NextFormItem from "@/components/shadcn/components/form/form-item";
import { Input } from "@/components/shadcn/ui/input";
import {
  FormItemType,
  ItemSchemaType,
} from "@/app/(protected)/(demos)/form-builder/type/type";
import { FieldTypeEnum } from "@/app/(protected)/(demos)/form-builder/enum/FieldTypeEnum.enum";
import { Textarea } from "@/components/shadcn/ui/textarea";
import TextAreaDialog from "@/app/(protected)/(demos)/form-builder/components/dialog/text-area";
import NumberDialog from "@/app/(protected)/(demos)/form-builder/components/dialog/number";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/shadcn/ui/popover";
import { Calendar } from "@/components/shadcn/ui/calendar";
import { format } from "date-fns";
import DatePickerDialog from "@/app/(protected)/(demos)/form-builder/components/dialog/date-picker";
import NextDatePicker from "@/components/shadcn/components/date-picker";
import { FieldControlsEnum } from "@/app/(protected)/(demos)/form-builder/enum/FieldControlsEnum.enum";
import NexSelect from "@/components/shadcn/components/select";
import SelectDialog from "@/app/(protected)/(demos)/form-builder/components/dialog/select";
import { Checkbox } from "@/components/shadcn/ui/checkbox";
import NextFormItemCheckBox from "@/components/shadcn/components/form/form-item-checkbox";
import CheckboxDialog from "@/app/(protected)/(demos)/form-builder/components/dialog/checkbox";
import NextInputOpt from "@/components/shadcn/components/input-opt";
import PasswordOptDialog from "@/app/(protected)/(demos)/form-builder/components/dialog/password-opt";

type FormItemProps = {
  form?: UseFormReturn;
  handleRemoveAction: (id: string) => void;
  handleEditAction: (id: string, values: ItemSchemaType) => void;
  handleSetFormItemValue: (name: string, value: any) => void;
  item: FormItemType;
  isDragging?: boolean;
  value?: any;
};

export default function FormItem({
  value,
  form,
  handleRemoveAction,
  handleEditAction,
  item,
  isDragging,
  handleSetFormItemValue,
}: FormItemProps) {
  const getDragItem = (placeholder?: string): React.ReactElement => {
    switch (item.type) {
      case FieldTypeEnum.INPUT:
        return <Input placeholder={placeholder} readOnly value={value} />;
      case FieldTypeEnum.TEXT_AREA:
        return <Textarea placeholder={placeholder} readOnly value={value} />;
      case FieldTypeEnum.NUMBER:
        return (
          <Input
            type="number"
            placeholder={placeholder}
            readOnly
            value={value}
          />
        );
      case FieldTypeEnum.DATE_PICKER:
        return (
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-left font-normal",
                  "text-muted-foreground",
                )}
              >
                {value ? format(value, "PPP") : <span>Pick a date</span>}
                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar mode="single" initialFocus />
            </PopoverContent>
          </Popover>
        );
      case FieldTypeEnum.SELECT:
        return <NexSelect defaultValue={value} />;
      case FieldTypeEnum.CHECKBOX:
        return <Checkbox checked={value} />;
      case FieldTypeEnum.PASSWORD_OPT:
        return <NextInputOpt maxLength={6} separatorAt={2} />;
      default:
        return <></>;
    }
  };

  const renderItem = (): React.ReactElement => {
    if (!form) {
      if (item.type === FieldTypeEnum.CHECKBOX) {
        return (
          <NextFormItemCheckBox
            label={item.label}
            description={item.description}
          >
            {getDragItem()}
          </NextFormItemCheckBox>
        );
      }

      return (
        <NextFormItem label={item.label} description={item.description}>
          {getDragItem(
            item.type !== FieldTypeEnum.PASSWORD_OPT ? item?.placeholder : "",
          )}
        </NextFormItem>
      );
    }

    switch (item.type) {
      case FieldTypeEnum.INPUT:
        return (
          <FormField
            control={form.control}
            name={item.fieldName}
            render={({ field }) => (
              <NextFormItem
                label={item.label}
                description={item.description}
                required={item.controls === FieldControlsEnum.REQUIRED}
              >
                <Input
                  {...field}
                  placeholder={item.placeholder}
                  disabled={item.controls === FieldControlsEnum.DISABLED}
                />
              </NextFormItem>
            )}
          />
        );
      case FieldTypeEnum.TEXT_AREA:
        return (
          <FormField
            control={form.control}
            name={item.fieldName}
            render={({ field }) => (
              <NextFormItem
                label={item.label}
                description={item.description}
                required={item.controls === FieldControlsEnum.REQUIRED}
              >
                <Textarea
                  {...field}
                  placeholder={item.placeholder}
                  disabled={item.controls === FieldControlsEnum.DISABLED}
                />
              </NextFormItem>
            )}
          />
        );
      case FieldTypeEnum.NUMBER:
        return (
          <FormField
            control={form.control}
            name={item.fieldName}
            render={({ field }) => (
              <NextFormItem
                label={item.label}
                description={item.description}
                required={item.controls === FieldControlsEnum.REQUIRED}
              >
                <Input
                  {...field}
                  type="number"
                  placeholder={item.placeholder}
                  disabled={item.controls === FieldControlsEnum.DISABLED}
                  max={item?.max}
                  min={item?.min}
                  // Convert string value to number
                  onChange={(event) => field.onChange(+event.target.value)}
                  // Prevent empty string being passed to number field
                  value={field.value === undefined ? "" : field.value}
                />
              </NextFormItem>
            )}
          />
        );
      case FieldTypeEnum.DATE_PICKER:
        return (
          <FormField
            control={form.control}
            name={item.fieldName}
            render={({ field }) => (
              <NextFormItem
                label={item.label}
                description={item.description}
                required={item.controls === FieldControlsEnum.REQUIRED}
              >
                <NextDatePicker
                  field={field}
                  onSelect={(date) => {
                    handleSetFormItemValue(item.fieldName, date);
                  }}
                  disabled={item.controls === FieldControlsEnum.DISABLED}
                  maxDate={item?.dateDisabledRange?.to}
                  minDate={item?.dateDisabledRange?.from}
                />
              </NextFormItem>
            )}
          />
        );
      case FieldTypeEnum.SELECT:
        return (
          <FormField
            control={form.control}
            name={item.fieldName}
            render={({ field }) => (
              <NextFormItem
                label={item.label}
                description={item.description}
                required={item.controls === FieldControlsEnum.REQUIRED}
              >
                <NexSelect
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  placeholder={item.placeholder}
                  options={item.options}
                  disabled={item.controls === FieldControlsEnum.DISABLED}
                />
              </NextFormItem>
            )}
          />
        );
      case FieldTypeEnum.CHECKBOX:
        return (
          <FormField
            control={form.control}
            name={item.fieldName}
            render={({ field }) => (
              <NextFormItemCheckBox
                label={item.label}
                description={item.description}
                required={item.controls === FieldControlsEnum.REQUIRED}
              >
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  disabled={item.controls === FieldControlsEnum.DISABLED}
                />
              </NextFormItemCheckBox>
            )}
          />
        );
      case FieldTypeEnum.PASSWORD_OPT:
        return (
          <FormField
            control={form.control}
            name={item.fieldName}
            render={({ field }) => (
              <NextFormItem
                label={item.label}
                description={item.description}
                required={item.controls === FieldControlsEnum.REQUIRED}
              >
                <NextInputOpt
                  field={field}
                  maxLength={item.maxLength}
                  separatorAt={item?.separatorAt}
                  disabled={item.controls === FieldControlsEnum.DISABLED}
                />
              </NextFormItem>
            )}
          />
        );
      default:
        return <></>;
    }
  };

  const renderEditButton = (): React.ReactElement => {
    switch (item.type) {
      case FieldTypeEnum.INPUT:
        return (
          <InputDialog
            values={item}
            onSubmit={(values) => {
              handleEditAction(item.id, values);
            }}
          />
        );
      case FieldTypeEnum.TEXT_AREA:
        return (
          <TextAreaDialog
            values={item}
            onSubmit={(values) => {
              handleEditAction(item.id, values);
            }}
          />
        );
      case FieldTypeEnum.NUMBER:
        return (
          <NumberDialog
            values={item}
            onSubmit={(values) => {
              handleEditAction(item.id, values);
            }}
          />
        );
      case FieldTypeEnum.DATE_PICKER:
        return (
          <DatePickerDialog
            values={item}
            onSubmit={(values) => {
              handleEditAction(item.id, values);
            }}
          />
        );
      case FieldTypeEnum.SELECT:
        return (
          <SelectDialog
            values={item}
            onSubmit={(values) => {
              handleEditAction(item.id, values);
            }}
          />
        );
      case FieldTypeEnum.CHECKBOX:
        return (
          <CheckboxDialog
            values={item}
            onSubmit={(values) => {
              handleEditAction(item.id, values);
            }}
          />
        );
      case FieldTypeEnum.PASSWORD_OPT:
        return (
          <PasswordOptDialog
            values={item}
            onSubmit={(values) => {
              handleEditAction(item.id, values);
            }}
          />
        );

      default:
        return <></>;
    }
  };

  return (
    <div
      id={item.id}
      className={cn(
        isDragging &&
          "border-2 border-solid border-border rounded-lg p-1 px-2 bg-background",
        "relative group",
      )}
    >
      <div className="w-full">{renderItem()}</div>
      {/*Button*/}
      <div className="absolute -left-12 top-1/2 flex -translate-y-1/2 flex-col gap-1 opacity-0 transition-opacity group-hover:opacity-100">
        {renderEditButton()}

        <Button
          variant="ghost"
          size="icon"
          onClick={() => handleRemoveAction(item.id)}
          className="p-0"
        >
          <Trash2 className="text-destructive" size={16} />
        </Button>
      </div>
      <div className="absolute -right-12 top-1/2 flex -translate-y-1/2 flex-col gap-1 opacity-0 transition-opacity group-hover:opacity-100">
        <FormDragHandle />
      </div>
    </div>
  );
}
