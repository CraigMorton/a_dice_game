import {store} from "../exports.js";

const diceListeners = {
  onRollDiceClick: ()=>{
    let diceToRoll = 0
    store.getState().dice.diceArray.forEach((die)=>{
      if (!die.saved) diceToRoll++;
    })
    // for (let i = 0; i < diceToRoll; i++){
    // }
    store.dispatch({type: "ROLL_UNSAVED_DICE"});
    store.dispatch({type: "DECREMENT_ROLLS_REMAINING"});
    store.dispatch({type: "INCREMENT_DICE_ROLLED_COUNTER", count: diceToRoll});
    store.dispatch({type: "AUTO_SAVE_GRENADES"})
    store.dispatch({type: "THREE_GRENADES_DISABLE_ROLL"})
    store.dispatch({type: "UPDATE_ACTION_COUNTERS", diceValuesArray: store.getState().dice.diceArray.map((dieObject) => dieObject.value)});
    store.dispatch({type: "THREE_GRENADES_DAMAGE"});
    if (store.getState().currentPlayer.health <= 0){
      store.dispatch({type: "ROTATE_PLAYERS_FOR_NEXT_TURN"})
      store.dispatch({type: "REMOVE_DEAD_FROM_PLAYER_LIST"})
      store.dispatch({type: "RESET_DICE_FOR_NEXT_TURN"})
      store.dispatch({type: "INCREMENT_TURNS_PLAYED_COUNTER"})
    }
    
    for (let i = 0; i < store.getState().currentPlayer.actionCounters[6]; i++){
      store.dispatch({type: "REMOVE_SHARED_RESSOURCE_FROM_POOL"})
      store.dispatch({type: "GIVE_SHARED_RESOURCE_TO_PLAYER"});
      if (store.getState().sharedResource.count <= 0){
        store.dispatch({type: "PLAYER_LIST_TAKE_SHARED_RESOURCE_DAMAGE"});
        store.dispatch({type: "CURRENT_PLAYER_TAKE_SHARED_RESOURCE_DAMAGE"});
        store.dispatch({type: "RESET_SHARED_RESOURCE_POOL"});
        store.dispatch({type: "REMOVE_DEAD_FROM_PLAYER_LIST"});
        if (store.getState().currentPlayer.health <= 0){
          store.dispatch({type: "ROTATE_PLAYERS_FOR_NEXT_TURN"})
          store.dispatch({type: "REMOVE_DEAD_FROM_PLAYER_LIST"})
          store.dispatch({type: "RESET_DICE_FOR_NEXT_TURN"})
          store.dispatch({type: "INCREMENT_TURNS_PLAYED_COUNTER"})
        }
      }
    }
  },
  onDieClick: (e)=>{
    // console.log("event target element id:", e.target.id);
    const id = parseInt(e.target.id);
    store.dispatch({type: "TOGGLE_DIE_SAVE_STATUS", id: id});
  }
  // ,
  // onDieValueChange: (e) => {
  //   console.log("value clicked:", e.target.value);
  //   console.log("id clicked:", e.target.id);

  // }
}

export {diceListeners};
    // console.log("target:", e.target);
    // console.log("current target:", e.currentTarget);

    // console.log("param passed to onclick:", e);
    // console.log("2nd param passed to onclick:", e2);
    // console.log(e.target.id);