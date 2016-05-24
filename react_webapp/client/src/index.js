// THE `import {AppContainer, store} from "./exports.js";` syntax
// is utilising "named parameters" (I suspect)
// and is not utilising object key-value matching shrothand sytax (as seen in some peoples combineReducer arg object)
// ie. {todos, visibilityFilter} - shorthand for {todos: todos, visibilityFilter: visibilityFilter}
// where the key is the key in the first level of the store object that the relevent reducer treats as its state
// and the value is the name of the reducer function being used to manage actions affecting that sub-object of state
// (see ./store.js for my conbineReducers - I do not use this shorthand for my argument object)
import ReactDOM from "react-dom";
import React from "react";
import {AppContainer, store} from "./exports.js";
import {listeners} from "./exports.js";
import {apiGet, apiPost} from "./exports.js";
// import {Provider, connect} from "react-redux";


// const diceListeners = {
//   onRollDiceClick: ()=>{
//         store.dispatch({type: "INCREMENT_DICE_ROLLED_COUNTER"})

//   }
// }
// const listeners = {
//   dice: diceListeners,
//   stats:{}
// }

const render = () => {
    // <Provider store={store}>
    // </Provider>,

  

  ReactDOM.render(
    <AppContainer store={store} state={store.getState()} listeners={listeners}/>,
    document.getElementById("root")
    );
  // console.log("state:", store.getState());
  // console.log("listeners in index.js", listeners);
}

window.onload = function(){
  store.subscribe(render);
  render();
};
