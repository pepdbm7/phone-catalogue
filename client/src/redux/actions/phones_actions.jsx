import { GET_ALL_PHONES, GET_PHONE } from "./types";
import axios from "axios";

export const getAllPhones = () => async dispatch => {
  const phones = await axios.get("/catalogue");

  dispatch({
    type: GET_ALL_PHONES,
    payload: phones.data
  });
};

export const getPhone = id => async dispatch => {
  //RETRIEVE ONE
  if (typeof id !== "string") throw TypeError("id is not an number");

  const phones = await axios.get(`/catalogue`);
  const phone = await phones.data[id];

  dispatch({
    type: GET_PHONE,
    payload: phone
  });
};
