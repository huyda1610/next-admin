'use client';
import React from 'react';
import { Card, CardContent, CardHeader } from '@components/shadcn/card';
import { useCheckClient } from '@hooks/useCheckClient';
import SharePieChart from '@components/share/charts/pie';

const data = [
  { name: 'Search Engine', value: 1048 },
  { name: 'Direct Access', value: 735 },
  { name: 'Email Marketing', value: 580 },
  { name: 'Alliance Advertising', value: 484 },
];

function WorkspaceVisitSource() {
  const { isClient } = useCheckClient();

  if (!isClient) return null;

  return (
    <Card>
      <CardHeader>Visit Source</CardHeader>
      <CardContent>
        <SharePieChart data={data} />
      </CardContent>
    </Card>
  );
}

export default WorkspaceVisitSource;
