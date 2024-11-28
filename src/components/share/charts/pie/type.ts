export type SharePieChartDataType = {
  value: number;
  name: string;
};

export type SharePieChartProps = {
  data: SharePieChartDataType[];

  colors?: string[];
};
