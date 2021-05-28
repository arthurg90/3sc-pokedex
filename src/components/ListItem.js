import { useState, useEffect } from "react";
import styled from "styled-components";
import Modal from "styled-react-modal";
import Button from "react-bootstrap/Button";

const StyledListItem = styled.div`
  margin: 2rem;
  width: 250px;
`;

const StyledModal = Modal.styled`
  width: 20rem;
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

const ListItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [pokemon, setPokemon] = useState("");
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonGen, setPokemonGen] = useState("");
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  function capitalise(str) {
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
    setPokemon(item.name);
  }, [item.name]);

  const getPokemonData = () => {
    const toArray = [];
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    return fetch(url)
      .then((res) => res.json())
      .then(
        (data) => {
          setIsLoaded(true);
          toArray.push(data);
          console.log(data);
          setPokemonData(toArray);
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
        src={`https://img.pokemondb.net/artwork/large/${item.name}.jpg`}
      />
      <h2>{capitalise(item.name)}</h2>
      <div></div>
      <StyledModal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
      >
        <div>
          <Button variant="primary" onClick={closeModal}>
            x
          </Button>
          {pokemonData.length > 0
            ? pokemonData.map((data) => {
                return (
                  <div key={data.id}>
                    <div>{data.name}</div>
                    {data.sprites ? (
                      <img src={data.sprites["front_default"]} alt="sprite" />
                    ) : (
                      ""
                    )}
                    <div className="divTable">
                      <div className="divTableBody">
                        <div className="divTableRow">
                          <div className="divTableCell">Height</div>
                          <div className="divTableCell">
                            {" "}
                            {Math.round(data.height * 3.9)}"
                          </div>
                        </div>
                        <div className="divTableRow">
                          <div className="divTableCell">Weight</div>
                          <div className="divTableCell">
                            {" "}
                            {Math.round(data.weight / 4.3)} lbs
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            : null}
        </div>
      </StyledModal>
    </StyledListItem>
  );
};

export default ListItem;
