'use client';
import React from 'react';
import { Card, CardContent, CardHeader } from '@components/shadcn/ui/card';
import { useCheckClient } from '@hooks/useCheckClient';
import NextPieChart from '@components/share/charts/pie';

const data = [
  { name: 'Search Engine', value: 1048 },
  { name: 'Direct Access', value: 735 },
  { name: 'Email Marketing', value: 580 },
  { name: 'Alliance Advertising', value: 484 },
];

function WorkspaceVisitsSource() {
  const { isClient } = useCheckClient();

  if (!isClient) return null;

  return (
    <Card>
      <CardHeader>Visits Source</CardHeader>
      <CardContent>
        <NextPieChart data={data} colors={['#5ab1ef', '#b6a2de', '#67e0e3', '#2ec7c9']} />
      </CardContent>
    </Card>
  );
}

export default WorkspaceVisitsSource;
