import React, { JSXElementConstructor, ReactElement, ReactNode } from "react";
import DefaultComponent from "../DefaultCnt";
import Menu from "../Menu";

const components: any = {
  menu: Menu,
  default: DefaultComponent,
};

const RenderComponent = (props: { type: string }) => {
  const Component = components[props.type];
  return <Component {...props} />;
};

export default RenderComponent;
