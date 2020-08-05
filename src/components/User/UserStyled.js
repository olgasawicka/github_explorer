import styled from "styled-components";

const UserWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 1rem;
`;

export const UserCard = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 0.5rem;
  cursor: pointer;
  & header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--lightgrey);
    text-transform: capitalize;
    & span.arrow {
      display: inline-block;
      width: 0.75rem;
      height: 0.75rem;
      border-top: 3px solid #000;
      border-left: 3px solid #000;
      transform: rotate(-135deg);
      transition: all 0.3s ease-in;
      &.open {
        transform: rotate(45deg);
      }
    }
  }
`;

export const UserReposWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 1rem;
  & li {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 0.5rem;
    border: 1px solid red;
    & header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  & p.no-repos {
    font-style: italic;
  }
`;

export default UserWrapper;
