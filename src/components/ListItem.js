import { useState } from "react";
import Modal from "react-modal";
import styled from "styled-components";

const StyledListItem = styled.div`
  margin: 2rem;
  width: 250px;
`;

Modal.setAppElement("#root");

const ListItem = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  function capitalise(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <StyledListItem onClick={toggleModal}>
      <img
        alt="pokemon"
        width="auto"
        height="120px"
        src={`https://img.pokemondb.net/artwork/large/${props.item.name}.jpg`}
      />
      <h2>{capitalise(props.item.name)}</h2>
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
      >
        <div>My modal dialog.</div>
        <button onClick={toggleModal}>Close modal</button>
      </Modal>
    </StyledListItem>
  );
};

export default ListItem;
