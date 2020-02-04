import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { getPhone } from "../redux/actions/phones_actions";

import Spinner from "./Spinner";

const Phone = ({ history, phone, isLoading, errorMessage, getPhone }) => {
  useEffect(() => {
    //to keep working on refresh page, as we lose store data:
    const url = history.location.pathname;
    const id = url.charAt(url.length - 1);
    getPhone(parseInt(id));
  }, [history.location.pathname, getPhone]);

  const goToCatalogue = () => history.push("/catalogue");

  return (
    <Container>
      {isLoading && <Spinner />}
      {!isLoading && errorMessage && (
        <ErrorMessage>{errorMessage}</ErrorMessage>
      )}
      {!isLoading && phone.name ? (
        <PhoneCard>
          <PhoneImage src={`/img/${phone.imageFileName}`} alt="phone" />
          <Title>{phone.name}</Title>
          <Manufacturer>{phone.manufacturer}</Manufacturer>
          <Description>{phone.description}</Description>
          <PhonePrice>{phone.price}€</PhonePrice>
        </PhoneCard>
      ) : null}
      {!isLoading && <Button onClick={goToCatalogue}>Back</Button>}
    </Container>
  );
};
const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h2`
  color: rgba(92, 29, 179, 1);
  width: 100%;
  text-align: center;
  font-size: 2em;
  letter-spacing: 1px;
`;

const PhoneImage = styled.img`
  width: 70%;
  margin: 15px auto;
`;

const Manufacturer = styled.p`
  font-style: italic;
`;

const Description = styled.p`
  width: 80%;
  font-family: cursive;
`;

const PhonePrice = styled.p`
  font-weight: 600;
  font-size: 20px;
  border: 3px dashed rgba(92, 29, 179, 1);
  padding: 8px;
`;

const PhoneCard = styled.div`
  box-shadow: 0 0 7px -1px darkgrey;
  background: white;
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

const ErrorMessage = styled.p`
  color: green;
  font-weight: 600;
`;

const Button = styled.button`
  border-radius: 5px;
  box-shadow: 0 0 4px rgba(92, 29, 179, 1);
  padding: 12px 25px;
  margin: 0 auto 50px;
  border: 1px solid rgba(92, 29, 179, 1);
  transition: 0.4s all;
  font-weight: 700;
  color: rgba(92, 29, 179, 1);
  background: white;
  font-size: 1.5em;
  animation: waving 1s alternate ease-out infinite;
  cursor: pointer;
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
  }
`;

const mapStateToProps = state => {
  console.log(state.phone);
  return {
    phone: state.phone.phone,
    isLoading: state.phone.isloading,
    errorMessage: state.phone.errorMessage
  };
};

export default connect(mapStateToProps, { getPhone })(Phone);
