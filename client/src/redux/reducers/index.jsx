import { combineReducers } from "redux";
import phonesReducers from "./phones_reducers";
import phoneReducers from "./phone_reducers";

const rootReducers = combineReducers({
  phones: phonesReducers,
  phone: phoneReducers
});

export default rootReducers;
