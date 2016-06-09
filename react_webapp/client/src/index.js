import ReactDOM from "react-dom";
import React from "react";
import {AppContainer, store, listeners, apiGet, apiPost} from "./exports.js";
import deepFreeze from "deep-freeze";

const render = () => {
  // these 2 lines for dev only
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


// import deepEqual from "deep-equal";

// document.body.onclick = () => {
//   console.log(savedGame)
// }
//   console.log(savedGame);
//   let equal = deepEqual(savedGame, store.getState(), {strict: true})
//   console.log("deeply equal?",equal);

// const render = () => {
//   console.log("STATE:", store.getState());
//   ReactDOM.render(
    // <Provider store={store}>
//     <AppContainer state={store.getState()} listeners={listeners}/>
    // </Provider>,
//     document.getElementById("root")
//     );
//   // console.log("STATE:", store.getState());
//   // apiPost("http://localhost:1784/api/game_data", store.getState())
// }

// window.onload = function(){
//   store.subscribe(render);
//   render();
//   // setInterval(function () {
//   //   // apiGet("http://localhost:1784/api/game_data", render);
//   //   fetch("http://localhost:1784/api/game_data")
//   //     .then((response) => response.json())
//   //     .then(render)
//   // }, 1000)
// };

  // console.log("state:", store.getState());
  // console.log("listeners in index.js", listeners);


// THE `import {AppContainer, store} from "./exports.js";` syntax
// is utilising "named parameters" (I suspect)
// and is not utilising object key-value matching shrothand sytax (as seen in some peoples combineReducer arg object)
// ie. {todos, visibilityFilter} - shorthand for {todos: todos, visibilityFilter: visibilityFilter}
// where the key is the key in the first level of the store object that the relevent reducer treats as its state
// and the value is the name of the reducer function being used to manage actions affecting that sub-object of state
// (see ./store.js for my conbineReducers - I do not use this shorthand for my argument object)
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