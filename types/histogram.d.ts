declare module 'histogram' {
  import { ChartOptions } from './chart'

  export type HistogramOptions = {
    bins?: number
    min?: number
    max?: number
  }

  function histogram(
    data: number[],
    opts: HistogramOptions = {},
    chartOpts: ChartOptions = {},
  ): string

  export default histogram
}

