'use client';
import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import FormInput from '@components/form-ui/form-input';

export function Item(props: any) {
  const { id } = props;

  return (
    <div
      id={id}
      className="w-full h-full bg-white p-3 border-2 border-solid border-border-color rounded-xl"
    >
      <FormInput name="asdasd" label="huyda4" placeholder="test" />
    </div>
  );
}

export default function SortableItem(props) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: props.id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <Item id={props.id} />
    </div>
  );
}
