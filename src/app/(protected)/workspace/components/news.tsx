"use client";
import React from "react";
import { Card, CardContent, CardHeader } from "@/components/shadcn/ui/card";
import dayjs from "dayjs";

import relativeTime from "dayjs/plugin/relativeTime";
import { cn } from "@/lib/utils";
import { randomGenerate } from "@/@core/utils/randomGenerate";
import { NextIcon } from "@/components/shared/icon";

dayjs.extend(relativeTime);

const name: string[] = ["William", "John", "Jane", "Alvin", "Chris"];
const action: string[] = [
  "Created Nextjs project in the open source group",
  "Followed William",
  "Publish article How to write a Nextjs plug-in",
  "Published personal updates",
  "Pushed the code to Github",
  "Publish article How to write using Next Admin",
];
const avatar: React.ReactElement[] = [
  <NextIcon.Boar key={"boar"} width={40} height={40} />,
  <NextIcon.Cat key={"cat"} width={40} height={40} />,
  <NextIcon.Chicken key={"chicken"} width={40} height={40} />,
  <NextIcon.Alien key={"alien"} width={40} height={40} />,
  <NextIcon.Dog key={"dog"} width={40} height={40} />,
];
const date: string[] = [
  dayjs().subtract(1, "minute").toString(),
  dayjs().subtract(1, "hour").toString(),
  dayjs().subtract(1, "week").toString(),
  dayjs().subtract(1, "month").toString(),
];

const data = Array(9)
  .fill(null)
  .map((_, index) => ({
    id: crypto.randomUUID(),
    name: name[randomGenerate.number(0, 4)],
    action: action[randomGenerate.number(0, 5)],
    avatar: avatar[randomGenerate.number(0, 4)],
    date: date[index] || dayjs().subtract(2, "month").toString(),
  }));

function WorkspaceNews() {
  return (
    <Card>
      <CardHeader>Latest news</CardHeader>
      <CardContent className="flex flex-col p-5 pt-0">
        {data.map((item, index) => (
          <section
            key={item.id}
            className={cn(
              "flex justify-between items-end py-[21px] border-border-color border-b border-solid",
              index === data.length - 1 && "border-b-0",
            )}
          >
            <div className="flex gap-x-4 items-center">
              {item.avatar}
              <div className="flex flex-col justify-between">
                <strong>{item.name}</strong>
                <span className="text-xs">{item.action}</span>
              </div>
            </div>

            <span className="text-xs max-sm:hidden">
              {dayjs(item.date).fromNow()}
            </span>
          </section>
        ))}
      </CardContent>
    </Card>
  );
}

export default WorkspaceNews;
