import { useState, useEffect } from "react";
import Modal from "react-modal";
import styled from "styled-components";

const StyledListItem = styled.div`
  margin: 2rem;
  width: 250px;
`;

Modal.setAppElement("#root");

const ListItem = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [pokemon, setPokemon] = useState('');
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonGen, setPokemonGen] = useState('');
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  function capitalise(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  function handleClick(e) {
    e.preventDefault();
    setPokemon(props.item.name);
    getPokemonData();
    toggleModal();
    console.log(pokemon);
  }

  const getPokemonData = () => {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    return fetch(url)
      .then((res) => res.json())
      .then(
        (pokemon) => {
          setIsLoaded(true);
          setPokemonData(pokemon);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  };

  return (
    <StyledListItem onClick={handleClick}>
      <img
        alt="pokemon"
        width="auto"
        height="120px"
        src={`https://img.pokemondb.net/artwork/large/${props.item.name}.jpg`}
      />
      <h2>{capitalise(props.item.name)}</h2>
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
      >
        <div>{props.item.name}</div>
      </Modal>
    </StyledListItem>
  );
};

export default ListItem;
