// createInitialStore.js
import { createStore, applyMiddleware } from "redux";
import { fromJS } from "immutable";
import thunk from "redux-thunk";
import XssFilters from "xss-filters";
import reducer from "./reducer/reducer.js";

// User will see NOTHING before this promise resolved.
const _createInitialStore = async () => {
  const preloadedState = {};
  const store = createStore(
    reducer,
    fromJS(preloadedState),
    applyMiddleware(thunk)
  );
  return { store };
};

const filterObject = (object) => {
  return Object.keys(object).reduce((current, key) => {
    const assignObject = {};
    assignObject[key] = XssFilters.inHTMLData(object[key]);
    return Object.assign({}, current, assignObject);
  }, {});
};

export const createInitialStore = ({
  params = {},
  query = {},
  cookies = {}
} = {}) => {
  const safeParams = filterObject(params);
  const safeQuery = filterObject(query);
  const safeCookies = filterObject(cookies);
  return _createInitialStore({
    params: safeParams,
    query: safeQuery,
    cookies: safeCookies
  });
};

export default createInitialStore;
