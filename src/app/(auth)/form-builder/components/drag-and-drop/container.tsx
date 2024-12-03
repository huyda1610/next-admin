'use client';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import React from 'react';
import { useDroppable } from '@dnd-kit/core';
import SortableItem from './sortable-item';
import { Card, CardContent } from '@components/shadcn/ui/card';

function Container(props) {
  const { id, items } = props;

  const { setNodeRef } = useDroppable({
    id,
  });

  return (
    <SortableContext id={id} items={items} strategy={verticalListSortingStrategy}>
      <Card>
        <CardContent ref={setNodeRef} className="flex flex-col gap-4 p-4 rounded-xl">
          {items.map((id) => (
            <SortableItem key={id} id={id} />
          ))}
        </CardContent>
      </Card>
    </SortableContext>
  );
}

export default Container;
