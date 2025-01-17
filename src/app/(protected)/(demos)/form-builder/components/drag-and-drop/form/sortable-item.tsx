"use client";
import React, {
  createContext,
  CSSProperties,
  PropsWithChildren,
  useContext,
  useMemo,
} from "react";
import { DraggableSyntheticListeners, UniqueIdentifier } from "@dnd-kit/core";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Button } from "@/components/shadcn/ui/button";
import { GripVertical } from "lucide-react";

type Props = {
  id: UniqueIdentifier;
};

interface Context {
  attributes: Record<string, any>;
  listeners: DraggableSyntheticListeners;
  ref(node: HTMLElement | null): void;
}

const SortableItemContext = createContext<Context>({
  attributes: {},
  listeners: undefined,
  ref() {},
});

function FormSortableItem({ children, id }: PropsWithChildren<Props>) {
  const {
    attributes,
    isDragging,
    listeners,
    setNodeRef,
    setActivatorNodeRef,
    transform,
    transition,
  } = useSortable({ id });
  const context = useMemo(
    () => ({
      attributes,
      listeners,
      ref: setActivatorNodeRef,
    }),
    [attributes, listeners, setActivatorNodeRef],
  );
  const style: CSSProperties = {
    opacity: isDragging ? 0.5 : undefined,
    border: isDragging ? "2px" : undefined,
    borderStyle: isDragging ? "dashed" : undefined,
    padding: isDragging ? "4px 8px" : undefined,
    borderRadius: isDragging ? "8px" : undefined,
    transform: CSS.Translate.toString(transform),
    transition,
  };

  return (
    <SortableItemContext.Provider value={context}>
      <div ref={setNodeRef} style={style}>
        {children}
      </div>
    </SortableItemContext.Provider>
  );
}

export function FormDragHandle() {
  const { attributes, listeners, ref } = useContext(SortableItemContext);

  return (
    <Button
      variant="ghost"
      size="icon"
      {...attributes}
      {...listeners}
      ref={ref}
    >
      <GripVertical size={18} />
    </Button>
  );
}

export default FormSortableItem;
