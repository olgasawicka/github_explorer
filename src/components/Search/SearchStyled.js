import styled from "styled-components";

const SearchStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  & input {
    width: 100%;
    padding: 0.75rem 1rem;
    color: black;
    border: 1px solid var(--midgrey);
    background-color: var(--lightgrey);
    margin-bottom: 1.5rem;
    font-size: 1rem;
    &:focus {
      outline: 1px solid transparent;
    }
    &::placeholder {
      font-size: 0.875rem;
    }
  }
`;

export default SearchStyled;
