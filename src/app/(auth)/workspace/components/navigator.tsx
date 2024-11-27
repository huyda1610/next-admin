'use client';
import React from 'react';
import { Card, CardContent, CardHeader } from '@components/shadcn/card';
import { cn } from '@lib/utils';
import { ChartColumnBig, House, KeyRound, Layers3, LayoutPanelLeft, Settings } from 'lucide-react';

function WorkspaceNavigator() {
  const data = [
    {
      name: 'Home',
      icon: <House />,
    },
    {
      name: 'Apps',
      icon: <LayoutPanelLeft />,
    },
    {
      name: 'Layer',
      icon: <Layers3 />,
    },
    {
      name: 'Setting',
      icon: <Settings />,
    },
    {
      name: 'Auth',
      icon: <KeyRound />,
    },
    {
      name: 'Charts',
      icon: <ChartColumnBig />,
    },
  ];

  return (
    <Card>
      <CardHeader>Navigator</CardHeader>
      <CardContent>
        <section className="grid grid-cols-2 xl:grid-cols-3">
          {data.map((item, index) => (
            <div
              key={item.name}
              className={cn(
                'py-8 border border-solid border-border-color border-l-0 transition-all' +
                  ' hover:shadow-xl flex flex-col hover:cursor-pointer gap-1',
                (index + 1) % 3 === 0 && 'border-r-0',
              )}
            >
              {item.icon}
              <strong className="text-lg">{item.name}</strong>
            </div>
          ))}
        </section>
      </CardContent>
    </Card>
  );
}

export default WorkspaceNavigator;
