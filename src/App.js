import "./App.css";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { ModalProvider } from "styled-react-modal";
import Header from "./components/Header";
import PokeList from "./components/PokeList";
import Search from "./components/Search";
import SavePokemon from "./components/SavePokemon";
import RemovePokemon from "./components/RemovePokemon";

const StyledHeading = styled.h3`
  color: darkgrey;
  text-align: left;
  margin-left: 7rem;
`;

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState('');
  const [saved, setSaved] = useState([]);
  const [generation, setGeneration] = useState(1);

  //Fetch API for all pokemon results
  const getPokemon = (generation) => {
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

  function handleSelect(e) {
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
    let prevSaved = saved.filter((saved) => saved.name !== item.name);
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
          <label htmlFor="gen-select">Choose a generation:</label>
          <select
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
          </select>

          <Search handleChange={(e) => setSearch(e.target.value)} />

          {saved && saved.length > 0 ? (
            <>
              <StyledHeading>Saved:</StyledHeading>
              <PokeList
                items={saved}
                saveComponent={RemovePokemon}
                handleSavedClick={removeSavedPokemon}
              />
            </>
          ) : null}
          <StyledHeading>Pokemon:</StyledHeading>
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
