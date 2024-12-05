'use client';
import ReactECharts from 'echarts-for-react';
import React from 'react';
import { NextPieChartProps } from '@components/share/charts/pie/type';
import { EChartsOption } from 'echarts-for-react/src/types';

function NextPieChart(props: NextPieChartProps) {
  const option: EChartsOption = {
    legend: {
      bottom: '2%',
      left: 'center',
    },
    series: [
      {
        animationDelay() {
          return Math.random() * 100;
        },
        animationEasing: 'exponentialInOut',
        animationType: 'scale',
        avoidLabelOverlap: false,
        color: props?.colors,
        data: props.data,
        emphasis: {
          label: {
            fontSize: '12',
            fontWeight: 'bold',
            show: true,
          },
        },
        itemStyle: {
          borderRadius: 10,
          borderWidth: 2,
        },
        label: {
          position: 'center',
          show: false,
        },
        labelLine: {
          show: false,
        },
        radius: ['40%', '65%'],
        type: 'pie',
      },
    ],
    tooltip: {
      trigger: 'item',
    },
  };

  return <ReactECharts option={option} />;
}

export default React.memo(NextPieChart, (prevProps, nextProps) => {
  return prevProps.data === nextProps.data;
});
