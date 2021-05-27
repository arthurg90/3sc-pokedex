import styled from "styled-components";

const StyledList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ListItem = styled.div`
  margin: 2rem;
  width: 250px;
`;

const PokeList = (props) => {
  function capitalise(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  return (
    <StyledList>
      {props.items.map((item) => (
        <ListItem key={item.name}>
          <img
            alt="pokemon"
            width="auto"
            height="120px"
            src={`https://img.pokemondb.net/artwork/large/${item.name}.jpg`}
          />
          <h2>{capitalise(item.name)}</h2>
        </ListItem>
      ))}
    </StyledList>
  );
};

export default PokeList;
