const initialState = {
  phone: {},
  isloading: false,
  errorMessage: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "GET_PHONE_REQUEST":
      return { ...state, isloading: true };
    case "GET_PHONE_SUCCESS":
      return { ...state, phone: action.payload, isloading: false };
    case "GET_PHONE_FAILURE":
      return { ...state, isloading: false, errorMessage: action.error };
    default:
      return state;
  }
};
