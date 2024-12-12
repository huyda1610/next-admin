'use client';
import React from 'react';
import { FormItemType, ItemsType } from '../type';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { Card, CardContent } from '@components/shadcn/ui/card';
import SortableItem from '@app/(auth)/form-builder/components/drag-and-drop/item/sortable-item';
import { useDroppable } from '@dnd-kit/core';
import { Button } from '@components/shadcn/ui/button';
import { Trash2 } from 'lucide-react';
import InputDialog from '@app/(auth)/form-builder/components/dialog/input';
import { z } from 'zod';
import { inputFormSchema } from '@app/(auth)/form-builder/components/dialog/input/form-schema.type';

type PropsType = {
  id: string;
  items: FormItemType[];
  className?: string;
  setItems: React.Dispatch<React.SetStateAction<ItemsType>>;
};

function FormContainer({ items, id, className, setItems }: PropsType) {
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

  return (
    <SortableContext id={id} items={items} strategy={verticalListSortingStrategy}>
      <Card className={className}>
        <CardContent ref={setNodeRef} className="flex flex-col gap-4 p-4 rounded-xl">
          {items.map((item) => (
            <div key={item.id} className="relative">
              <div className="absolute -top-3 right-4 ease-in-out transition duration-400 flex gap-2">
                <InputDialog
                  values={{ ...item }}
                  onSubmit={(values) => {
                    handleEdit(item.id, values);
                  }}
                />

                <Button
                  variant="outline-danger"
                  className="p-2 rounded-full"
                  onClick={() => handleRemove(item.id)}
                >
                  <Trash2 className="size-2" />
                </Button>
              </div>
              <SortableItem {...item} />
            </div>
          ))}

          {items.length ? <Button>Submit</Button> : <div></div>}
        </CardContent>
      </Card>
    </SortableContext>
  );
}

export default FormContainer;
