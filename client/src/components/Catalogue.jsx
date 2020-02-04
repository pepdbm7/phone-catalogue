import React, { useEffect } from "react";
import styled from "styled-components";
//Redux:
import { connect } from "react-redux";
import { getAllPhones } from "../redux/actions/phones_actions";
import Spinner from "./Spinner";

const Catalogue = ({
  getAllPhones,
  history,
  isLoading,
  errorMessage,
  phones
}) => {
  useEffect(() => getAllPhones(), [getAllPhones]);

  const goToPhone = id => {
    history.push(`/phone/${id}`);
  };

  return (
    <>
      <Title>Catalogue of our phones</Title>
      <Container>
        {isLoading && <Spinner />}
        {!isLoading && errorMessage && (
          <ErrorMessage>{errorMessage}</ErrorMessage>
        )}
        {!isLoading &&
          phones &&
          phones.map((phone, i) => (
            <PhoneCard key={i} onClick={() => goToPhone(phone.id)}>
              <PhoneImage src={`/img/${phone.imageFileName}`} alt="phone" />
              <PhoneName>{phone.name}</PhoneName>
              <PhonePrice>{phone.price}€</PhonePrice>
            </PhoneCard>
          ))}
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  flex-flow: wrap;
`;

const Title = styled.h2`
  color: white;
  width: 100%;
  text-align: center;
  margin: 70px auto;
  letter-spacing: 7px;
  font-size: 3em;
`;

const PhoneCard = styled.div`
  box-shadow: 0 0 7px -1px darkgrey;
  border-radius: 5px;
  background: white;
  padding: 15px 10px;
  margin: 20px;
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  transition: 0.4s all ease;
  cursor: pointer;

  &:hover {
    transform: scale(0.95);
    opacity: 0.8;
    box-shadow: 0 0 7px 2px white;
  }

  @media (max-width: 800px) {
    width: 35%;
  }

  @media (max-width: 450px) {
    width: 70%;
  }
`;

const PhoneImage = styled.img`
  width: 70%;
  margin: 0 auto 15px;
`;

const PhoneName = styled.h3`
  text-shadow: 2px 2px 4px gray;
  margin: 0 auto 15px;
  color: rgba(92, 29, 179, 1);
  font-size: 1.5em;
`;

const PhonePrice = styled.p`
  font-weight: 600;
  font-size: 20px;
`;

const ErrorMessage = styled.p`
  color: green;
  font-weight: 600;
`;

const mapStateToProps = state => ({
  phones: state.phones.phones,
  isLoading: state.phones.isloading,
  errorMessage: state.phones.errorMessage
});

export default connect(mapStateToProps, { getAllPhones })(Catalogue);
