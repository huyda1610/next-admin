'use client';

import React, { useState } from 'react';
import {
  closestCorners,
  DndContext,
  DragOverlay,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { arrayMove, sortableKeyboardCoordinates } from '@dnd-kit/sortable';
import type { DragOverEvent } from '@dnd-kit/core/dist/types';
import RootContainer from '@app/(auth)/form-builder/components/drag-and-drop/root-container';
import FormContainer from '@app/(auth)/form-builder/components/drag-and-drop/form-container';
import { FormItemType, ItemsType } from '@app/(auth)/form-builder/components/drag-and-drop/type';
import FormItem from '@app/(auth)/form-builder/components/drag-and-drop/form-item';
import { getRandomNumberInRange } from '@core/utils/randomNumber';

function DragAndDrop() {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  const [activeItem, setActiveItem] = useState<FormItemType | null>(null);
  const [items, setItems] = useState<ItemsType>({
    root: [
      {
        id: '1',
        type: 'input',
        label: 'Username',
        description: 'This is your public display name.',
        fieldName: 'input-1',
        placeholder: 'next admin',
      },
    ],
    form: [],
  });

  function findContainer(id: string): keyof ItemsType | undefined {
    if (id in items) {
      return id as keyof ItemsType;
    }

    let result: keyof ItemsType | undefined;

    for (const key in items) {
      if (items[key as keyof ItemsType].findIndex((item) => item.id === id) !== -1) {
        result = key as keyof ItemsType;
        break;
      }
    }

    return result;
  }

  function handleDragStart(event: DragOverEvent) {
    const { active } = event;
    const { id } = active;

    const container = findContainer(id as string);

    if (!container) return;
    const item = items[container].find((item) => item.id === id);
    if (!item) return;

    setActiveItem(item);
  }

  function handleDragOver(event: any) {
    const { active, over, draggingRect } = event;
    const { id } = active;
    const { id: overId } = over;

    // Find the containers
    const activeContainer = findContainer(id);
    const overContainer = findContainer(overId);

    if (
      !activeContainer ||
      !overContainer ||
      activeContainer === overContainer ||
      overContainer === 'root'
    ) {
      return;
    }

    setItems((prev) => {
      const activeItems = prev[activeContainer];
      const overItems = prev[overContainer];

      // Find the indexes for the items
      const activeIndex = activeItems.findIndex((item) => item.id === id);
      const overIndex = overItems.findIndex((item) => item.id === overId);

      let newIndex;
      if (overId in prev) {
        // We're at the root droppable of a container
        newIndex = overItems.length + 1;
      } else {
        const isBelowLastItem =
          over &&
          overIndex === overItems.length - 1 &&
          draggingRect?.offsetTop > over.rect?.offsetTop + over.rect.height;

        const modifier = isBelowLastItem ? 1 : 0;

        newIndex = overIndex >= 0 ? overIndex + modifier : overItems.length + 1;
      }

      return {
        ...prev,
        [activeContainer]: [
          ...prev[activeContainer].filter((item) => item.id !== active.id),
          {
            ...items[activeContainer][activeIndex],
            id: crypto.randomUUID(),
            fieldName:
              items[activeContainer][activeIndex].fieldName.split('-')[0] +
              '-' +
              getRandomNumberInRange(1, 999999),
          },
        ],
        [overContainer]: [
          ...prev[overContainer].slice(0, newIndex).filter((item) => item.id !== active.id),
          items[activeContainer][activeIndex],
          ...prev[overContainer]
            .slice(newIndex, prev[overContainer].length)
            .filter((item) => item.id !== active.id),
        ],
      };
    });
  }

  function handleDragEnd(event: DragOverEvent) {
    const { active, over } = event;
    const { id } = active;

    const activeContainer = findContainer(id as string);
    const overContainer = findContainer((over?.id ?? '') as string);

    if (!activeContainer || !overContainer || activeContainer !== overContainer) {
      return;
    }

    const activeIndex = items[activeContainer].findIndex((item) => item.id === id);
    const overIndex = items[overContainer].findIndex((item) => item.id === over?.id);

    if (activeIndex !== overIndex) {
      setItems((items) => ({
        ...items,
        [overContainer]: arrayMove(items[overContainer], activeIndex, overIndex),
      }));
    }

    setActiveItem(null);
  }

  return (
    <div>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
      >
        <div className="flex gap-5">
          <RootContainer id="root" items={items.root} className="w-1/3" />
          <FormContainer id="form" items={items.form} className="w-1/3" setItems={setItems} />
        </div>

        <DragOverlay>{activeItem ? <FormItem {...activeItem} isDemo /> : null}</DragOverlay>
      </DndContext>
    </div>
  );
}

export default DragAndDrop;
