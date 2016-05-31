const playerListReducer = (state = {}, action)=>{
  const mapActionStringToActionDispatchCall = {
    "PLAYER_LIST_TAKE_SHARED_RESOURCE_DAMAGE": () => {
      const updatedHealthPlayerList = state.map((item, index) => {
        if (item.sharedResource > 0) return Object.assign({}, item, {sharedResource: 0, health: (item.health - item.sharedResource)})
        return item;
      })
      console.log("player list take arrow damage: list: ", updatedHealthPlayerList);
      return Object.assign([], state, updatedHealthPlayerList);
    },
    "REMOVE_DEAD_FROM_PLAYER_LIST": () => {
      let deadPlayerIndexes = []
      // console.log(state);
      // for (let i = 0; i < state.length; i++){
      //   console.log(state[i].health);
      //   if (state[i].health <= 0) deadPlayerIndexes.push(i);
      // }
      state.forEach((item, index) => {
        // console.log("removing dead players from playerList", item);
        if (item.health <= 0) deadPlayerIndexes.push(index);
        // console.log(deadPlayerIndexes);
      })
      if (deadPlayerIndexes.length <= 0) return state;
      let updatedPlayerList = state.slice();
      // console.log(updatedPlayerList);
      deadPlayerIndexes.forEach((item) => {
        updatedPlayerList = [ ...updatedPlayerList.slice(0, item), ...updatedPlayerList.slice(item + 1) ];
      })
      // console.log(updatedPlayerList);
      // If I enter state as the 2nd argument to Object.assign here, the dead player is not removed as they are still in state
      return Object.assign([], updatedPlayerList);
    }

  }

  if (mapActionStringToActionDispatchCall[action.type]) return mapActionStringToActionDispatchCall[action.type]();
  return state;
}

export {playerListReducer};