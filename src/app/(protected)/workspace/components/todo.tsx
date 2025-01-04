"use client";
import React from "react";
import { Card, CardContent, CardHeader } from "@/components/shadcn/ui/card";
import { cn } from "@/lib/utils";
import { randomGenerate } from "@/@core/utils/randomGenerate";
import { Checkbox } from "@/components/shadcn/ui/checkbox";
import { DATE_FORMAT } from "@/@core/const";

const data = [
  {
    id: crypto.randomUUID(),
    title: "Review front-end code submissions",
    description:
      "Review the front-end code recently submitted to the git repository to ensure code quality and specifications.",
    date: randomGenerate.date().format(DATE_FORMAT),
  },
  {
    id: crypto.randomUUID(),
    title: "System performance optimization",
    description: "Check and optimize system performance and reduce CPU usage.",
    date: randomGenerate.date().format(DATE_FORMAT),
  },
  {
    id: crypto.randomUUID(),
    title: "Security check",
    description:
      "Conduct system security checks to ensure there are no security breaches or unauthorized access.",
    date: randomGenerate.date().format(DATE_FORMAT),
  },
  {
    id: crypto.randomUUID(),
    title: "Update project dependencies",
    description:
      "Update all npm dependency packages in the project to ensure they are using the latest versions.",
    date: randomGenerate.date().format(DATE_FORMAT),
  },
  {
    id: crypto.randomUUID(),
    title: "Fix UI display problem",
    description:
      "Fix the page UI display problem reported by users to ensure consistent display in different browsers.",
    date: randomGenerate.date().format(DATE_FORMAT),
  },
];

function WorkspaceTodoList() {
  const [checkedId, setCheckedId] = React.useState<string[]>([]);

  const handleCheck = (id: string) => {
    if (!isChecked(id)) {
      return setCheckedId((prevState) => [...prevState, id]);
    }

    setCheckedId((prevState) => prevState.filter((checkId) => checkId !== id));
  };

  const isChecked = (id: string): boolean => {
    return checkedId.includes(id);
  };

  return (
    <Card>
      <CardHeader>To-do list</CardHeader>
      <CardContent className="flex flex-col p-5 pt-0">
        {data.map((item, index) => (
          <section
            key={item.id}
            onClick={() => handleCheck(item.id)}
            className={cn(
              "flex justify-between items-end py-5 border-border-color border-b border-solid" +
                " hover:cursor-pointer",
              index === data.length - 1 && "border-b-0",
              isChecked(item.id) && "opacity-70",
            )}
          >
            <div className="flex gap-x-4 items-center">
              <Checkbox color="primary" checked={isChecked(item.id)} />
              <div className="flex flex-col justify-between">
                <strong className={isChecked(item.id) ? "line-through" : ""}>
                  {item.title}
                </strong>
                <span
                  className={`text-xs line-clamp-2 ${isChecked(item.id) && "line-through"}`}
                >
                  {item.description}
                </span>
              </div>
            </div>

            <span
              className={`text-xs max-sm:hidden min-w-[90px] ${isChecked(item.id) && "line-through"}`}
            >
              {item.date}
            </span>
          </section>
        ))}
      </CardContent>
    </Card>
  );
}

export default WorkspaceTodoList;
