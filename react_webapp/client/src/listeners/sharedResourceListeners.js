import {store} from "../exports.js";

const sharedResourceListeners = {
  onDomEvent: (e)=>{
    // dom element that triggered this event (for grabbing id etc.):
    e.target
    console.log(e.target);
    // or e.currentTarget
    store.dispatch({type: "ACTION_NAME-ABC"})
  }
}

export {sharedResourceListeners};