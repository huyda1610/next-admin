import { FormItemType } from "@/app/(protected)/(demos)/form-builder/type/type";
import { FieldTypeEnum } from "../../enum/FieldTypeEnum.enum";

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
                <Input placeholder={${item.placeholder}} {...field} />
              </FormControl>
              <FormDescription>
                {${item.description}}
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
                  placeholder={${item.placeholder}}
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                 {${item.description}}
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
                <Input placeholder={${item.placeholder}} type="number" {...field} />
              </FormControl>
              <FormDescription>
                {${item.description}}
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
                <PopoverTrigger asChild>
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
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                      disabled={(date) =>{
                      const minDate = ${item.dateDisabledRange?.from};
                      const maxDate = ${item.dateDisabledRange?.to};
                      
                      if (minDate && maxDate) {
                        return date > maxDate || date < minDate;
                      }
                      if (minDate) return date < minDate;
                      if (maxDate) return date > maxDate;
                      return false;
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormDescription>
                {${item.description}}
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
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a verified email to display" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="m@example.com">m@example.com</SelectItem>
                  <SelectItem value="m@google.com">m@google.com</SelectItem>
                  <SelectItem value="m@support.com">m@support.com</SelectItem>
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
                <InputOTP maxLength={6} {...field}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
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
               <span>{\`Selected value is \${field.value ?? 0}, minimum values is ${item.min}, maximum values is ${item.max}, step size is ${item.step}\`}</span>
                {${item.description}}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />`;
    default:
      return "";
  }
};
