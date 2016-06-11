import store from "../store.js";

const playerListListeners = {
  onTargetSelect: (e)=>{
    const id = parseInt(e.target.id)
    console.log(id);
    // targetPlayerDispatcher(id);
  }
}

export default playerListListeners;