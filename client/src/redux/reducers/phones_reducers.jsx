const initialState = {
  phones: [],
  isloading: false,
  errorMessage: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_PHONES_REQUEST":
      return { ...state, isloading: true };
    case "GET_ALL_PHONES_SUCCESS":
      return { ...state, phones: action.payload, isloading: false };
    case "GET_ALL_PHONES_FAILURE":
      return { ...state, isloading: false, errorMessage: action.error };
    default:
      return state;
  }
};
