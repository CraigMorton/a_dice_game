import store from "../store.js";
import targetPlayerDispatcher from "../action_dispatchers/player_list_dispatchers/targetPlayerDispatcher.js";
import activateActionOnTargetDispatcher from "../action_dispatchers/player_list_dispatchers/activateActionOnTargetDispatcher.js";


const playerListListeners = {
  onTargetSelect: (e)=>{
    const id = parseInt(e.target.id);
    targetPlayerDispatcher(id);
  },
  onActivateActionOnTarget: (e) => {
    const targetId = parseInt(e.target.parentNode.id);
    const dieValueForAction = parseInt(e.target.id);
    activateActionOnTargetDispatcher(targetId, dieValueForAction);
  }
}

export default playerListListeners;