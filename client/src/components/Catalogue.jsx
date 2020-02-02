import React, { useEffect, useState } from "react";
import styled from "styled-components";
//Redux:
import { connect } from "react-redux";
import { getAllPhones } from "../redux/actions/phones_actions";
import Spinner from "./Spinner";

const Catalogue = props => {
  useEffect(async () => props.getAllPhones(), []);

  const goToPhone = () => props.history.push("/phone");

  return (
    <>
      <Title>Catalogue of our phones</Title>
      <Container>
        {// !isLoading &&
        props.phones.length ? (
          props.phones.map((phone, i) => (
            <PhoneCard key={i} onClick={() => goToPhone(phone.id)}>
              <PhoneImage src={`/img/${phone.imageFileName}`} alt="phone" />
              <PhoneName>{phone.name}</PhoneName>
              <PhonePrice>{phone.price}€</PhonePrice>
            </PhoneCard>
          ))
        ) : (
          <Spinner />
        )}
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  flex-flow: wrap;
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
  margin: 20px;
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  transition: 0.4s all ease;
  cursor: pointer;

  &:hover {
    transform: scale(0.95);
    background: darkgray;
    opacity: 0.8;
  }
`;

const PhoneImage = styled.img`
  width: 70%;
  margin: 0 auto 15px;
`;

const PhoneName = styled.h3`
  text-shadow: 2px 2px 4px gray;
  margin: 0 auto 15px;
`;

const PhonePrice = styled.p`
  font-weight: 300;
`;

const mapStateToProps = state => {
  console.log(state.phones.phones);
  return {
    phones: state.phones.phones
  };
};

export default connect(mapStateToProps, { getAllPhones })(Catalogue);
