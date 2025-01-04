"use client";
import React from "react";
import { Card, CardContent, CardHeader } from "@/components/shadcn/ui/card";
import { EChartsOption } from "echarts-for-react/src/types";
import ReactECharts from "echarts-for-react";

function AnalyticsVisitsSales() {
  const option: EChartsOption = {
    series: [
      {
        animationDelay() {
          return Math.random() * 400;
        },
        animationEasing: "exponentialInOut",
        animationType: "scale",
        center: ["50%", "50%"],
        color: ["#5ab1ef", "#b6a2de", "#67e0e3", "#2ec7c9"],
        data: [
          { name: "Outsourcing", value: 500 },
          { name: "Customize", value: 310 },
          { name: "Technical support", value: 274 },
          { name: "Remote", value: 400 },
        ].sort((a, b) => {
          return a.value - b.value;
        }),
        name: "Business proportion",
        radius: "80%",
        roseType: "radius",
        type: "pie",
      },
    ],

    tooltip: {
      trigger: "item",
    },
  };

  return (
    <Card className="col-span-1 md:col-span-2 lg:col-span-1">
      <CardHeader>Visits Sales</CardHeader>
      <CardContent className="p-6 pt-0">
        <ReactECharts option={option} />
      </CardContent>
    </Card>
  );
}

export default AnalyticsVisitsSales;
