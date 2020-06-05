declare module 'histogram' {
  import { ChartOptions } from './chart'

  export type HistogramOptions = {
    width?: number
    height?: number
    pointChar?: string
    negativePointChar?: string
    axisChar?: string
    padding?: number
  }

  function histogram(
    data: number[],
    opts: HistogramOptions = {},
    chartOpts: ChartOptions = {},
  ): string

  export default histogram
}

