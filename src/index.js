import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { createRootReducer } from "./reducer/reducer.js";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import App from "./component/Campaign.jsx";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  createRootReducer(),
  composeEnhancer(applyMiddleware(thunk))
);

const RootComponent = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

const rootElement = document.getElementById("root");
render(<RootComponent />, rootElement);
