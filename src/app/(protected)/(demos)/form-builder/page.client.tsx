"use client";
import React, { useState } from "react";

import {
  closestCorners,
  DndContext,
  DragOverlay,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import { FormItemType, ItemsType } from "./type/type";
import { DragOverEvent } from "@dnd-kit/core/dist/types";
import { randomGenerate } from "@/@core/utils/randomGenerate";
import RootContainer from "./components/drag-and-drop/root";
import RootItem from "@/app/(protected)/(demos)/form-builder/components/drag-and-drop/root/root-item";
import FormContainer from "./components/drag-and-drop/form";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/shadcn/ui/tabs";
import { Card, CardContent } from "@/components/shadcn/ui/card";
import FormItem from "@/app/(protected)/(demos)/form-builder/components/drag-and-drop/form/form-item";
import FormBuilderCodeBlock from "@/app/(protected)/(demos)/form-builder/components/code-block";
import { FieldTypeEnum } from "@/app/(protected)/(demos)/form-builder/enum/FieldTypeEnum.enum";

const rootItems: FormItemType[] = [
  {
    id: "1",
    type: FieldTypeEnum.INPUT,
    label: "Username",
    description: "This is your public display name.",
    fieldName: "input_1",
    placeholder: "Next Admin",
    isDraggingForm: false,
    controls: "",
  },
  {
    id: "2",
    type: FieldTypeEnum.TEXT_AREA,
    label: "Bio",
    description: "You can @mention other users and organizations.",
    fieldName: "textarea_1",
    placeholder: "Tell us a little bit about yourself.",
    isDraggingForm: false,
    controls: "",
  },
  {
    id: "3",
    type: FieldTypeEnum.NUMBER,
    label: "Age",
    description: "Input your age.",
    fieldName: "number_1",
    placeholder: "29",
    isDraggingForm: false,
    controls: "",
  },
  {
    id: "4",
    type: FieldTypeEnum.DATE_PICKER,
    label: "Date of birth",
    description: "Your date of birth is used to calculate your age.",
    fieldName: "datepicker_1",
    placeholder: "Pick a date",
    isDraggingForm: false,
    controls: "",
  },
  {
    id: "5",
    type: FieldTypeEnum.SELECT,
    label: "Email",
    description: "You can manage email addresses in your email settings.",
    fieldName: "select_1",
    placeholder: "mail@example.com",
    isDraggingForm: false,
    controls: "",
    options: [
      {
        label: "m@example.com",
        value: "m@example.com",
      },
      {
        label: "m@google.com",
        value: "m@google.com",
      },
      {
        label: "m@support.com",
        value: "m@support.com",
      },
    ],
  },
  {
    id: "6",
    type: FieldTypeEnum.CHECKBOX,
    label: "Use different settings for my mobile devices",
    description:
      "You can manage your mobile notifications in the mobile settings page",
    fieldName: "checkbox_1",
    isDraggingForm: false,
    controls: "",
  },
  {
    id: "7",
    type: FieldTypeEnum.PASSWORDOPT,
    label: "Password",
    description: "Enter your password.",
    fieldName: "SELECT_1",
    placeholder: "This is your password",
    isDraggingForm: false,
    controls: "",
  },
  {
    id: "8",
    type: FieldTypeEnum.SLIDER,
    label: "Slider",
    description:
      "Selected value is 0, minimun valus is 0, maximim values is 100, step size is 10",
    fieldName: "SLIDER_1",
    placeholder: "mail@example.com",
    isDraggingForm: false,
    controls: "",
  },
];

function FormBuilderComponent() {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  const [activeItem, setActiveItem] = useState<FormItemType | null>(null);
  const [items, setItems] = useState<ItemsType>({
    root: rootItems,
    form: [],
  });

  function findContainer(id: string): keyof ItemsType | undefined {
    if (id in items) {
      return id as keyof ItemsType;
    }

    let result: keyof ItemsType | undefined;

    for (const key in items) {
      if (
        items[key as keyof ItemsType].findIndex((item) => item.id === id) !== -1
      ) {
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

    setActiveItem({ ...item, isDraggingForm: container === "form" });
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
      overContainer === "root"
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
          ...prev[activeContainer].map((item) => {
            if (item.id !== active.id) return item;
            return {
              ...items[activeContainer][activeIndex],
              id: crypto.randomUUID(),
              fieldName:
                items[activeContainer][activeIndex].fieldName.split("_")[0] +
                "_" +
                randomGenerate.number(1, 999999),
            };
          }),
        ],
        [overContainer]: [
          ...prev[overContainer]
            .slice(0, newIndex)
            .filter((item) => item.id !== active.id),
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
    const overContainer = findContainer((over?.id ?? "") as string);

    if (
      !activeContainer ||
      !overContainer ||
      activeContainer !== overContainer ||
      overContainer === "root"
    ) {
      return;
    }

    const activeIndex = items[activeContainer].findIndex(
      (item) => item.id === id,
    );
    const overIndex = items[overContainer].findIndex(
      (item) => item.id === over?.id,
    );

    if (activeIndex !== overIndex) {
      setItems((items) => ({
        ...items,
        [overContainer]: arrayMove(
          items[overContainer],
          activeIndex,
          overIndex,
        ),
      }));
    }

    setActiveItem(null);
  }

  const renderDragItem = (): React.ReactElement => {
    if (!activeItem) return <></>;
    if (activeItem?.isDraggingForm)
      return (
        <FormItem
          handleRemoveAction={() => {}}
          handleEditAction={() => {}}
          handleSetFormItemValue={() => {}}
          item={activeItem}
          isDragging={true}
          value={activeItem.value}
        />
      );
    return <RootItem type={activeItem.type} />;
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCorners}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
    >
      <div className="grid grid-cols-3 gap-5">
        <RootContainer id="root" items={items.root} />

        <Card className="col-span-2">
          <CardContent className="p-0 pt-2">
            <Tabs defaultValue="form">
              <TabsList className="relative w-full justify-start rounded-none border-b bg-transparent p-1">
                <TabsTrigger
                  value="form"
                  className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
                >
                  Form Preview
                </TabsTrigger>
                <TabsTrigger
                  value="code"
                  className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
                >
                  Code
                </TabsTrigger>
              </TabsList>
              <TabsContent value="form">
                <FormContainer
                  id="form"
                  items={items.form}
                  setItems={setItems}
                />
              </TabsContent>
              <TabsContent value="code">
                <FormBuilderCodeBlock />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>

      <DragOverlay>{renderDragItem()}</DragOverlay>
    </DndContext>
  );
}

export default FormBuilderComponent;
