'use client';
import React from 'react';
import CardItem from './card-item';
import { ShareIconType } from '@components/share/icon';

const data = [
  {
    title: 'Users',
    value: 2000,
    totalTitle: 'Total',
    totalValue: 120000,
    icon: 'card' as ShareIconType,
  },
  {
    title: 'Visits',
    value: 2000,
    totalTitle: 'Total',
    totalValue: 500000,
    icon: 'barchart' as ShareIconType,
  },
  {
    title: 'Downloads',
    value: 8000,
    totalTitle: 'Total',
    totalValue: 120000,
    icon: 'download' as ShareIconType,
  },
  {
    title: 'Usage',
    value: 5000,
    totalTitle: 'Total',
    totalValue: 50000,
    icon: 'clock' as ShareIconType,
  },
];

function AnalyticsInfo() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {data.map((item) => (
        <CardItem key={item.title} item={item} />
      ))}
    </div>
  );
}

export default AnalyticsInfo;
