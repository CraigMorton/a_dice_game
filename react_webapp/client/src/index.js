import ReactDOM from "react-dom";
import React from "react";
import store from "./store.js";
import AppContainer from "./components/AppContainer.jsx";
import listeners from "./listeners/listeners.js";

import {apiGet, apiPost} from "./models/jsonApiHelper.js";
import deepFreeze from "deep-freeze";

const render = () => {
  // deep freeze for dev only
  // console.log("STATE:", store.getState());
  deepFreeze(store.getState())
  // ^ DEV ENV ONLY ^ ////////////////////

  ReactDOM.render(
    <AppContainer state={store.getState()} listeners={listeners}/>,
    document.getElementById("root")
    );
}

window.onload = function(){
  store.subscribe(render);
  render();
};