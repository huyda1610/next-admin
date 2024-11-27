'use client';
import React from 'react';
import { Card, CardContent, CardHeader } from '@components/shadcn/card';
import { cn } from '@lib/utils';
import { ChartColumnBig, House, KeyRound, Layers3, LayoutPanelLeft, Settings } from 'lucide-react';

function WorkspaceNavigator() {
  const data = [
    {
      name: 'Home',
      icon: (
        <House className="w-7 h-7 text-primary group-hover:scale-125 duration-300 transition-all" />
      ),
    },
    {
      name: 'Apps',
      icon: (
        <LayoutPanelLeft className="w-7 h-7 text-danger group-hover:scale-125 duration-300 transition-all" />
      ),
    },
    {
      name: 'Layer',
      icon: (
        <Layers3 className="w-7 h-7 text-warning group-hover:scale-125 duration-300 transition-all" />
      ),
    },
    {
      name: 'Setting',
      icon: (
        <Settings className="w-7 h-7 text-success group-hover:scale-125 duration-300 transition-all" />
      ),
    },
    {
      name: 'Auth',
      icon: (
        <KeyRound className="w-7 h-7 text-purple group-hover:scale-125 duration-300 transition-all" />
      ),
    },
    {
      name: 'Charts',
      icon: (
        <ChartColumnBig className="w-7 h-7 text-blue-sky group-hover:scale-125 duration-300 transition-all" />
      ),
    },
  ];

  return (
    <Card>
      <CardHeader>Quick Navigator</CardHeader>
      <CardContent className="grid grid-cols-2 xl:grid-cols-3">
        {data.map((item, index) => (
          <section
            key={item.name}
            className={cn(
              'py-8 border border-solid border-border-color border-l-0 transition-all' +
                ' hover:shadow-xl flex flex-col hover:cursor-pointer items-center group',
              (index + 1) % 3 === 0 && 'border-r-0',
            )}
          >
            {item.icon}
            <strong>{item.name}</strong>
          </section>
        ))}
      </CardContent>
    </Card>
  );
}

export default WorkspaceNavigator;
