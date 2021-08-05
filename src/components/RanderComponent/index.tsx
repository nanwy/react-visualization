import React, { JSXElementConstructor, ReactElement, ReactNode } from "react";
import DefaultComponent from "../DefaultCnt";
import Menu from "../Menu";
export interface ComponentTypes {
  menu: (props: any) => JSX.Element;
  default: (props: any) => JSX.Element;
}
const components: ComponentTypes = {
  menu: Menu,
  default: DefaultComponent,
};

const RenderComponent = (props: {
  type: keyof ComponentTypes;
  data: string;
}) => {
  const Component = components[props.type];
  // return Component(props);
  return <Component {...props} />;
};

export default RenderComponent;
