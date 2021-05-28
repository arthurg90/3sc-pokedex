import "./App.css";
import Header from "./components/Header";
import PokeList from "./components/PokeList";
import Search from "./components/Search";
import { useEffect, useState } from "react";
import { ModalProvider } from "styled-react-modal";

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState('');

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
          <PokeList items={searchResults} />
        </div>
      </ModalProvider>
    );
  }
}

export default App;
