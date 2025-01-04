import React from "react";
import AnalyticsInfo from "./components/info";
import AnalyticsTabs from "./components/tabs";
import AnalyticsVisitsSource from "./components/visits-source";
import AnalyticsVisitsData from "./components/visits-data";
import AnalyticsVisitsSales from "./components/visits-sales";
import type { Metadata } from "next";
import { getMetadataTitle } from "@/@core/utils/getMetadataTitle";

export const metadata: Metadata = {
  title: getMetadataTitle("Analytics"),
  description: "",
};

function AnalyticsPage() {
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
