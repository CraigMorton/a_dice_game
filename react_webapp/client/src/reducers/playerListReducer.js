// import defaultStateObject from "../defaultState.js";
// const defaultState = defaultStateObject.playerList;
import defaultStateGetter from "../defaultState.js";
const defaultState = defaultStateGetter().playerList;
// const defaultState = [{player_id: 0, health: 8, maxHealth: 8, sharedResource: 0}, {player_id: 1, health: 8, maxHealth: 8, sharedResource: 0}, {player_id: 2, health: 8, maxHealth: 8, sharedResource: 0}, {player_id: 3, health: 8, maxHealth: 8, sharedResource: 0}, {player_id: 4, health: 8, maxHealth: 8, sharedResource: 0}, {player_id: 5, health: 8, maxHealth: 8, sharedResource: 0}, {player_id: 6, health: 8, maxHealth: 8, sharedResource: 0}, {player_id: 7, health: 8, maxHealth: 8, sharedResource: 0}]

const playerListReducer = (state = defaultState, action)=>{
  const mapActionStringToActionDispatchCall = {
    "REFRESH_PLAYER_LIST_DEFAULT_STATE": () => {
      const refreshedState = defaultStateGetter().playerList;
      return refreshedState
    },
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
      return [ Object.assign({}, state[0], {sharedResource: state[0].sharedResource + 1}), ...state.slice(1)]
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
    "SET_DEAD_STATUS_OF_PLAYER_LIST": () => {
      const newPlayerList = state.map((player) => {
        if (player.health <= 0) return {...player, isDead: true};
        return player
      })
      return newPlayerList;
    },
    "SHOOT_TARGETTED_PLAYER": () => {
      const targetId = action.playerId;
      let targetIndex = null;
      for (let i = 0; i < state.length; i++){
        if (state[i].player_id === targetId) targetIndex = i;
      }
      return [...state.slice(0, targetIndex), {...state[targetIndex], health: (state[targetIndex].health - 1) }, ...state.slice(targetIndex + 1) ]
    },
    "HEAL_TARGETTED_PLAYER": () => {
      const targetId = action.playerId;
      let targetIndex = null;
      for (let i = 0; i < state.length; i++){
        if (state[i].player_id === targetId) targetIndex = i;
      }
      if (state[targetIndex].health >= state[targetIndex].maxHealth){
        return [...state.slice(0, targetIndex), {...state[targetIndex], health: (state[targetIndex].maxHealth) }, ...state.slice(targetIndex + 1) ]
      }
      return [...state.slice(0, targetIndex), {...state[targetIndex], health: (state[targetIndex].health + 1) }, ...state.slice(targetIndex + 1) ]
    },
    "TAKE_MINIGUN_DAMAGE": () => {
      if (action.minigunAvailable === 1){
        const damagedPlayers = state.map((player, index) => {
          if (index === 0) return player;
          return {...player, health: player.health - 1};
        })
        return damagedPlayers
      }
      return state;
    }
    // "REMOVE_DEAD_FROM_PLAYER_LIST": () => {
    //   let deadPlayerIndexes = []
    //   state.forEach((item, index) => {
    //     if (item.health <= 0) deadPlayerIndexes.push(index);
    //   })
    //   if (deadPlayerIndexes.length <= 0) return state;
    //   let updatedPlayerList = state.slice();
    //   deadPlayerIndexes.forEach((deadPlayerIndex) => {
    //     updatedPlayerList = [ ...updatedPlayerList.slice(0, deadPlayerIndex), ...updatedPlayerList.slice(deadPlayerIndex + 1) ];
    //   })
    //   return updatedPlayerList;
    // }
  }
  if (mapActionStringToActionDispatchCall[action.type]) return mapActionStringToActionDispatchCall[action.type]();
  return state;
}

export default playerListReducer;