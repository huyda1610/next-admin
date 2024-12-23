"use client";
import React from "react";
import { FormItemType, ItemsType } from "../../type";
import { useDroppable } from "@dnd-kit/core";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/shadcn/ui/button";
import { Form } from "@/components/shadcn/ui/form";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { Card, CardContent } from "@/components/shadcn/ui/card";
import FormSortableItem, { FormDragHandle } from "./sortable-item";
import { Trash2 } from "lucide-react";
import FormItem from "./form-item";
import { inputFormSchema } from "@/app/(admin)/(demos)/form-builder/components/dialog/input/form-schema.type";

type PropsType = {
  id: string;
  items: FormItemType[];
  setItems: React.Dispatch<React.SetStateAction<ItemsType>>;
};

function FormContainer({ items, id, setItems }: PropsType) {
  const { setNodeRef } = useDroppable({
    id,
  });

  const handleRemove = (id: string) => {
    setItems((prev) => {
      return {
        ...prev,
        form: prev.form.filter((item) => item.id !== id),
      };
    });
  };

  const handleEdit = (id: string, values: z.infer<typeof inputFormSchema>) => {
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

  // ---------------------------------------------Form Control-----------------------------------------------------
  const initialForm = () => {
    const data: string[] = items.map((item) => item.fieldName);
    return data.reduce((acc: any, cur) => {
      acc[cur] = z.string();
      return acc;
    }, {});
  };

  const defaultValues = () => {
    const data: string[] = items.map((item) => item.fieldName);
    return data.reduce((acc: any, cur) => {
      acc[cur] = "";
      return acc;
    }, {});
  };

  const formSchema = z.object({
    ...initialForm(),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ...defaultValues(),
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // console.log(values);
  }

  return (
    <SortableContext
      id={id}
      items={items}
      strategy={verticalListSortingStrategy}
    >
      <Card ref={setNodeRef} className="col-span-2">
        <CardContent className="p-4 rounded-xl">
          {!!items.length && (
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-4"
              >
                {items.map((item) => (
                  <FormSortableItem key={item.id} id={item.id}>
                    <FormItem
                      {...item}
                      extra={
                        <div className="ease-in-out transition duration-400 flex flex-col justify-between gap-2">
                          {/*<InputDialog*/}
                          {/*  values={{ ...item }}*/}
                          {/*  onSubmit={(values) => {*/}
                          {/*    handleEdit(item.id, values);*/}
                          {/*  }}*/}
                          {/*/>*/}

                          <FormDragHandle />

                          <Button
                            variant="ghost"
                            onClick={() => handleRemove(item.id)}
                            className="p-0"
                          >
                            <Trash2 className="text-destructive" size={18} />
                          </Button>
                        </div>
                      }
                      form={form}
                    />
                  </FormSortableItem>
                ))}

                <Button type="submit" className="w-fit">
                  Submit
                </Button>
              </form>
            </Form>
          )}
        </CardContent>
      </Card>
    </SortableContext>
  );
}

export default FormContainer;
