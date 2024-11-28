'use client';
import ReactECharts from 'echarts-for-react';
import React from 'react';
import { SharePieChartProps } from '@components/share/charts/pie/type';
import { EChartsOption } from 'echarts-for-react/src/types';

function SharePieChart(props: SharePieChartProps) {
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
        color: ['#5ab1ef', '#b6a2de', '#67e0e3', '#2ec7c9'],
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
        name: '访问来源',
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

export default React.memo(SharePieChart, (prevProps, nextProps) => {
  return prevProps.data === nextProps.data;
});
