import store from "../store.js";

const playerListListeners = {
  onTargetSelect: (e)=>{
    const id = parseInt(e.target.id)
    // targetPlayerDispatcher(id);
  }
}

export default playerListListeners;