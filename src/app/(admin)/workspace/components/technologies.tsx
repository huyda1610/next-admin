"use client";
import React from "react";
import { Card, CardContent, CardHeader } from "@/components/shadcn/ui/card";
import { cn } from "@/lib/utils";
import { DATE_FORMAT } from "@/@core/const";
import { randomGenerate } from "@/@core/utils/randomGenerate";
import { NextIcon } from "@/components/shared/icon";

const data = [
  {
    name: "Github",
    icon: (
      <NextIcon.Github
        width={32}
        height={32}
        className="group-hover:scale-110 duration-300 transition-all"
      />
    ),
    desc: "Don't wait for opportunities, create them.",
    group: "Open source",
    date: randomGenerate.date().format(DATE_FORMAT),
  },
  {
    name: "Nextjs",
    icon: (
      <NextIcon.Next
        width={32}
        height={32}
        className="group-hover:scale-110 duration-300 transition-all"
      />
    ),
    desc: "Who you are now determines who you will be in the future.",
    group: "Algorithm",
    date: randomGenerate.date().format(DATE_FORMAT),
  },
  {
    name: "React",
    icon: (
      <NextIcon.React
        width={32}
        height={32}
        className="group-hover:scale-110 duration-300 transition-all"
      />
    ),
    desc: "A healthy body is the cornerstone of achieving your goals.",
    group: "Technical",
    date: randomGenerate.date().format(DATE_FORMAT),
  },
  {
    name: "Typescript",
    icon: (
      <NextIcon.Typescript
        width={32}
        height={32}
        className="group-hover:scale-110 duration-300 transition-all"
      />
    ),
    desc: "The road is walked, not imagined.",
    group: "Architecture",
    date: randomGenerate.date().format(DATE_FORMAT),
  },
  {
    name: "Html5",
    icon: (
      <NextIcon.Html
        width={32}
        height={32}
        className="group-hover:scale-110 duration-300 transition-all"
      />
    ),
    desc: "No talent is more important than hard work.",
    group: "UI",
    date: randomGenerate.date().format(DATE_FORMAT),
  },
  {
    name: "Css3",
    icon: (
      <NextIcon.Css
        width={32}
        height={32}
        className="group-hover:scale-110 duration-300 transition-all"
      />
    ),
    desc: "Passion and desire can overcome all obstacles.",
    group: "UI",
    date: randomGenerate.date().format(DATE_FORMAT),
  },
];

function WorkspaceTechnologies() {
  return (
    <Card>
      <CardHeader>Technologies</CardHeader>
      <CardContent className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 p-0">
        {data.map((item, index) => (
          <section
            key={item.name}
            className={cn(
              "p-4 border border-solid border-border-color border-l-0 justify-between" +
                " transition-all" +
                " hover:shadow-xl flex flex-col hover:cursor-pointer gap-4 group max-sm:border-r-0",
              (index + 1) % 3 === 0 && "xl:border-r-0",
            )}
          >
            <div className="flex items-center gap-4">
              {item.icon}
              <strong className="text-lg">{item.name}</strong>
            </div>
            <span className="line-clamp-2">{item.desc}</span>
            <div className="flex justify-between">
              <span>{item.group}</span>
              <span>{item.date}</span>
            </div>
          </section>
        ))}
      </CardContent>
    </Card>
  );
}

export default WorkspaceTechnologies;
