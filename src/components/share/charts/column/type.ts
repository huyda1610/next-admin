export type NextColumnChartDataType = {
  value: number;
  name: string;
};

export type NextColumnChartProps = {
  data: NextColumnChartDataType[];

  colors?: string[];
};
