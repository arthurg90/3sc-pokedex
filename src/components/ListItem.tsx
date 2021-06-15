import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Modal from 'styled-react-modal';
import Button from 'react-bootstrap/Button';

const StyledListItem = styled.div`
  margin: 2rem;
  width: 250px;
  cursor: pointer;
`;

const Title = styled.h5`
  margin-bottom: 2rem;
`;

const StyledModal = Modal.styled`
  border-style: solid;
  border-radius: 5%;
  width: 400px;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: white;
  text-align: center;
  padding: 2rem;
`;

const StyledButton = styled(Button)`
  margin-top: 1rem;
`;

export interface Poke {
  name: string;
  id?: number;
  weight?: number;
  height?: number;
  abilities?: {
    ability?: { name: string; url: string };
    is_hidden?: boolean;
    slot?: number;
  }[];
  types?: { slot: number; type: { name: string; url: string } }[];
  sprites?: { front_default: string };
}
interface ListItemProps {
  poke: Poke;
}

const ListItem: React.FC<ListItemProps> = ({ poke }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [pokemon, setPokemon] = useState('');
  const [pokemonData, setPokemonData] = useState([]);
  const [error, setError] = useState<string | null>(null);

  function capitalise(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  function handleClick() {
    getPokemonData();
    toggleModal();
  }

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    setPokemon(poke.name);
  }, [poke.name]);

  const getPokemonData = () => {
    // const arr = [];
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    return fetch(url)
      .then((res) => res.json())
      .then(
        (data) => {
          // arr.push(data);
          setPokemonData(data);
        },
        (error) => {
          setError(error);
        }
      );
  };

  if (error) {
    return <div>Error: {error}</div>;
  } else {
    return (
      <StyledListItem onClick={handleClick}>
        <Title>{capitalise(poke.name)}</Title>
        <img
          alt="pokemon"
          width="auto"
          height="120px"
          src={`https://img.pokemondb.net/artwork/large/${poke.name}.jpg`}
        />
        <StyledModal isOpen={isOpen}>
          {pokemonData.length > 0
            ? pokemonData.map((data: Poke) => {
                return (
                  <div key={data.id}>
                    <h4>{capitalise(data.name)}</h4>
                    {data.sprites ? (
                      <img src={data.sprites['front_default']} alt="sprite" />
                    ) : (
                      ''
                    )}
                    <div>
                      <div>
                        <strong>Height: </strong>
                        {data.height
                          ? Math.round(data.height * 3.9)
                          : null}{' '}
                      </div>
                    </div>
                    <div>
                      <div>
                        <strong>Weight: </strong>{' '}
                        {data.weight ? Math.round(data.weight / 4.3) : null}
                      </div>
                    </div>
                    <div>
                      <div>
                        <strong>Type: </strong>{' '}
                        {data.types
                          ? capitalise(data.types[0].type.name)
                          : null}
                      </div>
                      <div>
                        {data.types
                          ? capitalise(data.types[1].type.name)
                          : null}
                      </div>
                    </div>
                    {/* <div>
                      <strong>Abilities: </strong>
                      {data.abilities
                        ? capitalise(data?.abilities[0].ability.name)
                        : null}
                    </div> 
                    <div>
                      {data.abilities[1]
                        ? capitalise(data.abilities[1].ability.name)
                        : null}
                    </div>*/}
                    <StyledButton variant="danger" onClick={closeModal}>
                      Close
                    </StyledButton>
                  </div>
                );
              })
            : null}
        </StyledModal>
      </StyledListItem>
    );
  }
};

export default ListItem;
