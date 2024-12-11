import React from 'react';
import { FormItemType } from '@app/(auth)/form-builder/components/drag-and-drop/type';
import { useSortable } from '@dnd-kit/sortable';
import FormItem from '@app/(auth)/form-builder/components/drag-and-drop/form-item';
import { CSS } from '@dnd-kit/utilities';

type SortableItemProps = FormItemType & {
  isRoot?: boolean;
};

function SortableItem(props: SortableItemProps) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: props.id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <FormItem {...props} />
    </div>
  );
}

export default SortableItem;
