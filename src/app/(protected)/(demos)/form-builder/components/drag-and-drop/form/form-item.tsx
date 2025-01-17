"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { FormField } from "@/components/shadcn/ui/form";
import { UseFormReturn } from "react-hook-form";
import InputDialog from "@/app/(protected)/(demos)/form-builder/components/dialog/input";
import { Button } from "@/components/shadcn/ui/button";
import { Trash2 } from "lucide-react";
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
import DatePickerDialog from "@/app/(protected)/(demos)/form-builder/components/dialog/date-picker";
import NextDatePicker from "@/components/shadcn/components/date-picker";
import { FieldControlsEnum } from "@/app/(protected)/(demos)/form-builder/enum/FieldControlsEnum.enum";
import NexSelect from "@/components/shadcn/components/select";
import SelectDialog from "@/app/(protected)/(demos)/form-builder/components/dialog/select";
import { Checkbox } from "@/components/shadcn/ui/checkbox";
import NextFormItemCheckBox from "@/components/shadcn/components/form/form-item-checkbox";
import CheckboxDialog from "@/app/(protected)/(demos)/form-builder/components/dialog/checkbox";
import NextInputOtp from "@/components/shadcn/components/input-opt";
import PasswordOtpDialog from "@/app/(protected)/(demos)/form-builder/components/dialog/password-otp";
import SliderDialog from "@/app/(protected)/(demos)/form-builder/components/dialog/slider";
import { Slider } from "@/components/shadcn/ui/slider";

type FormItemProps = {
  form: UseFormReturn;
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
  const renderItem = (): React.ReactElement => {
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
                  value={field?.value ?? value}
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
                  value={field?.value ?? value}
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
                  value={field?.value ?? value}
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
                  defaultValue={value}
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
                  onValueChange={(value) => {
                    field.onChange(value);
                    handleSetFormItemValue(item.fieldName, value);
                  }}
                  defaultValue={field.value ?? value}
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
                  checked={field.value ?? value}
                  onCheckedChange={(value) => {
                    field.onChange(value);
                    handleSetFormItemValue(item.fieldName, value);
                  }}
                  disabled={item.controls === FieldControlsEnum.DISABLED}
                />
              </NextFormItemCheckBox>
            )}
          />
        );
      case FieldTypeEnum.PASSWORD_OTP:
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
                <NextInputOtp
                  field={field}
                  defaultValue={value}
                  maxLength={item.maxLength}
                  separatorAt={item?.separatorAt}
                  disabled={item.controls === FieldControlsEnum.DISABLED}
                />
              </NextFormItem>
            )}
          />
        );
      case FieldTypeEnum.SLIDER:
        return (
          <FormField
            control={form.control}
            name={item.fieldName}
            render={({ field }) => (
              <NextFormItem
                label={item.label}
                description={
                  <div className="flex flex-col">
                    <span>{`Selected value is ${field.value ?? 0}, minimum values is ${item.min}, maximum values is ${item.max}, step size is ${item.step}`}</span>
                    {item.description}
                  </div>
                }
                required={item.controls === FieldControlsEnum.REQUIRED}
              >
                <Slider
                  max={item.max}
                  step={item.step}
                  value={[field.value ?? value ?? 0]}
                  onValueChange={([value]) => {
                    field.onChange(value);
                    handleSetFormItemValue(item.fieldName, value);
                  }}
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
      case FieldTypeEnum.PASSWORD_OTP:
        return (
          <PasswordOtpDialog
            values={item}
            onSubmit={(values) => {
              handleEditAction(item.id, values);
            }}
          />
        );
      case FieldTypeEnum.SLIDER:
        return (
          <SliderDialog
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
