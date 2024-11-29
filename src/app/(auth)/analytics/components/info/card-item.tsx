import { Card, CardContent, CardHeader } from '@components/shadcn/ui/card';
import React from 'react';
import ShareIcon, { ShareIconType } from '@components/share/icon';
import CountUp from 'react-countup';

type ItemType = {
  title: string;
  value: number;
  totalTitle: string;
  totalValue: number;
  icon: ShareIconType;
};

type PropsType = {
  item: ItemType;
};

function CardItem({ item }: PropsType) {
  return (
    <Card>
      <CardHeader className="text-xl p-5">{item.title}</CardHeader>
      <CardContent className="flex flex-col">
        <div className="flex justify-between p-6 pt-0">
          <CountUp className="text-xl" start={1} end={item.value} />
          <ShareIcon
            select={item.icon}
            iconProps={{
              width: 36,
              height: 36,
              className: 'text-danger',
            }}
          ></ShareIcon>
        </div>
        <div className="flex justify-between p-6 pt-0">
          <span>{item.totalTitle}</span>
          <CountUp start={1} end={item.totalValue} />
        </div>
      </CardContent>
    </Card>
  );
}

export default CardItem;
