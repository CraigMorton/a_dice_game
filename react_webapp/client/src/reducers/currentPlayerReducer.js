import defaultStateGetter from "../defaultState.js";
const defaultState = defaultStateGetter().currentPlayer;
// const refreshDefaultState = () => {
//   import defaultStateObject from "../defaultState.js";
//   return defaultStateObject.currentPlayer;
// }

const currentPlayerReducer = (state = defaultState, action)=>{
  const actionToNewState = {
    // "RETURN_STATE_PASSED_IN": () => state,
    "REFRESH_CURRENT_PLAYER_DEFAULT_STATE": () => {
      const refreshedState = defaultStateGetter().currentPlayer;
      return Object.assign({}, state, refreshedState)
    },
    "ROLL_UNSAVED_DICE": () => {
      let newArray = state.dice.map((die)=>{
        if (die.saved) return die;
        let value = Math.floor(Math.random()*6 + 1)
        return { ...die, value: value}
      })
      return {...state, dice: newArray};
    },
    "DECREMENT_ROLLS_REMAINING": () => {
      if (state.rollsRemaining > 1) return {...state, rollsRemaining: state.rollsRemaining - 1};
      if (state.rollsRemaining <= 1) return {...state, rollsRemaining: 0, canRoll: false};
    },
    "AUTO_SAVE_GRENADES": () => {
      // could integrate this action into "ROLL_DICE" action
      const newArray = state.dice.map((item, index)=>{
        if (item.value === action.value) return {...item, saved: true};
        return item;
      })
      return {...state, dice: newArray }
    },
    "TOGGLE_DIE_SAVE_STATUS": () => {
      const index = action.id;
      const diceArray = state.dice.slice();
      const die = diceArray[index];
      const newDie = {...die, saved: !die.saved};
      const newDiceArray = [ ...diceArray.slice(0, index), newDie, ...diceArray.slice((index + 1)) ];
      return {...state, dice: newDiceArray};
    },
    "UPDATE_ACTION_COUNTERS": () => {
      let newActionCounters = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0}
      state.dice.forEach((die)=>{
        newActionCounters[die.value]++
      });
      return {...state, actionCounters: newActionCounters}
    },
    "THREE_GRENADES_DISABLE_ROLL": () => {
      if (action.grenadeCount >= 3) return {...state, canRoll: false, rollsRemaining: 0};
      return state;
    },
    "RESET_CURRENT_PLAYER": () => {
      const refreshedState = defaultStateGetter().currentPlayer;
      return refreshedState;
      // return {...state,
      //   dice:[{value: 0, saved: false}, {value: 0, saved: false}, {value: 0, saved: false}, {value: 0, saved: false}, {value: 0, saved: false}],
      //   actionCounters: {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0},
      //   minigunAvailable: true,
      //   rollsRemaining: 3,
      //   canRoll: true,
      //   targettedPlayerId: null
      // }
      // alternatively:
      // return currentPlayerReducer(undefined, {type: "RETURN_STATE_PASSED_IN"})
      // a bit confusing to see what that's actually doing but it should work, returning the default state
    },
    "TOGGLE_TARGET_PLAYER": () => {
      if (state.targettedPlayerId === action.id) return {...state, targettedPlayerId: null};
      return {...state, targettedPlayerId: action.id};
    },
    "DECREMENT_ACTION_COUNTER": () => {
      const actionUsed = action.counter;
      if (actionUsed > 0){
        const newActionCounter = {}
        newActionCounter[actionUsed] = state.actionCounters[actionUsed] - 1;
        return {...state, actionCounters: Object.assign({}, state.actionCounters, newActionCounter)}
      }
      return state;
    }
  }
  if (actionToNewState[action.type]) return actionToNewState[action.type]();
  return state;
}
export default currentPlayerReducer;
// module.exports = currentPlayerReducer;




// import {store} from "../exports.js"
// VM128289:1311 Uncaught Error: Reducers may not dispatch actions.

// const diceReducer = (state = {}, action) => {
//   const actionToNewState = {
    // "@@INIT": () => state,
    // "TOGGLE_DIE_SAVE_STATUS": () => {
    //   // console.log("action object in reducer:", action);
    //   const index = action.id;
    //   const diceArray = state.dice;
    //   // console.log("dice array:", diceArray);
    //   const die = diceArray[index];
    //   // console.log("to save/unsave:", die);
    //   const newDie = Object.assign({}, die, {saved: !die.saved});
    //   // console.log("with toggled save status:", newDie);
    //   // // const newDiceArraySLICED = diceArray.slice(0, index).concat(newDie).concat(diceArray.slice(index + 1));
    //   // // console.log(newDiceArraySLICED);
    //   // console.log("array pre-target element:", ...diceArray.slice(0, index));
    //   // console.log("target element:", newDie);
    //   // console.log(diceArray);
    //   // console.log(index);
    //   // console.log(index+1);
    //   // console.log(diceArray.slice(index+1));
    //   // console.log("array post-target element:", ...diceArray.slice(index + 1));
    //   // THAT was a long bug-hunt - the action.id, coming from the e.target.id (which isn't really the react way to get the id - maybe refs would be better)
    //   // was coming straight from the HTML, even though I put a Number into the HTML element, it become a string in HTML land. "1"+ 1 = 11     diceArray.slice(11) = []. 
    //   const newDiceArray = [ ...diceArray.slice(0, index), newDie, ...diceArray.slice((index + 1)) ];
    //   // for (let i = 0; i < newDiceArray.length; i++){
    //   //   console.log("new array item " + i +" :", newDiceArray[i]);
    //   // }
    //   // console.log("new array after save toggle:", newDiceArray);
    //   return Object.assign({}, state, {dice: newDiceArray})
    // },
  // }// [end] actionToNewState
  // if (actionToNewState[action.type]) return actionToNewState[action.type]();
  // return state;
// }
