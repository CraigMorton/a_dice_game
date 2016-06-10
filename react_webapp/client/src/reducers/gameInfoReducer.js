const defaultState = {
  sharedResource: {count: 9, max: 9},
  gameWinner: null,
  diceRolledCount: 0,
  turnsPlayedCount: 0
}

const gameInfoReducer = (state = defaultState, action) => {
  const mapActionStringToActionDispatchCall = {
    "INCREMENT_DICE_ROLLED_COUNTER": () => ({ ...state, diceRolledCount: state.diceRolledCount + action.count }),
    "INCREMENT_TURNS_PLAYED_COUNTER": () => ({...state, turnsPlayedCount: state.turnsPlayedCount + action.count }),
    "REMOVE_SHARED_RESSOURCE_FROM_POOL": () => ({...state, count: state.sharedResource.count - 1 }),
    "RESET_SHARED_RESOURCE_POOL": () => ({...state, count: state.sharedResource.max })
  }
  // if action type is on the reducer function map - this if will pass - and invoke the appropriate function, returning the return value of the appropriate function
  if (mapActionStringToActionDispatchCall[action.type]) return mapActionStringToActionDispatchCall[action.type]();
  // if action type is not on the reducer - the above if statement will fail - and this fallback return statement will run - returning the state as it was passed in, unchanged.
  return state;
}
export default gameInfoReducer;