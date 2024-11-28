import { Card, CardContent, CardHeader } from '@components/shadcn/card';
import React from 'react';
import ShareIcon, { ShareIconType } from '@components/share/icon';

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
          <span className="text-xl">{item.value.toLocaleString()}</span>
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
          <span>{item.totalValue.toLocaleString()}</span>
        </div>
      </CardContent>
    </Card>
  );
}

export default CardItem;
