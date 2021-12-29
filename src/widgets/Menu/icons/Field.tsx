import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 128 128" {...props}>
      <image width="128" height="128" href="/images/menu/field-icon.png" />
    </Svg>
  );
};

export default Icon;
