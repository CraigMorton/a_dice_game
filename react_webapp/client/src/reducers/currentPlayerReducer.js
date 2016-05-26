const currentPlayerReducer = (state = {}, action)=>{
  const mapActionStringToActionDispatchCall = {
    "UPDATE_ACTION_COUNTERS": () => {
      let newActionCounters = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0}
      action.diceValuesArray.forEach((item, index)=>{
        newActionCounters[item]++
      });
      return Object.assign({}, state, {actionCounters: newActionCounters})
    },
    "THREE_GRENADES_DAMAGE": () => {
      if (state.actionCounters[5] >= 3){
        return Object.assign({}, state, {health: state.health - 1})
      }
      return state;
    },
    "GIVE_SHARED_RESOURCE_TO_PLAYER": () => {
        return Object.assign({}, state, {sharedResource: state.sharedResource + 1})
    },
    "CURRENT_PLAYER_TAKE_SHARED_RESOURCE_DAMAGE": () => {
      if (state.sharedResource > 0) return Object.assign({}, state, {sharedResource: 0, health: (state.health - state.sharedResource)});
      return state;
    }
  }

  if (mapActionStringToActionDispatchCall[action.type]) return mapActionStringToActionDispatchCall[action.type]();
  return state;
}

export {currentPlayerReducer};