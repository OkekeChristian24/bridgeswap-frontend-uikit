import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg height="31" fill="none" xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
    >
      <rect width="30.7597" height="31" fill="url(#pattern0)"/>
      <rect width="30.7597" height="31" fill="black" fillOpacity="0.2"/>
      <rect width="30.7597" height="31" fill="black" fillOpacity="0.2"/>
      <defs>
        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use xlinkHref="#image0_361_1877" transform="scale(0.0078125)"/>
        </pattern>
        <image id="image0_361_1877" width="128" height="129" xlinkHref="data:image/png;base64,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"/>
      </defs>
    </Svg>

    
  );
};

export default Icon;
