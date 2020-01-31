import React from "react";

const Phone = ({ history }) => {
  const goToCatalogue = () => history.push("/catalogue");
  return (
    <>
      <p>This is the phone!</p>
      <ul>
        <li>detail 1</li>
        <li>detail 2</li>
        <li>detail 3</li>
        <li>detail 4</li>
      </ul>
      <button onClick={goToCatalogue}>Back to Catalogue</button>{" "}
    </>
  );
};

export default Phone;
