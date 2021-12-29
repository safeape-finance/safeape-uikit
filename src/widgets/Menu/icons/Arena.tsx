import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface Props extends SvgProps {
}

const RugDocAudit: React.FC<Props> = ({ ...props }) => {
  return (
    <Svg viewBox="0 0 128 128" {...props}>
      <image width="128" height="128" href='/images/menu/arena-icon.png' />
    </Svg>
  )
};

export default RugDocAudit;
