import React, {useState} from "react";
import SearchStyled from "./SearchStyled";
import Button from "../common/Button/Button";

const Search = ({onSearch, loading}) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    setSearchQuery("");
    onSearch(searchQuery)
  };

  return (
    <SearchStyled>
      <input
        type="text"
        placeholder="Enter username"
        value={searchQuery}
        onChange={handleChange}
      />
      <Button
        onClick={handleSearch}
        disabled={!searchQuery || loading}
      >
        search
      </Button>
    </SearchStyled>
  );
};



export default Search;
