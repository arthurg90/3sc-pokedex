import './App.css';
import Header from "./components/Header";
import PokeList from './components/PokeList';
import { useEffect, useState } from 'react';

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]); 
  
   useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
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
  }, []) 

  return (
    <div className="App">
      <Header text="Pokedex App" />
      <PokeList items={items} />
    </div>
  );
}

export default App;
