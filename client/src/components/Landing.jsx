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
  font-size: 50px;
`;

const Catalogue = ({ history }) => {
  const goToCatalogue = () => history.push("/catalogue");
  return (
    <Container>
      <Title>This is the landing page</Title>
      <p>This is a text</p>
      <button onClick={goToCatalogue}>See Catalogue</button>
    </Container>
  );
};

export default Catalogue;
