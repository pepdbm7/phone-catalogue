import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducers from "./reducers";

const middleware = applyMiddleware(thunkMiddleware); //for async store updates

const store = createStore(rootReducers, middleware);

export default store;
