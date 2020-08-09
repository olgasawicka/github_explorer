import React, { useState } from "react";
import PropTypes from "prop-types";
import SearchStyled from "./SearchStyled";
import Button from "../common/Button/Button";

const Search = ({ onSearch, loading }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    setSearchQuery("");
    onSearch(searchQuery);
  };

  return (
    <SearchStyled>
      <input
        type="text"
        aria-label="username"
        placeholder="Enter username"
        value={searchQuery}
        onChange={handleChange}
      />
      <Button onClick={handleSearch} disabled={!searchQuery || loading}>
        search
      </Button>
    </SearchStyled>
  );
};

const { func, bool } = PropTypes;

Search.propTypes = {
  onSearch: func,
  loading: bool,
};

Search.defaultProps = {
  onSearch: () => {},
  loading: false,
};

export default Search;
