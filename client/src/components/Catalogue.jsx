import React from "react";

const Catalogue = ({ history }) => {
  const goToPhone = () => history.push("/phone");
  return (
    <>
      <p>This is the catalogue!</p>
      <button onClick={goToPhone}>See a phone</button>
    </>
  );
};

export default Catalogue;
