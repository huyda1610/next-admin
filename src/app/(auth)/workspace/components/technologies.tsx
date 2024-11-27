'use client';
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader } from '@components/shadcn/card';
import ShareIcon from '@components/share/icon';
import { cn } from '@lib/utils';
import generateRandomDate from '@core/utils/randomDate';
import { DATE_FORMAT } from '@core/const/app-const';

const data = [
  {
    name: 'Github',
    icon: 'github',
    desc: "Don't wait for opportunities, create them.",
    group: 'Open source group',
    date: generateRandomDate().format(DATE_FORMAT),
  },
  {
    name: 'Nextjs',
    icon: 'next',
    desc: 'Who you are now determines who you will be in the future.',
    group: 'Algorithm group',
    date: generateRandomDate().format(DATE_FORMAT),
  },
  {
    name: 'React',
    icon: 'react',
    desc: 'A healthy body is the cornerstone of achieving your goals.',
    group: 'Technical group',
    date: generateRandomDate().format(DATE_FORMAT),
  },
  {
    name: 'Typescript',
    icon: 'typescript',
    desc: 'The road is walked, not imagined.',
    group: 'Architecture group',
    date: generateRandomDate().format(DATE_FORMAT),
  },
  {
    name: 'Html5',
    icon: 'html',
    desc: 'No talent is more important than hard work.',
    group: 'UI group',
    date: generateRandomDate().format(DATE_FORMAT),
  },
  {
    name: 'Css3',
    icon: 'css',
    desc: 'Passion and desire can overcome all obstacles.',
    group: 'UI group',
    date: generateRandomDate().format(DATE_FORMAT),
  },
];

function WorkspaceTechnologies() {
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <Card>
      <CardHeader>Technologies</CardHeader>
      <CardContent className="grid grid-cols-2 xl:grid-cols-3">
        {data.map((item, index) => (
          <section
            key={item.icon}
            className={cn(
              'p-4 border border-solid border-border-color border-l-0 transition-all' +
                ' hover:shadow-xl flex flex-col hover:cursor-pointer gap-4 group',
              (index + 1) % 3 === 0 && 'border-r-0',
            )}
          >
            <div className="flex items-center gap-4">
              <ShareIcon
                select={item.icon as any}
                iconProps={{
                  width: 32,
                  height: 32,
                  className: 'group-hover:scale-110 duration-300 transition-all',
                }}
              />
              <strong className="text-lg">{item.name}</strong>
            </div>
            <div className="h-10">
              <span>{item.desc}</span>
            </div>
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
