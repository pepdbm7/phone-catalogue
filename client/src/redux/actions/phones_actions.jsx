import {
  GET_ALL_PHONES_REQUEST,
  GET_ALL_PHONES_SUCCESS,
  GET_ALL_PHONES_FAILURE,
  GET_PHONE_REQUEST,
  GET_PHONE_SUCCESS,
  GET_PHONE_FAILURE
} from "./types";
import axios from "axios";

export const getAllPhones = () => dispatch => {
  dispatch({
    type: GET_ALL_PHONES_REQUEST
  });
  setTimeout(async () => {
    return axios
      .get("/catalogue")
      .then(phones =>
        dispatch({
          type: GET_ALL_PHONES_SUCCESS,
          payload: phones.data
        })
      )
      .catch(err =>
        dispatch({
          type: GET_ALL_PHONES_FAILURE,
          payload: [],
          error: err.message
        })
      );
  }, 2000);
};

export const getPhone = id => dispatch => {
  if (typeof id !== "number") throw TypeError("Not valid phone ID");

  dispatch({
    type: GET_PHONE_REQUEST
  });
  setTimeout(async () => {
    return axios
      .get(`/catalogue`)
      .then(({ data }) => data[id])
      .then(phone =>
        dispatch({
          type: GET_PHONE_SUCCESS,
          payload: phone
        })
      )
      .catch(err =>
        dispatch({
          type: GET_PHONE_FAILURE,
          payload: {},
          error: err.message
        })
      );
  }, 2000);
};
