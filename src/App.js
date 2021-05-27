import './App.css';
import Header from "./components/Header";
import PokeList from './components/PokeList';
import { useEffect, useState } from 'react';

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([
        {
            "name": "bulbasaur",
            "url": "https://pokeapi.co/api/v2/pokemon/1/"
        },
        {
            "name": "ivysaur",
            "url": "https://pokeapi.co/api/v2/pokemon/2/"
        },
        {
            "name": "venusaur",
            "url": "https://pokeapi.co/api/v2/pokemon/3/"
        }
      ]);   

  return (
    <div className="App">
      <Header text="Pokedex" />
      <PokeList items={items} />
    </div>
  );
}

export default App;
