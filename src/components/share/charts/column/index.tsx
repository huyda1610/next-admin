'use client';
import ReactECharts from 'echarts-for-react';
import React from 'react';
import { EChartsOption } from 'echarts-for-react/src/types';
import { NextColumnChartProps } from '@components/share/charts/column/type';

function NextColumnChart(props: NextColumnChartProps) {
  const option: EChartsOption = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        data: props?.data.map((item) => item.name),
        axisTick: {
          alignWithLabel: true,
        },
      },
    ],
    yAxis: [
      {
        type: 'value',
      },
    ],
    series: [
      {
        type: 'bar',
        color: props?.colors,
        barWidth: '60%',
        barMaxWidth: 80,
        data: props?.data.map((item) => item.value),
      },
    ],
  };

  return <ReactECharts option={option} />;
}

export default React.memo(NextColumnChart, (prevProps, nextProps) => {
  return prevProps.data === nextProps.data;
});
