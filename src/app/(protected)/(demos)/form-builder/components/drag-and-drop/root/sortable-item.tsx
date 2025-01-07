import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { FormItemType } from "@/app/(protected)/(demos)/form-builder/type/type";
import RootItem from "@/app/(protected)/(demos)/form-builder/components/drag-and-drop/root/root-item";

type SortableItemProps = FormItemType & {
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
