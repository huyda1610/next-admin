"use client";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import React from "react";
import { useDroppable } from "@dnd-kit/core";
import { Card, CardContent, CardHeader } from "@/components/shadcn/ui/card";
import { FormItemType } from "../../type";
import RootSortableItem from "./sortable-item";

type PropsType = {
  id: string;
  items: FormItemType[];
};

function RootContainer({ items, id }: PropsType) {
  const { setNodeRef } = useDroppable({
    id,
  });

  return (
    <SortableContext
      id={id}
      items={items}
      strategy={verticalListSortingStrategy}
    >
      <Card className="h-full w-[302px]">
        <CardHeader className="text-md font-semibold">
          Drag and drop elements
        </CardHeader>
        <CardContent ref={setNodeRef} className="grid grid-cols-2 gap-2">
          {items.map((item) => (
            <RootSortableItem key={item.id} isRoot={true} {...item} />
          ))}
        </CardContent>
      </Card>
    </SortableContext>
  );
}

export default RootContainer;
