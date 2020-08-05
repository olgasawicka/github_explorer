import styled from "styled-components";

const Button = styled.button`
  display: inline-block;
  width: 100%;
  padding: 0.75rem 1rem;
  background-color: ${(props) =>
    props.disabled ? "var(--grey)" : "var(--primary)"};
  color: #ffffff;
  text-transform: capitalize;
  font-size: 1rem;
  font-weight: bold;
  outline: 1px solid transparent;
  border: 1px solid transparent;
  cursor: pointer;
`;

export default Button;
