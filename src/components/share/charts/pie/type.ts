export type NextPieChartDataType = {
  value: number;
  name: string;
};

export type NextPieChartProps = {
  data: NextPieChartDataType[];

  colors?: string[];
};
