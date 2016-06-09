import {store} from "../exports.js";
import {rollDiceDispatcher} from "../exports.js"; 

export default {
  onRollDiceClick: ()=>{


    // const state = store.getState().currentPlayer;
    // let diceToRoll = 0
    // store.getState().currentPlayer.dice.forEach((die)=>{
    //   if (!die.saved) diceToRoll++;
    // })
    // for (let i = 0; i < diceToRoll; i++){
    // }
    // //////////////////////////////////////////////////
    // EXTRACT TO DISPATCHER
    // EXTRACT FROM DISPATCHER TO ACTION CREATOR
    // //////////////////////////////////////////////////

    // //////////////////////////////////////////////////
    // store.dispatch({type: "ROLL_UNSAVED_DICE"});
    // store.dispatch({type: "DECREMENT_ROLLS_REMAINING"});
    // store.dispatch({type: "INCREMENT_DICE_ROLLED_COUNTER", count: diceToRoll});
    
    // store.dispatch({type: "AUTO_SAVE_GRENADES"});

    rollDiceDispatcher();

    // //////////////////////////////////////////////////// //////////////////////////////////////////////////

    store.dispatch({type: "THREE_GRENADES_DISABLE_ROLL"})
    store.dispatch({type: "UPDATE_ACTION_COUNTERS", diceValuesArray: store.getState().currentPlayer.dice.map((dieObject) => dieObject.value)});
    store.dispatch({type: "THREE_GRENADES_DAMAGE"});
    if (store.getState().playerList[0].health <= 0){
      store.dispatch({type: "ROTATE_PLAYERS_FOR_NEXT_TURN"})
      store.dispatch({type: "REMOVE_DEAD_FROM_PLAYER_LIST"})
      store.dispatch({type: "RESET_DICE_FOR_NEXT_TURN"})
      store.dispatch({type: "INCREMENT_TURNS_PLAYED_COUNTER"})
    }
    
    for (let i = 0; i < store.getState().currentPlayer.actionCounters[6]; i++){
      store.dispatch({type: "REMOVE_SHARED_RESSOURCE_FROM_POOL"})
      store.dispatch({type: "GIVE_SHARED_RESOURCE_TO_ACTIVE_PLAYER"});
      if (store.getState().currentPlayer.sharedResource <= 0){
        store.dispatch({type: "DEAL_SHARED_RESOURCE_DAMAGE"});
        store.dispatch({type: "RESET_SHARED_RESOURCE_POOL"});
        store.dispatch({type: "REMOVE_DEAD_FROM_PLAYER_LIST"});
        if (store.getState().playerList[0].health <= 0){
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
  },
  onEndTurnClick: (e)=>{
    // dom element that triggered this event (for grabbing id etc.):
    store.dispatch({type: "ROTATE_PLAYERS_FOR_NEXT_TURN"});
    store.dispatch({type: "RESET_CURRENT_PLAYER_FOR_NEXT_TURN"});
    store.dispatch({type: "INCREMENT_TURNS_PLAYED_COUNTER"});
  }
}