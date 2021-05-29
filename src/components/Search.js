import styled from "styled-components";

const SearchInput = styled.input`
  width: 25%;
  padding: 0.375rem 0.75rem;
  margin-right: 2rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;

//Search bar input
const Search = ({handleChange}) => {
  return (
    <SearchInput
      type="search"
      placeholder="Search Pokemon..."
      onChange={handleChange}
    />
  );
};

export default Search;