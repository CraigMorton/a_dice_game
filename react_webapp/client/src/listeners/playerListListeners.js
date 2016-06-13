import store from "../store.js";
import targetPlayerDispatcher from "../action_dispatchers/player_list_dispatchers/targetPlayerDispatcher.js";
import shootTargetDispatcher from "../action_dispatchers/player_list_dispatchers/shootTargetDispatcher.js";


const playerListListeners = {
  onTargetSelect: (e)=>{
    const id = parseInt(e.target.id);
    targetPlayerDispatcher(id);
  },
  onShootTarget: (e) => {
    const targetId = parseInt(e.target.parentNode.id);
    const dieValueForAction = parseInt(e.target.id);
    shootTargetDispatcher(targetId, dieValueForAction);
  }
}

export default playerListListeners;