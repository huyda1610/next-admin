"use client";
import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/shadcn/ui/card";

function WorkspaceHeader() {
  const data = [
    {
      label: "To-do",
      value: "2/10",
    },
    {
      label: "Project",
      value: "8",
    },
    {
      label: "Members",
      value: "300",
    },
  ];

  return (
    <Card>
      <CardContent className="px-4 py-6 flex items-center md:justify-between flex-wrap gap-y-2">
        <div className="flex items-center gap-6">
          <Image
            alt="Profile"
            width={80}
            height={80}
            className="h-full object-cover rounded-full"
            src={`/images/avatar.webp`}
          />

          <div>
            <h1 className="text-xl font-semibold">
              Good morning, let’s start your day!
            </h1>
            <p className="text-sm text-muted-foreground">
              Sunny today, 20℃ - 32℃!
            </p>
          </div>
        </div>

        <div className="flex items-center gap-16 justify-end max-md:w-full">
          {data.map((item) => (
            <div key={item.label}>
              <span>{item.label}</span>
              <strong className="block text-2xl">{item.value}</strong>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default WorkspaceHeader;
