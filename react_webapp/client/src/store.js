import {createStore, combineReducers} from "redux";
import currentPlayerReducer from "./reducers/currentPlayerReducer.js";
import gameInfoReducer from "./reducers/gameInfoReducer.js";
import playerListReducer from "./reducers/playerListReducer.js";
import settingsReducer from "./reducers/settingsReducer.js";
import globalReducerCreator from "./reducers/globalReducerCreator.js";

const defaultState = {
  // implemented as default parameters on each reducer
  currentPlayer: {
    dice: [{value: 0, saved: false}, {value: 0, saved: false}, {value: 0, saved: false}, {value: 0, saved: false}, {value: 0, saved: false}],
    actionCounters: {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0},
    minigunAvailable: true,
    rollsRemaining: 3,
    canRoll: true
  },
  gameInfo: {
    sharedResource: {count: 9, max: 9},
    gameWinner: null,
    diceRolledCount: 0,
    turnsPlayedCount: 0
  },
  playerList: [{player_id: 0, health: 8, maxHealth: 8, sharedResource: 0}, {player_id: 1, health: 8, maxHealth: 8, sharedResource: 0}, {player_id: 2, health: 8, maxHealth: 8, sharedResource: 0}, {player_id: 3, health: 8, maxHealth: 8, sharedResource: 0}, {player_id: 4, health: 8, maxHealth: 8, sharedResource: 0}, {player_id: 5, health: 8, maxHealth: 8, sharedResource: 0}, {player_id: 6, health: 8, maxHealth: 8, sharedResource: 0}, {player_id: 7, health: 8, maxHealth: 8, sharedResource: 0}],
  settings: {numDice: 5, sharedResourceMax: 9}
};

const previousState = undefined // get this from database when saving game is implemented

const combinedReducer = combineReducers({
  currentPlayer: currentPlayerReducer,
  gameInfo: gameInfoReducer,
  playerList: playerListReducer,
  settings: settingsReducer,
})

const globalReducer = globalReducerCreator(combinedReducer);

export default createStore(globalReducer, previousState, window.devToolsExtension ? window.devToolsExtension() : undefined);
// export default store = createStore(globalReducer, initialState, (window.devToolsExtension) ? window.devToolsExtension() : undefined);


// console.log(combineReducers);


// CAN'T IMPORT ANYTHING VIA exports.js IN store.js

// import {currentPlayerReducer, diceReducer, playerInfoReducer, playerListReducer, settingsReducer, sharedResourceReducer, statsReducer} from "./exports.js";


// import {reducers} from "./exports.js";
// console.log(reducers);
// import {currentPlayerReducer, diceReducer, playerInfoReducer, playerListReducer, settingsReducer, sharedResourceReducer, statsReducer} from "./exports.js";
// import {currentPlayerReducer, diceReducer, playerInfoReducer, playerListReducer, settingsReducer, sharedResourceReducer, statsReducer} from "./exports.js";
// import {reducers} from "./exports.js";

// console.log(reducers);
// diceReducer, , statsReducer
// import {diceReducer} from "./exports.js";
// import {statsReducer} from "./exports.js";


// I can't import reducers via ./exports file - as it causes the createStore call to invoke with the reducers that are values in its arguments object still evaluating to undefined
// 

// let mainReducer = combineReducers({
//   // key: value => state field name: reducer managing that state field
//   dice
// })


// var shorthandReducer = conbineReducers({
//   // { {currentPlayer} = listeners },
//   { ({dice: dice} = listeners): },
//   // { {playerInfo} = listeners },
//   // { {playerList} = listeners },
//   // { {settings} = listeners },
//   // { {sharedResource} = listeners },
//   { {stats} = listeners }
// })

// OLD INITIAL STATE:
    // onRollDiceClick: ()=>{store.dispatch({type:"INCREMENT_DICE_ROLLED_COUNTER"})}

    // Q: How can I set behaviour here - need initialState object to refine reducer - need reducer to create store - initialState object references store for dispatch actions
    // A: Probably shouldn't be adding behaviour here - where is best? (or try again to use hoisting cleverly to allow this structure - but it already feels like there's too much going on in this file.)

    // onIncrement: store.dispatch({type: "INCREMENT_DICE_ROLLED_COUNTER"}),
    // onDecrement: store.dispatch({type: "DECREMENT_DICE_ROLLED_COUNTER"})

// //////////////////////////////////////////////////
// const reducer = combineReducers({
//   currentPlayer: currentPlayerReducer,
//   dice: diceReducer,
//   playerInfo: playerInfoReducer,
//   playerList: playerListReducer,
//   settings: settingsReducer,
//   sharedResource: sharedResourceReducer,
//   stats: statsReducer
// })
// //////////////////////////////////////////////////



// const mainReducer = (state = initialState, action) => {
//   // var exampleEs5ActionToBehaviourDictionaryLookupObject = {
//   //   "@@INIT": function(){
//   //     return state;
//   //   }
//   // }
//   console.log("state object as passed to reducer",state);
//   console.log("action object as passed to reducer",action);

//   // probably should just use switch statement - but I like function maps
//   const actionStringToBehaviour = {
//     // "@@INIT": () => state,
//     // "ATTACH_LISTENERS": () => {
//     //   return Object.assign({}, state, {listeners: action.listeners})
//     // },
//     "INCREMENT_DICE_ROLLED_COUNTER": () => {
//       // es7 Object.assign replacement with terser sytax using spread operator ...
//       // return { {}, state, ...{stats: {diceRolledCount: (state.stats.diceRolledCount + 1)}} }
//       return Object.assign({}, state, {stats: {diceRolledCount: (state.stats.diceRolledCount + 1)}})
//     },
//     "DECREMENT_DICE_ROLLED_COUNTER": () => {
//       return Object.assign({}, state, {stats: {diceRolledCount: state.stats.diceRolledCount - 1}})
//     }
//   }
//   // if action type is on the reducer function map - this if will pass - and invoke the appropriate function, returning the return value of the appropriate function
//   if (actionStringToBehaviour[action.type]) return actionStringToBehaviour[action.type]();
//   // if action type is not on the reducer - the above if statement will fail - and this fallback return statement will run - returning the state as it was passed in, unchanged.
//   return state;
// }

// const store = createStore(mainReducer);

// const store = createStore(mainReducer, window.devToolsExtension ? window.devToolsExtension() : undefined);


// console.log(store);

// module.exports = store;