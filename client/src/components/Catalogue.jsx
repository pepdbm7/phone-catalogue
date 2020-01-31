import React, { useState, useEffect } from "react";

const Catalogue = ({ history }) => {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    fetch("/catalogue")
      .then(phones => {
        console.log(phones);
        return phones.json();
      })
      .then(phones => {
        console.log(phones);
        setPhones(phones);
      });
  }, []);

  const goToPhone = () => history.push("/phone");
  return (
    <>
      <h2>Catalogue of our phones</h2>
      {phones.length
        ? phones.map((phone, i) => (
            <div key={i}>
              <img src={phone.imageFileName} alt="phone" />
              <h3>{phone.name}</h3>
              <p>{phone.price}€</p>
            </div>
          ))
        : null}
      <button onClick={goToPhone}>See a phone</button>
    </>
  );
};

export default Catalogue;
