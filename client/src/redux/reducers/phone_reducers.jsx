import { GET_PHONE } from "../actions/types";

//every reducer has its own state!:

const initialState = {
  phone: []
};

export default (state = initialState, action) => {
  if (action.type === GET_PHONE)
    return {
      ...state,
      phone: action.payload
    };

  return state;
};
