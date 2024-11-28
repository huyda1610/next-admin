export type ShareColumnChartDataType = {
  value: number;
  name: string;
};

export type ShareColumnChartProps = {
  data: ShareColumnChartDataType[];

  colors?: string[];
};
