import { FormItemType } from "@/app/(protected)/(demos)/form-builder/type/type";
import { generateCodeField } from "@/app/(protected)/(demos)/form-builder/utils/generate-code/field";
import { generateCodeImports } from "@/app/(protected)/(demos)/form-builder/utils/generate-code/import";

const renderField = (items: FormItemType[]): string => {
  return items.map((item) => generateCodeField(item)).join(`/n`);
};

export const generateCode = (items: FormItemType[]): string => {
  const imports: string = Array.from(generateCodeImports(items)).join("\n");
  const schema = "";
  const component = `
    export default function MyForm() {
    
      function onSubmit(values: z.infer<typeof formSchema>) {
        try {
          console.log(values);
          toast(
            <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
              <code className="text-white">{JSON.stringify(values, null, 2)}</code>
            </pre>
          );
        } catch (error) {
          console.error("Form submission error", error);
          toast.error("Failed to submit the form. Please try again.");
        }
      }
    
      return (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-3xl mx-auto py-10">
            ${renderField(items)}
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      )
  }
  `;

  return imports + "\n\n" + schema + "\n" + component;
};
