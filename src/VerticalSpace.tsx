import React, { CSSProperties } from "react";
import { Space, SpaceProps } from "antd";

type Props = Omit<SpaceProps, "direction"> & {
  style?: CSSProperties;
};
const VerticalSpace = ({ style, ...props }: Props) => {
  return (
    <Space
      {...props}
      direction="vertical"
      style={{ width: "100%", ...style }}
    ></Space>
  );
};

export default VerticalSpace;
