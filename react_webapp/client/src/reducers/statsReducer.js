const statsReducer = (state = {}, action)=>{
  const mapActionStringToActionDispatchCall = {
    "INCREMENT_DICE_ROLLED_COUNTER": () => Object.assign({}, state, {diceRolledCount: (state.diceRolledCount + action.count)}),
    "INCREMENT_TURNS_PLAYED_COUNTER": () => Object.assign({}, state, {turnsPlayedCount: (state.turnsPlayedCount + 1)})
  }
  // if action type is on the reducer function map - this if will pass - and invoke the appropriate function, returning the return value of the appropriate function
  if (mapActionStringToActionDispatchCall[action.type]) return mapActionStringToActionDispatchCall[action.type]();
  // if action type is not on the reducer - the above if statement will fail - and this fallback return statement will run - returning the state as it was passed in, unchanged.
  return state;
}

export {statsReducer};
    // "@@INIT": () => state,
    // "ATTACH_LISTENERS": () => {
    //   return Object.assign({}, state, {listeners: action.listeners})
    // },
    // "DECREMENT_DICE_ROLLED_COUNTER": () => {
    //   return Object.assign({}, state, {diceRolledCount: state.diceRolledCount - 1})
    // }