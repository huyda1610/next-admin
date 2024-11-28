'use client';
import React from 'react';
import { useClientMetadata } from '@hooks/useClientMetadata';
import AnalyticsInfo from '@app/(auth)/analytics/components/info';
import AnalyticsTabs from '@app/(auth)/analytics/components/tabs';
import AnalyticsVisitsSource from './components/visits-source';
import AnalyticsVisitsData from '@app/(auth)/analytics/components/visits-data';
import AnalyticsVisitsSales from '@app/(auth)/analytics/components/visits-sales';

function AnalyticsPage() {
  useClientMetadata('Analytics');

  return (
    <article className="p-5 flex flex-col gap-5">
      <AnalyticsInfo />

      <AnalyticsTabs />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <AnalyticsVisitsData />
        <AnalyticsVisitsSource />
        <AnalyticsVisitsSales />
      </div>
    </article>
  );
}

export default AnalyticsPage;
