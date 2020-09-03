// reducer.js
import { combineReducers } from "redux-immutable";
// import liveStream from "./liveStream.js";

const reducers = {
  //   liveStream
};

export const createRootReducer = () =>
  combineReducers({
    ...reducers
  });

export default combineReducers(reducers);
