import styled from 'styled-components';
import ListItem, { Poke } from './ListItem';

const StyledList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Overlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  background: rgba(0, 0, 0, 0.4);
  width: 100%;
  transition: 0.5s ease;
  opacity: 0;
  bottom: 0;
  font-size: 16px;
  padding: 20px;
  text-align: center;
`;

const PokemonContainer = styled.div`
  position: relative;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.1);
  }
  &:hover {
    ${Overlay} {
      opacity: 1;
      color: white;
    }
  }
`;

interface ListProps {
  pokes: Poke[];
}

//Pokemon list to display all pokemon on the page
const PokeList: React.FC<ListProps> = ({ pokes }) => {
  // const SaveComponent = props.saveComponent;
  return (
    <StyledList>
      {pokes.map((poke, index) => (
        <PokemonContainer key={index}>
          <ListItem poke={poke}></ListItem>
          {/* <Overlay onClick={() => handleSavedClick(poke)}>
            <SaveComponent />
          </Overlay> */}
        </PokemonContainer>
      ))}
    </StyledList>
  );
};

export default PokeList;
