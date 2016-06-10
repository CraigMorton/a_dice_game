const defaultState = [{player_id: 0, health: 8, maxHealth: 8, sharedResource: 0}, {player_id: 1, health: 8, maxHealth: 8, sharedResource: 0}, {player_id: 2, health: 8, maxHealth: 8, sharedResource: 0}, {player_id: 3, health: 8, maxHealth: 8, sharedResource: 0}, {player_id: 4, health: 8, maxHealth: 8, sharedResource: 0}, {player_id: 5, health: 8, maxHealth: 8, sharedResource: 0}, {player_id: 6, health: 8, maxHealth: 8, sharedResource: 0}, {player_id: 7, health: 8, maxHealth: 8, sharedResource: 0}]

const playerListReducer = (state = defaultState, action)=>{
  const mapActionStringToActionDispatchCall = {
    "THREE_GRENADES_DAMAGE": () => {
      if (action.grenadeCount >= 3) return [{...state[0], health: state[0].health - 1}, ...state.slice(1)]
      return state;
    },
    "ROTATE_PLAYER_LIST": () => {
      if (action.numRotations < 0) throw new Error("Number of times to rotate player list cannot be negative")
      if (action.numRotations === 0) return state;
      let newPlayerList = state.slice()
      for (let i = 0; i < action.numRotations; i++){
        newPlayerList.push(newPlayerList.shift())
      }
      return newPlayerList;
    },
    "GIVE_SHARED_RESOURCE_TO_ACTIVE_PLAYER": () => {
      return [{...state[0], sharedResource: state[0].sharedResource + 1}, ...state.slice(1)]
    },
    "DEAL_SHARED_RESOURCE_DAMAGE": () => {
      const updatedHealthPlayerList = state.map((player) => {
        if (player.sharedResource > 0) return {...player, sharedResource: 0, health: player.health - player.sharedResource}
        return player;
      })
      // console.log("player list take arrow damage: list: ", updatedHealthPlayerList);
      return updatedHealthPlayerList;
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
      return updatedPlayerList;
    }

  }

  if (mapActionStringToActionDispatchCall[action.type]) return mapActionStringToActionDispatchCall[action.type]();
  return state;
}

export default playerListReducer;