import { FiSearch } from "react-icons/fi";
import { SearchContainer } from "./SearchBarStyled";

const SearchBar = () => {
  return (
    <SearchContainer>
      <span>
        <FiSearch />
      </span>
      <input type={"text"} placeholder={"Search..."} />
    </SearchContainer>
  );
};

export default SearchBar;
