/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import styled from 'styled-components';

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

export interface InputProps {
  type?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

//Search bar input
const Search: React.FC<InputProps> = (props: InputProps) => {
  return <SearchInput {...props} />;
};

export default Search;
