declare module 'chart' {
  type ChartOptions = {
    width?: number
    height?: number
    pointChar?: string
    negativePointChar?: string
    axisChar?: string
    padding?: number
  }

  function chart(
    data: number[],
    opts: ChartOptions = {}
  ): string

  export default chart
}
