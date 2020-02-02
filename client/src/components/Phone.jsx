import React, { useState, useEffect } from "react";
import styled from "styled-components";
// import { StoreContext } from "../store";
import Spinner from "./Spinner";

const Phone = ({ history }) => {
  const [phone, setPhone] = useState([]);

  // const {
  //   isLoading: [isLoading, setIsLoading],
  //   phone: [phone, setPhone]
  // } = useContext(StoreContext);

  useEffect(() => {
    // setIsLoading(true);
    // fetch(`/phone/${id}`)
    //   .then(phone => phone.json())
    //   .then(phone => {
    //     setPhone(phone);
    //   });
  }, []);

  const goToCatalogue = () => history.push("/catalogue");

  return (
    <Container>
      <PhoneCard>
        {phone.length ? (
          // && isLoading
          <>
            <Title>{phone.name}</Title>
            <ul>
              <li>detail 1</li>
              <li>detail 2</li>
              <li>detail 3</li>
              <li>detail 4</li>
            </ul>
          </>
        ) : (
          <Spinner />
        )}
      </PhoneCard>
      <Button onClick={goToCatalogue}>Back to Catalogue</Button>{" "}
    </Container>
  );
};
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  text-align: center;
`;

const Title = styled.h2`
  color: dodgerblue;
  width: 100%;
  text-align: center;
`;

const PhoneCard = styled.div`
  box-shadow: 0 0 7px -1px darkgrey;
  border-radius: 5px;
  padding: 15px 10px;
  margin: 5% auto;
  width: 70%;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
`;

const Button = styled.button`
  border-radius: 5px;
  box-shadow: 0 0 4px dodgerblue;
  padding: 5px 15px;
  border: 1px solid dodgerblue;
  transition: 0.4s all;
  font-weight: 600;
  color: dodgerblue;
  animation: waving 1.2s alternate ease-out infinite;
  cursor: pointer;
`;

export default Phone;
