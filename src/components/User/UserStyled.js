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
  & header.username {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.75rem;
    background-color: var(--lightgrey);
    text-transform: capitalize;
    cursor: pointer;
    & i.arrow {
      display: flex;
      transition: all 0.15s ease-in;
    }
  }

  &.open {
    & header.username {
      background-color: var(--primary);
      color: #fff;
      & i.arrow {
        transform: rotate(180deg);
      }
    }
  }
`;

export const UserReposWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 1rem;
  & li.repo-card {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 130px;
    padding: 0.75rem 0.5rem;
    margin-top: 0.5rem;
    background-color: var(--grey);
    overflow: hidden;

    & header.repo-title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-weight: bold;
      padding-bottom: 1rem;
      & > span {
        display: flex;
        align-items: flex-end;
        line-height: 1rem;
        & > i {
          padding-left: 0.5rem;
          display: flex;
          align-items: center;
        }
      }
    }
    & div.repo-descr {
      overflow: hidden;
      overflow-y: scroll;
    }
  }
  & p.no-repos {
    padding: 1rem 0;
    font-style: italic;
  }
  &.open {
    & li.repo-card {
      background-color: var(--lightblue);
    }
  }
`;

export default UserWrapper;
