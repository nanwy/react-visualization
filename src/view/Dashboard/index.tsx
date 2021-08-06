import React from "react";

import "react-reflex/styles.css";

// then you can import the components
import { ReflexContainer, ReflexSplitter, ReflexElement } from "react-reflex";
import RenderComponent from "../../components/RanderComponent";

const DashBoard = () => {
  const onResize = (instance: any) => {
    instance.resize();
  };
  const objData = {
    split: "vertical",
    children: [
      {
        split: "vertical",
        children: [
          {
            split: "horizontal",
            children: [
              {
                chart: "default",
              },
              {
                chart: "default",
              },
            ],
          },
          {
            split: "",
          },
        ],
      },
      {
        split: "",
      },
    ],
  };
  const FragWorkAround = (elements: any[]) =>
    elements.reduce(
      (acc: any, child: any, idx: any) =>
        idx > 0
          ? [
              ...[...acc, <ReflexSplitter key={idx + "S"} />],
              <ReflexElement key={idx + "E"}>
                {renderLayout(child)}
              </ReflexElement>,
            ]
          : [
              ...acc,
              <ReflexElement key={idx + "E"}>
                {renderLayout(child)}
              </ReflexElement>,
            ],
      []
    );

  const renderChildren = (data: any) => {
    const children: any = [];

    data.forEach((child: any, idx: any) => {
      children.push(
        <ReflexElement key={"re-" + idx}>
          {renderLayout(child)}
          {/* <div className="handle">{renderLayout(child)}</div> */}
        </ReflexElement>
      );

      // dont render last splitter
      if (idx < data.length - 1) {
        children.push(<ReflexSplitter key={"rs-" + idx} />);
      }
    });

    return children;
  };

  const renderLayout = (data: any) => {
    const { split, children, chart } = data;
    return !!children?.length && split ? (
      <ReflexContainer orientation={split}>
        {FragWorkAround(children)}
        {/* {children?.map((child: any, index: number) => {
          // let temp = [...arr];
          // temp.push(index + 1);
          return (
            <>
              <ReflexElement
                propagateDimensionsRate={200}
                propagateDimensions={true}
                flex={0.8}
                className={split}
              >
              </ReflexElement>
              {index !== children.length && <ReflexSplitter />}
              <ReflexElement
                propagateDimensionsRate={200}
                propagateDimensions={true}
                flex={0.8}
                className={split}
              >
              </ReflexElement>
            </>
          );
        })} */}
        {/* <ReflexSplitter />

        <ReflexElement className="bottom-pane">
          <div className="pane-content">
            <label>Bottom Pane</label>
          </div>
        </ReflexElement> */}
      </ReflexContainer>
    ) : (
      <RenderComponent
        onResize={(e) => console.log("object")}
        type={chart || "default"}
        data="data"
      />
    );
  };
  return (
    <div className="dashboard-container">
      {/* <ReflexContainer orientation="horizontal">
        {renderChildren([{ name: "child1" }, { name: "child2" }])}
      </ReflexContainer> */}
      {renderLayout(objData)}
      {/* <ReflexContainer orientation="vertical">
        <ReflexElement>
          <ReflexContainer orientation="horizontal">
            <ReflexElement
              propagateDimensionsRate={200}
              propagateDimensions={true}
              flex={0.8}
              onResize={(e) => {
                console.log(e);
                console.log((e.domElement as Element).className);
                // e.domElement && e.domElement.class;
              }}
            >
            </ReflexElement>

            <ReflexSplitter />

            <ReflexElement className="bottom-pane">
              <div className="pane-content">
                <label>Bottom Pane</label>
              </div>
            </ReflexElement>
          </ReflexContainer>
        </ReflexElement>

        <ReflexSplitter />

        <ReflexElement className="right-pane" flex={0.2}>
          <div className="pane-content">
            <label>Right Pane</label>
          </div>
        </ReflexElement>
      </ReflexContainer> */}
    </div>
  );
};

export default DashBoard;
