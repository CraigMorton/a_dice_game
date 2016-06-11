import store from "../store.js";
import targetPlayerDispatcher from "../action_dispatchers/player_list_dispatchers/targetPlayerDispatcher.js";

const playerListListeners = {
  onTargetSelect: (e)=>{
    const id = parseInt(e.target.id)
    targetPlayerDispatcher(id);
  }
}

export default playerListListeners;