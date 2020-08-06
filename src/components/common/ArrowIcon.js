import React from "react";
import styled from "styled-components";
import Icon from "./Icon";

const Svg = styled(Icon)`
  width: 16px;
  height: 16px;
`;

const ArrowIcon = () => (
  <Svg viewBox="164.5 125.69 24 14">
    <path
      d="M176.5,135.5l-9.048-9.29c-0.677-0.694-1.77-0.694-2.446,0c-0.675,0.694-0.675,1.818,0,2.513l10.186,10.453
		c0.358,0.369,0.837,0.535,1.309,0.511c0.472,0.024,0.95-0.143,1.309-0.511l10.184-10.453c0.677-0.695,0.677-1.819,0-2.513
		c-0.674-0.694-1.77-0.694-2.443,0L176.5,135.5z"
    />
  </Svg>
);

export default ArrowIcon;
