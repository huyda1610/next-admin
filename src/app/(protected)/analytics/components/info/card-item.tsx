import { Card, CardContent } from "@/components/shadcn/ui/card";
import React from "react";
import CountUp from "react-countup";
import { cn } from "@/lib/utils";

type ItemType = {
  title: string;
  value: number;
  totalTitle: string;
  totalValue: number;
  className: string;
  icon: React.ReactElement;
};

type PropsType = {
  item: ItemType;
};

function CardItem({ item }: PropsType) {
  return (
    <Card>
      <CardContent
        className={cn("flex flex-col p-6 shadow-md rounded-xl", item.className)}
      >
        <div className="mb-2 flex justify-between items-center">
          <span>{item.title}</span>
          {item.icon}
        </div>
        <CountUp
          className="text-xl font-bold mb-1"
          start={1}
          end={item.value}
        />
        <div className="flex justify-between text-muted-foreground">
          <span>{item.totalTitle}</span>
          <CountUp start={1} end={item.totalValue} />
        </div>
      </CardContent>
    </Card>
  );
}

export default CardItem;
