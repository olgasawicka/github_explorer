import React from "react";
import styled from "styled-components";
import Icon from "./Icon";

const Svg = styled(Icon)`
  width: 20px;
  height: 20px;
`;

const StarIcon = () => (
  <Svg viewBox="308 228.501 24 23">
    <polygon
      points="332,237.213 323.744,235.983 319.958,228.501 316.243,236.02 308,237.331 313.96,243.208 312.652,251.501 
	320.05,247.614 327.485,251.428 326.098,243.148 "
    />
  </Svg>
);

export default StarIcon;
