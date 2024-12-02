'use client';
import React from 'react';

type PropsType = {
  title: string;
  description?: string;
  extra?: React.ReactNode;
};

function SharePageHeader({ title, description, extra }: PropsType) {
  return (
    <section className="px-6 py-4 bg-white">
      <h3 className="text-lg mb-2 font-bold">{title}</h3>
      <div className="flex items-center justify-between flex-wrap">
        <span className="text-gray-text">{description}</span>
        {extra}
      </div>
    </section>
  );
}

export default SharePageHeader;
