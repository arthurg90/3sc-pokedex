import styled from "styled-components";
import logo from "../images/logo.png";

const Image = styled.img`
  width: auto; 
  height: 80px;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const Header = (props) => {
  return (
    <header className="App-header">
      <Image src={logo} alt="Logo" />
    </header>
  );
};

export default Header;
