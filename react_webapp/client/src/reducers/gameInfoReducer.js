// import defaultStateObject from "../defaultState.js";
// const defaultState = defaultStateObject.gameInfo;
import defaultStateGetter from "../defaultState.js";
const defaultState = defaultStateGetter().gameInfo;

const gameInfoReducer = (state = defaultState, action) => {
  const mapActionStringToActionDispatchCall = {
    "REFRESH_GAME_INFO_DEFAULT_STATE": () => {
      const refreshedState = defaultStateGetter().gameInfo;
      return Object.assign({}, state, refreshedState)
    },
    "INCREMENT_DICE_ROLLED_COUNTER": () => ({ ...state, diceRolledCount: state.diceRolledCount + action.count }),
    "INCREMENT_TURNS_PLAYED_COUNTER": () => ({...state, turnsPlayedCount: state.turnsPlayedCount + action.count }),
    "REMOVE_SHARED_RESOURCE_FROM_POOL": () => ({...state, sharedResource: {count: state.sharedResource.count - 1, max: state.sharedResource.max} }),
    "RESET_SHARED_RESOURCE_POOL": () => ({...state, sharedResource: {count: state.sharedResource.max, max: state.sharedResource.max} })
  }
  // if action type is on the reducer function map - this if will pass - and invoke the appropriate function, returning the return value of the appropriate function
  if (mapActionStringToActionDispatchCall[action.type]) return mapActionStringToActionDispatchCall[action.type]();
  // if action type is not on the reducer - the above if statement will fail - and this fallback return statement will run - returning the state as it was passed in, unchanged.
  return state;
}
export default gameInfoReducer;