import "./App.css";
import styled from "styled-components";
import { ReactEventHandler, useEffect, useState } from "react";
import { ModalProvider } from "styled-react-modal";
import Header from "./components/Header";
import PokeList from "./components/PokeList";
import Search from "./components/Search";
import SavePokemon from "./components/SavePokemon";
import RemovePokemon from "./components/RemovePokemon";

const StyledHeading = styled.h4`
  color: darkgrey;
  text-align: left;
  margin-left: 5rem;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SelectContainer = styled.div`
  margin: 2rem 3rem;
`;

const Select = styled.select`
  margin-left: 1rem;
  padding: 0.375rem 2.25rem 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-image: url(
    data:image/svg + xml,
    %3csvgxmlns="http://www.w3.org/2000/svg"viewBox="0 0 16 16"%3e%3cpathfill="none"stroke="%23343a40"stroke-linecap="round"stroke-linejoin="round"stroke-width="2"d="M2 5l6 6 6-6"/%3e%3c/svg%3e
  );
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 16px 12px;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
`;

interface PokeData {
  search: string;
  generation: number;
}

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState('');
  const [saved, setSaved] = useState([]);
  const [generation, setGeneration] = useState<PokeData>(1);

  //Fetch API for all pokemon results
  const getPokemon = (generation: number) => {
    const url = `https://pokeapi.co/api/v2/generation/${generation}/`;
    return fetch(url)
      .then((res) => res.json())
      .then(
        (name) => {
          setIsLoaded(true);
          setItems(name.pokemon_species)
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  };

  useEffect(() => {
    getPokemon(generation);
  }, [generation]);

  function handleSelect(e: React.ChangeEvent<HTMLInputElement>) {
    setGeneration(e.target.value);
  }

  useEffect(() => {
    const savedPokemon = JSON.parse(
      localStorage.getItem("saved-pokemon")
    );
    setSaved(savedPokemon);
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("saved-pokemon", JSON.stringify(items));
  };

  const addSavedPokemon = (item) => {
    // Check if an item is already in the saved state to avoid adding duplicates
    const prevSaved = saved.filter((saved) => saved.name !== item.name);
    const newSavedList = [...prevSaved, item];
    setSaved(newSavedList);
    saveToLocalStorage(newSavedList);
  };

  const removeSavedPokemon = (item) => {
    const newSavedList = saved.filter(
      (saved) => saved.name !== item.name
    );
    setSaved(newSavedList);
    saveToLocalStorage(newSavedList);
  };

  const searchResults = items.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(search.toLowerCase())
  );

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ModalProvider>
        <div className="App">
          <Header />
          <InputContainer>
            <SelectContainer>
              <label htmlFor="gen-select"><strong>Choose a generation:</strong></label>
              <Select
                value={generation}
                id="gen-select"
                onChange={handleSelect}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
              </Select>
            </SelectContainer>
            <Search handleChange={(e) => setSearch(e.target.value)} />
          </InputContainer>
          {saved && saved.length > 0 ? (
            <>
              <StyledHeading>Saved Pokemon</StyledHeading>
              <PokeList
                items={saved}
                saveComponent={RemovePokemon}
                handleSavedClick={removeSavedPokemon}
              />
            </>
          ) : null}
          <StyledHeading>Gen {generation} Pokemon</StyledHeading>
          <PokeList
            items={searchResults}
            saveComponent={SavePokemon}
            handleSavedClick={addSavedPokemon}
          />
        </div>
      </ModalProvider>
    );
  }
}

export default App;
