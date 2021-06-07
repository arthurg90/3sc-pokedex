import styled from "styled-components";
import logo from "../images/logo.png";

const Image = styled.img`
  width: auto;
  height: 80px;
  margin-top: 1rem;
  margin-bottom: 1rem;
  @media (max-width: 900px) {
    display: none;
  }
`;

const StyledHeader = styled.header`
  background-color: #dc3545;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  -webkit-box-shadow: 5px 10px 0px 5px #77000A; 
  box-shadow: 5px 10px 0px 5px #77000A;
`;

const CircleContainer = styled.div`
  display: flex;
  position: absolute;
  left: 50px;
`;

const Circle = styled.figure`
  display: block;
  border-radius: 100%;
  border: 7px solid white;
  height: 80px;
  width: 80px;
  margin: 0;
  background: radial-gradient(circle at 20px 30px, #28aafd, #11486b);
`;

const MiniCircle = styled.figure`
  display: block;
  border-radius: 100%;
  border: 1px solid black;
  height: 20px;
  width: 20px;
  margin-right: 0.5rem;
`;

const RedCircle = styled(MiniCircle)`
  background: radial-gradient(circle at 5px 5px, #ea4b66, #9d061f);
`;

const YellowCircle = styled(MiniCircle)`
  background: radial-gradient(circle at 5px 5px, #f4e060, #98850e);
`;

const GreenCircle = styled(MiniCircle)`
  background: radial-gradient(circle at 5px 5px, #68ff7f, #306a39);
`;

//Logo and Header banner
  // @ts-ignore
const Header = (props) => {
  return (
    <StyledHeader>
      <CircleContainer>
        <Circle></Circle>
        <RedCircle />
        <YellowCircle />
        <GreenCircle />
      </CircleContainer>
      <Image src={logo} alt="Logo" />
    </StyledHeader>
  );
};

export default Header;
