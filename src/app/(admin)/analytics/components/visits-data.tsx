"use client";
import React from "react";
import { EChartsOption } from "echarts-for-react/src/types";
import ReactECharts from "echarts-for-react";
import { Card, CardContent, CardHeader } from "@/components/shadcn/ui/card";

function AnalyticsVisitsData() {
  const option: EChartsOption = {
    legend: {
      bottom: 0,
      data: ["Access", "Trend"],
    },
    radar: {
      indicator: [
        {
          name: "Web page",
        },
        {
          name: "Mobile",
        },
        {
          name: "Ipad",
        },
        {
          name: "Client",
        },
        {
          name: "3rd party",
        },
        {
          name: "Other",
        },
      ],
      radius: "60%",
      splitNumber: 8,
    },
    series: [
      {
        areaStyle: {
          opacity: 1,
          shadowBlur: 0,
          shadowColor: "rgba(0,0,0,.2)",
          shadowOffsetX: 0,
          shadowOffsetY: 10,
        },
        data: [
          {
            itemStyle: {
              color: "#b6a2de",
            },
            name: "Access",
            value: [90, 50, 86, 40, 50, 20],
          },
          {
            itemStyle: {
              color: "#5ab1ef",
            },
            name: "Trend",
            value: [70, 75, 70, 76, 20, 85],
          },
        ],
        itemStyle: {
          // borderColor: '#fff',
          borderRadius: 10,
          borderWidth: 2,
        },
        symbolSize: 0,
        type: "radar",
      },
    ],
    tooltip: {},
  };

  return (
    <Card>
      <CardHeader>Visits</CardHeader>
      <CardContent className="p-6 pt-0">
        <ReactECharts option={option} />
      </CardContent>
    </Card>
  );
}

export default AnalyticsVisitsData;
