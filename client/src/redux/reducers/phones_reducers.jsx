import { GET_ALL_PHONES } from "../actions/types";

//every reducer has its own state!:

const initialState = {
  phones: []
};

export default (state = initialState, action) => {
  if (action.type === GET_ALL_PHONES)
    return {
      ...state,
      phones: action.payload
    };

  return state;
};
