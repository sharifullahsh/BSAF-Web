export interface DashboardCharts{
    bcp: HightChartData;
}
export interface HightChartData{
    categories: string[];
    series: Series[];
}
export interface Series{
    label: string;
    data: number[];
}