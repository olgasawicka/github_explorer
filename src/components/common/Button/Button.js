import React from "react";
import PropTypes from "prop-types";
import ButtonStyled from "./ButtonStyled";

const Button = ({ children, onClick, disabled }) => {
  return (
    <ButtonStyled onClick={onClick} disabled={disabled}>
      {children}
    </ButtonStyled>
  );
};

const { string, func, bool } = PropTypes;

Button.propTypes = {
  children: string.isRequired,
  onClick: func,
  disabled: bool,
};

Button.defaultProps = {
  onClick: () => {},
  disabled: false,
};

export default Button;
