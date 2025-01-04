"use client";
import React from "react";
import { Card, CardContent, CardHeader } from "@/components/shadcn/ui/card";
import { EChartsOption } from "echarts-for-react/src/types";
import ReactECharts from "echarts-for-react";

const data = [
  { name: "Search Engine", value: 1048 },
  { name: "Direct Access", value: 735 },
  { name: "Marketing", value: 580 },
  { name: "Advertising", value: 484 },
];

function WorkspaceVisitsSource() {
  const option: EChartsOption = {
    legend: {
      bottom: "2%",
      left: "center",
    },
    series: [
      {
        animationDelay() {
          return Math.random() * 100;
        },
        animationEasing: "exponentialInOut",
        animationType: "scale",
        avoidLabelOverlap: false,
        color: ["#5ab1ef", "#b6a2de", "#67e0e3", "#2ec7c9"],
        data: data,
        emphasis: {
          label: {
            fontSize: "12",
            fontWeight: "bold",
            show: true,
          },
        },
        itemStyle: {
          borderRadius: 10,
          borderWidth: 2,
        },
        label: {
          position: "center",
          show: false,
        },
        labelLine: {
          show: false,
        },
        radius: ["40%", "65%"],
        type: "pie",
      },
    ],
    tooltip: {
      trigger: "item",
    },
  };

  return (
    <Card>
      <CardHeader>Visits Source</CardHeader>
      <CardContent className="p-6 pt-0">
        <ReactECharts option={option} />
      </CardContent>
    </Card>
  );
}

export default WorkspaceVisitsSource;
