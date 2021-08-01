import React, { ReactElement } from "react";
import SplitPane from "react-split-pane";

interface LayoutData {
  split: "vertical" | "horizontal" | undefined;
  props?: {
    minSize: number;
  };
  chart?: ReactElement;
  children: LayoutData[];
}
const Dashboard = () => {
  const data = [
    "vertical",
    ["horizontal", ["vertical", ["horizontal", "vertical"]]],
  ];
  const renderChart = (index: number): ReactElement => {
    return <span>{index}</span>;
  };

  const objData: LayoutData = {
    split: "vertical",
    props: {
      minSize: 50,
    },
    chart: renderChart(1),
    children: [
      {
        split: undefined,
        chart: renderChart(2),
        children: [],
      },
      {
        split: "vertical",
        chart: renderChart(3),
        children: [
          { split: undefined, children: [], chart: renderChart(5) },
          { split: undefined, children: [], chart: renderChart(5) },
        ],
      },
    ],
  };

  const createLayout = (data: LayoutData) => {
    const { split, children, chart } = data;
    return (
      <div>
        {
          !!children.length && split ? (
            <SplitPane split={split}>
              {children.map((child, index) => {
                return renderLayout(child);
              })}
            </SplitPane>
          ) : (
            <div>{chart}</div>
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
    return (
      <span>
        <SplitPane split={split}>
          {chart}
          {createLayout(data)}
        </SplitPane>
      </span>
    );
  };

  return (
    <div>
      {renderLayout(objData)}
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
