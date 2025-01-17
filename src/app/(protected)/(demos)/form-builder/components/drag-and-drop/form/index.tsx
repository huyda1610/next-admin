"use client";
import React from "react";
import { FormItemType, ItemSchemaType, ItemsType } from "../../../type/type";
import { useDroppable } from "@dnd-kit/core";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/shadcn/ui/button";
import { Form } from "@/components/shadcn/ui/form";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import FormSortableItem from "./sortable-item";
import FormItem from "./form-item";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { generateForm } from "@/app/(protected)/(demos)/form-builder/utils/generate-form";

type PropsType = {
  id: string;
  items: FormItemType[];
  setItems: React.Dispatch<React.SetStateAction<ItemsType>>;
};

function FormContainer({ items, id, setItems }: PropsType) {
  const { setNodeRef } = useDroppable({
    id,
  });
  const { toast } = useToast();

  const handleRemove = (id: string) => {
    setItems((prev) => {
      return {
        ...prev,
        form: prev.form.filter((item) => item.id !== id),
      };
    });
  };

  const handleEdit = (id: string, values: ItemSchemaType) => {
    setItems((prev) => {
      return {
        ...prev,
        form: prev.form.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              ...values,
            };
          }
          return item;
        }),
      };
    });
  };

  const handleSetFormItemValue = (name: string, value: any) => {
    setItems((prev) => {
      return {
        ...prev,
        form: prev.form.map((item) => {
          if (item.fieldName === name) {
            return {
              ...item,
              value: value,
            };
          }
          return item;
        }),
      };
    });
  };

  // ---------------------------------------------Form Control-----------------------------------------------------
  const formSchema = z.object(generateForm(items));

  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "Submitted following values:",
      description: (
        <pre className="mt-2 w-[340px] overflow-auto rounded-md bg-foreground p-4">
          <code className="overflow-auto text-secondary">
            {JSON.stringify(values, null, 2)}
          </code>
        </pre>
      ),
    });
  }

  return (
    <SortableContext
      id={id}
      items={items}
      strategy={verticalListSortingStrategy}
    >
      <div ref={setNodeRef} className="p-4  max-w-[600px] w-3/4 mx-auto">
        {items.length ? (
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              onChange={(event: any) => {
                handleSetFormItemValue(event.target.name, event.target.value);
              }}
              className="flex flex-col gap-4"
            >
              {items.map((item) => (
                <FormSortableItem key={item.id} id={item.id}>
                  <FormItem
                    form={form}
                    handleRemoveAction={handleRemove}
                    handleEditAction={handleEdit}
                    item={item}
                    handleSetFormItemValue={handleSetFormItemValue}
                  />
                </FormSortableItem>
              ))}

              <Button type="submit" className="w-fit">
                Submit
              </Button>
            </form>
          </Form>
        ) : (
          <div className="text-center py-12">
            <strong className="text-lg text-center py-12">
              No Fields were added
            </strong>
          </div>
        )}
      </div>
    </SortableContext>
  );
}

export default FormContainer;
