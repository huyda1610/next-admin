'use client';
import React from 'react';
import { cn } from '@lib/utils';
import { useClientMetadata } from '@hooks/useClientMetadata';

type PropsType = {
  children: React.ReactNode;
  title: string;
  description?: string;
  extra?: React.ReactNode;
  contentClass?: string;
};

function CommonPage({ children, contentClass, title, description, extra }: PropsType) {
  useClientMetadata(title);

  return (
    <article>
      {/*Header*/}
      <section className="px-6 py-4 bg-white">
        <h3 className="text-lg mb-2 font-bold">{title}</h3>
        <div className="flex items-center justify-between flex-wrap">
          <span className="text-gray-text">{description}</span>
          {extra}
        </div>
      </section>

      {/*Body*/}
      <section className={cn('p-4', contentClass)}>{children}</section>
    </article>
  );
}

export default CommonPage;
