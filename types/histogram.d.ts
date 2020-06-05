declare module 'histogram' {
  type HistogramOptions = {
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
  ): string

  export default histogram
}

