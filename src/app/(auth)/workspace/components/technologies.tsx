'use client';
import React from 'react';
import { Card, CardContent, CardHeader } from '@components/shadcn/ui/card';
import ShareIcon from '@components/share/icon';
import { cn } from '@lib/utils';
import generateRandomDate from '@core/utils/randomDate';
import { DATE_FORMAT } from '@core/const/app-const';
import { useCheckClient } from '@hooks/useCheckClient';

const data = [
  {
    name: 'Github',
    icon: 'github',
    desc: "Don't wait for opportunities, create them.",
    group: 'Open source',
    date: generateRandomDate().format(DATE_FORMAT),
  },
  {
    name: 'Nextjs',
    icon: 'next',
    desc: 'Who you are now determines who you will be in the future.',
    group: 'Algorithm',
    date: generateRandomDate().format(DATE_FORMAT),
  },
  {
    name: 'React',
    icon: 'react',
    desc: 'A healthy body is the cornerstone of achieving your goals.',
    group: 'Technical',
    date: generateRandomDate().format(DATE_FORMAT),
  },
  {
    name: 'Typescript',
    icon: 'typescript',
    desc: 'The road is walked, not imagined.',
    group: 'Architecture',
    date: generateRandomDate().format(DATE_FORMAT),
  },
  {
    name: 'Html5',
    icon: 'html',
    desc: 'No talent is more important than hard work.',
    group: 'UI',
    date: generateRandomDate().format(DATE_FORMAT),
  },
  {
    name: 'Css3',
    icon: 'css',
    desc: 'Passion and desire can overcome all obstacles.',
    group: 'UI',
    date: generateRandomDate().format(DATE_FORMAT),
  },
];

function WorkspaceTechnologies() {
  const { isClient } = useCheckClient();

  if (!isClient) return null;

  return (
    <Card>
      <CardHeader>Technologies</CardHeader>
      <CardContent className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
        {data.map((item, index) => (
          <section
            key={item.icon}
            className={cn(
              'p-4 border border-solid border-border-color border-l-0 justify-between' +
                ' transition-all' +
                ' hover:shadow-xl flex flex-col hover:cursor-pointer gap-4 group max-sm:border-r-0',
              (index + 1) % 3 === 0 && 'xl:border-r-0',
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
