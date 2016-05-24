const diceReducer = (state = {}, action)=>{
  const mapActionStringToActionDispatchCall = {
    // "@@INIT": () => state,
    // "ATTACH_LISTENERS": () => {
    //   return Object.assign({}, state, {listeners: action.listeners})
    // // },
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