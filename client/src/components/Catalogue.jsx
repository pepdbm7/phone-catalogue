import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  flex-flow: wrap;
`;

const Title = styled.h2`
  color: blue;
  width: 100%;
  text-align: center;
`;

const PhoneCard = styled.div`
  box-shadow: 0 0 5px 1px gray;
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
    transform: scale(1.05);
    background: gray;
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

const Catalogue = ({ history }) => {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    fetch("/catalogue")
      .then(phones => phones.json())
      .then(phones => {
        setPhones(phones);
      });
  }, []);

  const goToPhone = id => {
    console.log(id);
    history.push(`/phone/${id}`);
  };
  return (
    <>
      <Title>Catalogue of our phones</Title>
      <Container>
        {phones.length
          ? phones.map((phone, i) => (
              <PhoneCard key={i} onClick={() => goToPhone(phone.id)}>
                <PhoneImage src={`/img/${phone.imageFileName}`} alt="phone" />
                <PhoneName>{phone.name}</PhoneName>
                <PhonePrice>{phone.price}€</PhonePrice>
              </PhoneCard>
            ))
          : null}
      </Container>
    </>
  );
};

export default Catalogue;
