// import store from "../store.js";
import rollDiceDispatcher from "../action_dispatchers/current_player_dispatchers/rollDiceDispatcher.js";
import saveDieDispatcher from "../action_dispatchers/current_player_dispatchers/saveDieDispatcher.js";
import nextTurnDispatcher from "../action_dispatchers/global_dispatchers/nextTurnDispatcher.js";

export default {
  onRollDiceClick: (e)=>{
    rollDiceDispatcher();
    
    // if (store.getState().playerList[0].health <= 0){
    //   nextTurnDispatcher()
    // }
    // rollDiceDispatcher calls nextTurnDispatcher if appropriate

    // for (let i = 0; i < store.getState().currentPlayer.actionCounters[6]; i++){
    //   store.dispatch({type: "REMOVE_SHARED_RESSOURCE_FROM_POOL"})
    //   store.dispatch({type: "GIVE_SHARED_RESOURCE_TO_ACTIVE_PLAYER"});
    //   if (store.getState().currentPlayer.sharedResource <= 0){
    //     store.dispatch({type: "DEAL_SHARED_RESOURCE_DAMAGE"});
    //     store.dispatch({type: "RESET_SHARED_RESOURCE_POOL"});
    //     store.dispatch({type: "REMOVE_DEAD_FROM_PLAYER_LIST"});
    //     if (store.getState().playerList[0].health <= 0){
    //       store.dispatch({type: "ROTATE_PLAYERS_FOR_NEXT_TURN"})
    //       store.dispatch({type: "REMOVE_DEAD_FROM_PLAYER_LIST"})
    //       store.dispatch({type: "RESET_DICE_FOR_NEXT_TURN"})
    //       store.dispatch({type: "INCREMENT_TURNS_PLAYED_COUNTER"})
    //     }
    //   }
    // }
  },
  onDieClick: (e)=>{
    const id = parseInt(e.target.id);
    saveDieDispatcher(id)
  },
  onEndTurnClick: (e)=>{
    nextTurnDispatcher();
  }
}