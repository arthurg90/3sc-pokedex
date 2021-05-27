import './App.css';
import Header from "./components/Header";
import PokeList from './components/PokeList';
import { useEffect, useState } from 'react';

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]); 

  const getPokemon = () => {
    return fetch("https://pokeapi.co/api/v2/pokemon?limit=100")
      .then(res => res.json())
      .then(
        (name) => {
          setIsLoaded(true);
          setItems(name.results);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  } 
  
  useEffect(() => {
    getPokemon();
  }, []) 

  if (error) {
    return <div>Error: {error.message}</div>
  } else if (!isLoaded) {
    return <div>Loading...</div>
  } else {
  return (
    <div className="App">
      <Header text="Pokedex App" />
        <PokeList items={items} />
    </div>
  );
  }
}

export default App;
