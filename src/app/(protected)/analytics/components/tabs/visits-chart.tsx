"use client";
import React from "react";
import { EChartsOption } from "echarts-for-react/src/types";
import ReactECharts from "echarts-for-react";

function VisitsChart() {
  const data = [
    {
      name: "Jan",
      value: 3000,
    },
    {
      name: "Feb",
      value: 2000,
    },
    {
      name: "Mar",
      value: 3333,
    },
    {
      name: "Apr",
      value: 5000,
    },
    {
      name: "May",
      value: 3200,
    },
    {
      name: "Jun",
      value: 4200,
    },
    {
      name: "Jul",
      value: 3200,
    },
    {
      name: "Aug",
      value: 2100,
    },
    {
      name: "Sep",
      value: 3000,
    },
    {
      name: "Oct",
      value: 5100,
    },
    {
      name: "Nov",
      value: 6000,
    },
    {
      name: "Dec",
      value: 4800,
    },
  ];

  const option: EChartsOption = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        data: data.map((item) => item.name),
        axisTick: {
          alignWithLabel: true,
        },
      },
    ],
    yAxis: [
      {
        type: "value",
      },
    ],
    series: [
      {
        type: "bar",
        barWidth: "60%",
        barMaxWidth: 80,
        data: data.map((item) => item.value),
      },
    ],
  };

  return <ReactECharts option={option} />;
}

export default VisitsChart;
