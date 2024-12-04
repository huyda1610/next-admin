'use client';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import React from 'react';
import { useDroppable } from '@dnd-kit/core';
import { Card, CardContent } from '@components/shadcn/ui/card';
import { FormItemType } from './type';
import SortableItem from './sortable-item';

type PropsType = {
  id: string;
  items: FormItemType[];
};

function RootContainer({ items, id }: PropsType) {
  const { setNodeRef } = useDroppable({
    id,
  });

  return (
    <SortableContext id={id} items={items} strategy={verticalListSortingStrategy}>
      <Card>
        <CardContent ref={setNodeRef} className="flex flex-col gap-4 p-4 rounded-xl">
          {items.map((item) => (
            <SortableItem key={item.id} {...item} />
          ))}
        </CardContent>
      </Card>
    </SortableContext>
  );
}

export default RootContainer;
