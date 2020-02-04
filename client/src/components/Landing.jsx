import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
`;
const Title = styled.h1`
  color: white;
  letter-spacing: 7px;
  font-size: 4em;
`;

const SubTitle = styled.h2`
  color: white;
  letter-spacing: 1px;
  font-size: 3em;
  font-weight: 400;
`;

const Button = styled.button`
  border-radius: 5px;
  box-shadow: 0 0 4px rgba(92, 29, 179, 1);
  padding: 12px 25px;
  border: 1px solid rgba(92, 29, 179, 1);
  transition: 0.4s all;
  font-weight: 700;
  color: rgba(92, 29, 179, 1);
  animation: waving 1s alternate ease-out infinite;
  cursor: pointer;
  background: white;
  font-size: 1.5em;
  &:hover {
    color: rgba(14, 14, 97, 1);
    border: rgba(14, 14, 97, 1);
    box-shadow: 0 0 15px 1px white;
  }
  @keyframes waving {
    0% {
      transform: translate(0, -6px);
    }
    100% {
      transform: translate(0, 0);
    }
`;

const Catalogue = ({ history }) => {
  const goToCatalogue = () => history.push("/catalogue");
  return (
    <Container>
      <Title>Phone Store</Title>
      <SubTitle>
        Enter and see our catalogue with the newest phones of the market
      </SubTitle>
      <Button onClick={goToCatalogue}>See Catalogue</Button>
    </Container>
  );
};

export default Catalogue;
