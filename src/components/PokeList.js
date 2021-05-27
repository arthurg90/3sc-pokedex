const PokeList = (props) => {
  function capitalise(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  return (
    <>
        {props.items.map((item) => (
          <div key={item.name}>
            <img alt="pokemon" width='auto' height='120px' src={`https://img.pokemondb.net/artwork/large/${item.name}.jpg`}/>
            <h2>{capitalise(item.name)}</h2>
          </div>
        ))}
    </>
  )
}

export default PokeList;