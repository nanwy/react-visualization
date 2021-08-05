import React, { ReactElement, useEffect, useState } from "react";
import SplitPane from "react-split-pane";
import RenderComponent, {
  ComponentTypes,
} from "../../components/RanderComponent";

interface LayoutData {
  split?: "vertical" | "horizontal" | undefined;
  props?: {
    minSize: number;
  };
  chart?: keyof ComponentTypes;
  children?: LayoutData[];
  id?: number;
}

const position: ["vertical", "horizontal"] = ["vertical", "horizontal"];

function isdrag(x1: number, y1: number, x2: number, y2: number) {
  if (Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2)) <= 1) {
    return false;
  }
  return true;
}

const Dashboard = () => {
  let beginX: number, // 起始位置
    beginY: number,
    endX: number, // 结束位置
    endY: number;
  const data = [
    "vertical",
    ["horizontal", ["vertical", ["horizontal", "vertical"]]],
  ];
  const renderChart = (index: number): ReactElement => {
    return <span>{index}</span>;
  };

  const objData: LayoutData = JSON.parse(
    localStorage.getItem("objData") || "{}"
  ) || {
    chart: renderChart(1),

    // split: "vertical",
    // props: {
    //   minSize: 50,
    // },
    // children: [
    //   //   { chart: renderChart(1) },
    //   {
    //     split: "horizontal",
    //     children: [
    //       {
    //         split: "horizontal",
    //         children: [
    //           {
    //             chart: renderChart(1),
    //           },
    //           {
    //             chart: renderChart(1.1),
    //           },
    //         ],
    //       },
    //       {
    //         split: "horizontal",
    //         children: [
    //           {
    //             chart: renderChart(1),
    //           },
    //           {
    //             chart: renderChart(1.1),
    //           },
    //         ],
    //       },
    //     ],
    //   },
    //   //   { chart: renderChart(2) },
    //   {
    //     split: "vertical",
    //     // chart: renderChart(2),
    //     children: [{ chart: renderChart(3) }, { chart: renderChart(4) }],
    //   },
    // ],
  };
  var id = 0;
  const [posData, setPosData] = useState(objData);
  const [canClick, setCanClick] = useState(true);
  useEffect(() => {
    console.log("变化");
    return () => {
      console.log("卸载");
    };
  }, [posData]);
  const map: any = JSON.parse(localStorage.getItem("splitPos") || "{}");
  console.log(objData);
  const createLayout = (data: LayoutData, arr: number[], index?: number) => {
    const { split, children, chart } = data;
    let before = arr.length ? `${arr.join(".")}\\` : "";
    return (
      <div
        key={index}
        style={{ width: "100%", height: "100%", position: "relative" }}
        onMouseUp={(e) => {
          beginX = e.clientX;
          beginY = e.clientY;
        }}
        onMouseDown={(e) => {
          endX = e.clientX;
          endY = e.clientY;
        }}
        onClick={(e) => {
          console.log(isdrag(beginX, beginY, endX, endY));
          const { width, height } = e.currentTarget.getBoundingClientRect();
          if (isdrag(beginX, beginY, endX, endY)) return;
          console.log(e, data, "data", split, before, index, data.children);
          e.stopPropagation();
          if (!data.chart) {
            data.chart = "menu";
          } else {
            if (data.children?.length) {
              let arr = [...data.children];
              // let index = arr.indexOf(e);
              data.children[index || 0] = {
                split: position[+(width > height)],
                id: (id += 1),
                children: [{ chart: data.chart }, { chart: "default" }],
              };
              delete data.chart;

              // data.children = data.children.map((item) => {
              //   return {
              //     split: position[Math.floor(Math.random() + 1)],
              //     children: [{ ...item }],
              //   };
              // });
            } else {
              data.children = [
                { chart: data.chart, children: [] },
                { chart: "default", children: [] },
              ];
              data.split = position[+(width < height)];
              data.id = id += 1;
              delete data.chart;
              console.log(data, "else");
            }
          }
          setPosData({ ...posData });
          //   if (data.children?.length) {
          //     data.children = data.children.map((item) => {
          //       return {
          //         split: position[Math.floor(Math.random() + 1)],
          //         children: [{ ...item }],
          //       };
          //     });
          //     setPosData({ ...posData });
          //   } else {
          //     data.children?.push(
          //       {
          //         chart: renderChart(+before),
          //       },
          //       {
          //         chart: renderChart(+before),
          //       }
          //     );
          //     setPosData({ ...posData });
          //   }
          localStorage.setItem("objData", JSON.stringify(posData));
          console.log(posData);
        }}
      >
        {
          !!children?.length && split ? (
            <SplitPane
              split={split}
              defaultSize={
                parseInt(
                  JSON.parse(localStorage.getItem("splitPos") || "{}")[before],
                  10
                ) || "50%"
              }
              onResizerClick={(e) => {
                console.log("缩放");
                e.stopPropagation();
              }}
              onDragFinished={(e) => {
                console.log(e);
              }}
              //   defaultSize={"50%"}
              onChange={(size) => {
                console.log(map);
                map[before] = size;
                localStorage.setItem("splitPos", JSON.stringify(map));
              }}
            >
              {children?.map((child, index) => {
                let temp = [...arr];
                temp.push(index + 1);
                return createLayout(child, temp, index);
              })}
            </SplitPane>
          ) : (
            // <div>{RenderComponent({ type: chart || "default" })}</div>
            <div>
              <RenderComponent type={chart || "default"} data="data" />
            </div>
          )

          //   <SplitPane split={split}>
          //     {children.map((child, index) => {
          //       return renderLayout(child);
          //     })}
          //   </SplitPane>
        }
        {/* {split ? (<div>1</div>) : (<div>2</div>)} */}
      </div>
    );
  };

  const renderLayout = (data: LayoutData) => {
    const { split, children, chart } = data;
    return createLayout(data, [0]);
    return (
      <div>
        {/* <SplitPane split={split}> */}
        {/* {chart} */}
        {createLayout(data, [0])}
        {/* </SplitPane> */}
      </div>
    );
  };
  console.log(posData);
  return (
    <div style={{ width: "100%", height: "calc(100vh - 46px)" }}>
      {renderLayout(posData)}
      {/* <SplitPane split="horizontal"> */}
      {/* <div>1</div>
        <SplitPane split="horizontal">
          <div>2</div>
          <div>3</div>
        </SplitPane> */}
      {/* </SplitPane> */}
      {/* <SplitPane split="vertical" minSize={50}>
        <SplitPane split="horizontal">
          <div>2</div>
          <div>3</div>
        </SplitPane>
        <SplitPane split="vertical" minSize={50} defaultSize={100}>
          <div>
            <SplitPane split="horizontal">
              <div>2</div>
              <div>3</div>
            </SplitPane>
          </div>
          <div>
            <SplitPane split="vertical" minSize={50}>
              <div />
              <div />
            </SplitPane>
          </div>
        </SplitPane>
      </SplitPane> */}
    </div>
  );
};

export default Dashboard;
