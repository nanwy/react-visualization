import React, { JSXElementConstructor, ReactElement, ReactNode } from "react";
import DefaultComponent from "../DefaultCnt";
import Menu from "../Menu";
import Chart from "../Widgets/Barchart";
export interface ComponentTypes {
  menu: (props: any) => JSX.Element;
  default: (props: any) => JSX.Element;
  pieChart: (props: any) => JSX.Element;
}
const components: ComponentTypes = {
  menu: Menu,
  default: DefaultComponent,
  pieChart: Chart,
};

const RenderComponent = (props: {
  type: keyof ComponentTypes;
  data: string;
  onResize: (e: any) => void;
}) => {
  const Component = components[props.type];
  // return Component(props);
  return <Component {...props} />;
};

export default RenderComponent;
