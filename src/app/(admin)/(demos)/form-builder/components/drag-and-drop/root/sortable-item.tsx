import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { ItemType } from "@/app/(admin)/(demos)/form-builder/components/type";
import RootItem from "@/app/(admin)/(demos)/form-builder/components/drag-and-drop/root/root-item";

type SortableItemProps = ItemType & {
  isRoot?: boolean;
  id: string;
};

function RootSortableItem(props: SortableItemProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: props.id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <RootItem type={props.type} isDragging={isDragging} />
    </div>
  );
}

export default RootSortableItem;
