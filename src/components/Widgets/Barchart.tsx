import React, { useEffect, useRef, useState } from "react";
import getConfig from "./config";
import useECharts from "../../hooks/useECharts";
import * as echarts from "echarts/core";
import { GridComponent } from "echarts/components";
import { LineChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";

echarts.use([GridComponent, LineChart, CanvasRenderer]);

function Chart() {
  const [count, setCount] = useState(Math.random());
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const chartRef = useRef<any>(null);
  const config = getConfig(count);
  const chart = useECharts(chartRef, config);
  const resizeObserver = new ResizeObserver((entries) => {
    for (let entry of entries) {
      console.log(
        entry.target.id,
        `height:${entry.contentRect.height}  width:${entry.contentRect.width}`
      );
      setWidth(entry.contentRect.width);
      setHeight(entry.contentRect.height);
    }
  });
  useEffect(() => {
    resizeObserver.observe(chartRef.current as Element);
  }, []);

  useEffect(() => {
    chart && chart.resize();
    console.log(chart, "chart");
  }, [width, height]);

  return <div ref={chartRef} style={{ width: "100%", height: "100%" }} />;
}

export default Chart;
