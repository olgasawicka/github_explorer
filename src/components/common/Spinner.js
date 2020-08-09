import styled, { keyframes } from "styled-components";

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  display: inline-block;
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-top: 4px solid var(--primary);
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  margin: 1rem auto;
  animation: ${rotate360} 1s linear infinite;
`;

export default Spinner;
