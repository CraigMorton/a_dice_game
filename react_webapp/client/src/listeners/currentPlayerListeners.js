import {store} from "../exports.js";

const currentPlayerListeners = {
  onEndTurnClick: (e)=>{
    // dom element that triggered this event (for grabbing id etc.):
    store.dispatch({type: "ROTATE_PLAYERS_FOR_NEXT_TURN"});
    store.dispatch({type: "RESET_DICE_FOR_NEXT_TURN"});
    store.dispatch({type: "INCREMENT_TURNS_PLAYED_COUNTER"});
  }
}

export {currentPlayerListeners};