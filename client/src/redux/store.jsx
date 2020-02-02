import { createStore, combineReducers } from "redux";
import phonesReducers from "./reducers/phones_reducers";
import spinnerReducers from "./reducers/spinner_reducers";

const reducers = combineReducers({
  phonesReducers,
  spinnerReducers
});

const store = createStore(reducers);
export default store;
