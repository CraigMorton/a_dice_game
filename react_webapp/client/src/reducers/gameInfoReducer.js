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
  if (mapActionStringToActionDispatchCall[action.type]) return mapActionStringToActionDispatchCall[action.type]();
  return state;
}
export default gameInfoReducer;