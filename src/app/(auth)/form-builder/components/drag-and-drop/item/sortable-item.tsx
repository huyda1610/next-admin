import React from 'react';
import { FormItemType } from '@app/(auth)/form-builder/components/drag-and-drop/type';
import { useSortable } from '@dnd-kit/sortable';
import FormItem from './form-item';
import { CSS } from '@dnd-kit/utilities';

type SortableItemProps = FormItemType & {
  isRoot?: boolean;
};

function SortableItem(props: SortableItemProps) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: props.id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <FormItem isDragging={isDragging} {...props} />
    </div>
  );
}

export default SortableItem;
