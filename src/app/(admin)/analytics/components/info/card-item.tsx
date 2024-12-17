import { Card, CardContent } from "@/components/shadcn/ui/card";
import React from "react";
import CountUp from "react-countup";

type ItemType = {
  title: string;
  value: number;
  totalTitle: string;
  totalValue: number;
  icon: React.ReactElement;
};

type PropsType = {
  item: ItemType;
};

function CardItem({ item }: PropsType) {
  return (
    <Card>
      <CardContent className="flex flex-col p-6">
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
