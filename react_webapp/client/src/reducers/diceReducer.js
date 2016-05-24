const diceReducer = (state = {}, action)=>{

  const mapActionStringToActionDispatchCall = {
    // "@@INIT": () => state,
    "SAVE_DIE": () => {
      console.log("action object in reducer:", action);

      // assuming 2 is the index specified for testing purposes
      console.log(action.id);

      const dieArrayItem = state.diceArray[2];

      const newDieArrayItem = Object.assign({}, dieArrayItem, {saved: true});

      const diceArray = state.diceArray;

      const newDiceArraySLICED = diceArray.slice(0, 2).concat(diceArray.slice(2 + 1));

      const newDiceArray = [...diceArray.slice(0, 2), ...diceArray.slice(2 + 1)];

      return Object.assign({}, state, {diceArray: newDiceArray})
    }
    // },
    // "INCREMENT_DICE_ROLLED_COUNTER": () => {
    //   // es7 Object.assign replacement with terser sytax using spread operator ...
    //   // return { {}, state, ...{stats: {diceRolledCount: (state.stats.diceRolledCount + 1)}} }
    //   return Object.assign({}, state, {stats: {diceRolledCount: (state.diceRolledCount + 1)}})
    // },
    // "DECREMENT_DICE_ROLLED_COUNTER": () => {
    //   return Object.assign({}, state, {stats: {diceRolledCount: state.diceRolledCount - 1}})
    // }
  }
  // if action type is on the reducer function map - this if will pass - and invoke the appropriate function, returning the return value of the appropriate function
  if (mapActionStringToActionDispatchCall[action.type]) return mapActionStringToActionDispatchCall[action.type]();
  // if action type is not on the reducer - the above if statement will fail - and this fallback return statement will run - returning the state as it was passed in, unchanged.
  return state;
}

export {diceReducer};