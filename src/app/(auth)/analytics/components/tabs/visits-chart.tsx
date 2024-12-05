'use client';
import React from 'react';
import NextColumnChart from '@components/share/charts/column';

function VisitsChart() {
  const data = [
    {
      name: 'Jan',
      value: 3000,
    },
    {
      name: 'Feb',
      value: 2000,
    },
    {
      name: 'Mar',
      value: 3333,
    },
    {
      name: 'Apr',
      value: 5000,
    },
    {
      name: 'May',
      value: 3200,
    },
    {
      name: 'Jun',
      value: 4200,
    },
    {
      name: 'Jul',
      value: 3200,
    },
    {
      name: 'Aug',
      value: 2100,
    },
    {
      name: 'Sep',
      value: 3000,
    },
    {
      name: 'Oct',
      value: 5100,
    },
    {
      name: 'Nov',
      value: 6000,
    },
    {
      name: 'Dec',
      value: 4800,
    },
  ];

  return <NextColumnChart data={data} />;
}

export default VisitsChart;
