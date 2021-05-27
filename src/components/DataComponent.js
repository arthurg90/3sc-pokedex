import { useEffect, useState } from 'react';
import PokeList from './PokeList';

function DataComponent() {
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

  // useEffect(() => {
  //   fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
  //     .then(res => res.json())
  //     .then(
  //       (result) => {
  //         setIsLoaded(true);
  //         setItems(result);
  //         console.log(result);
  //       },
  //       (error) => {
  //         setIsLoaded(true);
  //         setError(error);
  //       }
  //     )
  // }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else {
    return (
      <PokeList items={items} />
    );
  }

}

export default DataComponent;