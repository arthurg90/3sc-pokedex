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

  //Fetch API for all pokemon results
  const getPokemon = () => {
    const url = `https://pokeapi.co/api/v2/pokemon/?limit=151`;
    return fetch(url)
      .then((res) => res.json())
      .then(
        (name) => {
          setIsLoaded(true);
          setItems(name.results);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  };

  useEffect(() => {
    getPokemon();
  }, []);

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
    if (!saved.includes(item) === false) { //Check if an item is already in the saved state to avoid adding duplicates
      return
    }
    const newSavedList = [...saved, item];
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
          <StyledHeading>Kanto Pokemon:</StyledHeading>
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
