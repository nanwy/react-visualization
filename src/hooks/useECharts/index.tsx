import { useEffect, useState } from "react";
import * as echarts from "echarts";

function useECharts(chartRef: any, config: any): echarts.ECharts | undefined {
  // let renderedInstance: echarts.ECharts | null = null;
  const [instance, setInstance] = useState<echarts.ECharts>();

  function renderChart() {
    let renderedInstance = echarts.getInstanceByDom(chartRef.current);
    if (renderedInstance) {
      // renderedInstance = renderedInstance;
      setInstance(renderedInstance);
      console.log("chartInstance: ", renderedInstance);
    } else {
      renderedInstance = echarts.init(chartRef.current);
    }

    renderedInstance.setOption(config);

    renderedInstance.on("click", function (params: any) {
      console.log("params：", params);
    });
  }

  useEffect(() => {
    console.log("config--------", config);
    renderChart();
  }, [config]);

  useEffect(() => {
    return () => {
      console.log("config");
      instance && instance.dispose();
    };
  }, []);

  return instance;
}

export default useECharts;
