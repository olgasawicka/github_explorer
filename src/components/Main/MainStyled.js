import styled from "styled-components";

const MainWrapper = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  max-width: 500px;
  padding: 1.5rem;
  background-color: #fff;
  & p.no-users {
    padding: 1rem 0;
    font-style: italic;
  }
  & p.error-msg {
    padding: 1rem 0;
    color: var(--danger);
  }
`;

export default MainWrapper;
