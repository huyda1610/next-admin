import { FormItemType } from "@/app/(protected)/(demos)/form-builder/type/type";
import { FieldTypeEnum } from "../../enum/FieldTypeEnum.enum";
import { FieldControlsEnum } from "@/app/(protected)/(demos)/form-builder/enum/FieldControlsEnum.enum";
import { generate } from "@/@core/utils/generate";

const renderSelectOptions = (item: FormItemType): string => {
  if (item.type === FieldTypeEnum.SELECT) {
    return item.options
      .map(
        (option) =>
          `<SelectItem value="${option.value}">${option.label}</SelectItem>`,
      )
      .join("\n");
  }
  return "";
};

const renderOTPSlot = (item: FormItemType): string => {
  if (item.type === FieldTypeEnum.PASSWORD_OTP) {
    const oneDimensionArray: string = Array.from(
      Array(item.maxLength)
        .keys()
        .flatMap((key) => {
          return [`<InputOTPSlot index={${key}} />`];
        }),
    ).join("\n");

    console.log(generate.array2D(item.maxLength, item.separatorAt ?? 0));

    const twoDimensionArray: string = !item.separatorAt
      ? ""
      : generate
          .array2D(item.maxLength, item.separatorAt)
          .map((group, index) => {
            return `
            <InputOTPGroup>
              ${group
                .map((groupIndex) => `<InputOTPSlot index={${groupIndex}} />`)
                .join("\n")}
            </InputOTPGroup>
            ${index + 1 < generate.array2D(item.maxLength, item.separatorAt ?? 0).length ? "<InputOTPSeparator />" : ""}
          `;
          })
          .join("\n");

    if (!item.separatorAt) {
      return ` <InputOTPGroup>${oneDimensionArray}</InputOTPGroup>`;
    }

    return twoDimensionArray;
  }
  return "";
};

export const generateCodeField = (item: FormItemType): string => {
  switch (item.type) {
    case FieldTypeEnum.INPUT:
      return `<FormField
          control={form.control}
          name="${item.fieldName}"
          render={({ field }) => (
            <FormItem>
              <FormLabel>${item.label}</FormLabel>
              <FormControl>
                <Input placeholder="${item.placeholder}" disabled={${item.controls === FieldControlsEnum.DISABLED ? "true" : "false"}} {...field}
                 />
              </FormControl>
              <FormDescription>
                ${item.description}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />`;
    case FieldTypeEnum.TEXT_AREA:
      return `<FormField
          control={form.control}
          name="${item.fieldName}"
          render={({ field }) => (
            <FormItem>
             <FormLabel>${item.label}</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="${item.placeholder}"
                  className="resize-none"
                  disabled={${item.controls === FieldControlsEnum.DISABLED ? "true" : "false"}}
                  {...field}
                />
              </FormControl>
              <FormDescription>
                 ${item.description}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />`;
    case FieldTypeEnum.NUMBER:
      return `<FormField
          control={form.control}
          name="${item.fieldName}"
          render={({ field }) => (
            <FormItem>
              <FormLabel>${item.label}</FormLabel>
              <FormControl>
                <Input placeholder="${item.placeholder}" type="number" disabled={${item.controls === FieldControlsEnum.DISABLED ? "true" : "false"}}
                {...field} value={field.value ?? ''} />
              </FormControl>
              <FormDescription>
                ${item.description}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />`;
    case FieldTypeEnum.DATE_PICKER:
      return `        <FormField
          control={form.control}
          name="${item.fieldName}"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>${item.label}</FormLabel>
              <Popover>
                <PopoverTrigger asChild disabled={${item.controls === FieldControlsEnum.DISABLED ? "true" : "false"}}>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>${item.placeholder}</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    initialFocus
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>{
                      const minDate: Date  = ${item.dateDisabledRange?.from ? `new Date('${item.dateDisabledRange?.from}')` : "date"};
                      const maxDate: Date  = ${item.dateDisabledRange?.to ? `new Date('${item.dateDisabledRange?.to}')` : "date"};
                      
                      if (minDate && maxDate) {
                        return date > maxDate || date < minDate;
                      }
                      if (minDate !== undefined) return date < minDate;
                      if (maxDate !== undefined) return date > maxDate;
                      return false;
                    }}
                  />
                </PopoverContent>
              </Popover>
              <FormDescription>
                ${item.description}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
`;
    case FieldTypeEnum.SELECT:
      return ` <FormField
          control={form.control}
          name="${item.fieldName}"
          render={({ field }) => (
            <FormItem>
               <FormLabel>${item.label}</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value} disabled={${item.controls === FieldControlsEnum.DISABLED ? "true" : "false"}}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a verified email to display" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  ${renderSelectOptions(item)}
                </SelectContent>
              </Select>
              <FormDescription>
                ${item.description}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />`;
    case FieldTypeEnum.CHECKBOX:
      return `<FormField
          control={form.control}
          name="${item.fieldName}"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  disabled={${item.controls === FieldControlsEnum.DISABLED ? "true" : "false"}}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>${item.label}</FormLabel>
                <FormDescription>
                  ${item.description}
                </FormDescription>
              </div>
            </FormItem>
          )}
        />`;
    case FieldTypeEnum.PASSWORD_OTP:
      return `<FormField
          control={form.control}
          name="${item.fieldName}"
          render={({ field }) => (
            <FormItem>
              <FormLabel>${item.label}</FormLabel>
              <FormControl>
                <InputOTP maxLength={${item.maxLength}} disabled={${item.controls === FieldControlsEnum.DISABLED ? "true" : "false"}} {...field}>
                  ${renderOTPSlot(item)}
                </InputOTP>
              </FormControl>
              <FormDescription>
                ${item.description}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />`;
    case FieldTypeEnum.SLIDER:
      return `<FormField
          control={form.control}
          name="${item.fieldName}"
          render={({ field }) => (
            <FormItem>
              <FormLabel>${item.label}</FormLabel>
              <FormControl>
                <Slider
                  max={${item.max}}
                  step={${item.step}}
                  value={[field.value ?? 0]}
                  onValueChange={field.onChange}
                />
              </FormControl>
              <FormDescription>
               <span >{\`Selected value is \${field.value ?? 0}, minimum values is ${item.min}, maximum values is ${item.max}, step size is ${item.step}\`}</span>
                <p className="block">${item.description}</p>
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />`;
    default:
      return "";
  }
};
