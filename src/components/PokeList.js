import styled from "styled-components";
import ListItem from "./ListItem";

const StyledList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const PokeList = (props) => {

  return (
    <StyledList>
      {props.items.map((item) => (
        <ListItem key={item.name} item={item}></ListItem>
      ))}
    </StyledList>
  );
};

export default PokeList;
