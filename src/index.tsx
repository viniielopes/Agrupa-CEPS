import "bootstrap/dist/css/bootstrap.min.css";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import * as thunk from "redux-thunk";
import { applyMiddleware, createStore } from "../node_modules/redux";
import App from "./App";
import { appReducer } from "./Reducers/appReducer";
import registerServiceWorker from "./registerServiceWorker";

const store = createStore(appReducer, applyMiddleware(thunk.default));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
