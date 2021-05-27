const PokeList = (props) => {
  return (
    <>
        {props.items.map((item, index) => (
          <p>{item.name}</p>
        ))}
      </>
  )
}

export default PokeList;