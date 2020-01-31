import React, { createContext, useState } from "react";

export const StoreContext = createContext(null);

export default ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [allPhones, setAllPhones] = useState([]);
  const [phone, setPhone] = useState([]);

  const store = {
    isLoading: [isLoading, setIsLoading],
    allPhones: [allPhones, setAllPhones],
    phone: [phone, setPhone]
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
