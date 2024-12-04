'use client';
import React from 'react';
import { FormItemType, ItemsType } from './type';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { Card, CardContent } from '@components/shadcn/ui/card';
import SortableItem from '@app/(auth)/form-builder/components/drag-and-drop/sortable-item';
import { useDroppable } from '@dnd-kit/core';
import { Button } from '@components/shadcn/ui/button';
import { Pencil, Trash2 } from 'lucide-react';

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

  return (
    <SortableContext id={id} items={items} strategy={verticalListSortingStrategy}>
      <Card className={className}>
        <CardContent ref={setNodeRef} className="flex flex-col gap-4 p-4 rounded-xl">
          {items.map((item) => (
            <div key={item.id} className="relative group">
              <div className="absolute -top-3 right-4 group-hover:visible invisible ease-in-out transition duration-400 flex gap-2">
                <Button variant="outline-general" className="p-2 rounded-full">
                  <Pencil className="size-2" />
                </Button>
                <Button
                  variant="outline-general"
                  className="p-2 rounded-full"
                  onClick={() => handleRemove(item.id)}
                >
                  <Trash2 className="size-2 text-danger" />
                </Button>
              </div>
              <SortableItem {...item} />
            </div>
          ))}

          {items.length ? <Button>Submit</Button> : <></>}
        </CardContent>
      </Card>
    </SortableContext>
  );
}

export default FormContainer;
