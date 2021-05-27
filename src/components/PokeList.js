const PokeList = (props) => {
  function capitalise(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  return (
    <>
        {props.items.map((item) => (
          <p key={item.name}>
            <img alt="pokemon" width='100px' height='100px' src={`https://img.pokemondb.net/artwork/large/${item.name}.jpg`}/>
            <h2>{capitalise(item.name)}</h2>
          </p>
        ))}
    </>
  )
}

export default PokeList;