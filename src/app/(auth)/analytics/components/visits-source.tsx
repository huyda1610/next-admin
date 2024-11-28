'use client';
import React from 'react';
import { Card, CardContent, CardHeader } from '@components/shadcn/card';
import { useCheckClient } from '@hooks/useCheckClient';
import SharePieChart from '@components/share/charts/pie';

const data = [
  { name: 'Search Engine', value: 1048 },
  { name: 'Direct Access', value: 735 },
  { name: 'Marketing', value: 580 },
  { name: 'Advertising', value: 484 },
];

function AnalyticsVisitsSource() {
  const { isClient } = useCheckClient();

  if (!isClient) return null;

  return (
    <Card>
      <CardHeader>Visits Source</CardHeader>
      <CardContent className="p-6 pt-0">
        <SharePieChart data={data} colors={['#5ab1ef', '#b6a2de', '#67e0e3', '#2ec7c9']} />
      </CardContent>
    </Card>
  );
}

export default AnalyticsVisitsSource;
