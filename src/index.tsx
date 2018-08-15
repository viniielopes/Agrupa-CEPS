import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "jquery/dist/jquery.js";
import "popper.js/dist/umd/popper.js";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import * as thunk from "redux-thunk";
import App from "./App";
import { appReducer } from "./Reducers/appReducer";
import { validacaoReducer } from "./Reducers/validacaoReducer";
import registerServiceWorker from "./registerServiceWorker";

const combinado = combineReducers({ validacaoReducer, appReducer });

const store = createStore(
  combinado,
  composeWithDevTools(applyMiddleware(thunk.default))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
