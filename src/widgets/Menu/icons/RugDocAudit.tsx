import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface Props extends SvgProps {
}

const RugDocAudit: React.FC<Props> = ({ ...props }) => {
  return (
    <Svg viewBox="0 0 370 121" {...props}>
      <image width="370" height="121" href='/images/egg/RugDocAudit.png' />
    </Svg>
  )
};

export default RugDocAudit;
