import rollDiceDispatcher from "../action_dispatchers/current_player_dispatchers/rollDiceDispatcher.js";
import saveDieDispatcher from "../action_dispatchers/current_player_dispatchers/saveDieDispatcher.js";
import nextTurnDispatcher from "../action_dispatchers/global_dispatchers/nextTurnDispatcher.js";
import fireMinigunDispatcher from "../action_dispatchers/current_player_dispatchers/fireMinigunDispatcher.js";

export default {
  onRollDiceClick: (e)=>{
    rollDiceDispatcher();
  },
  onDieClick: (e)=>{
    const id = parseInt(e.target.id);
    saveDieDispatcher(id)
  },
  onEndTurnClick: (e)=>{
    nextTurnDispatcher();
  },
  onFireMinigunClick: (e) => {
    const minigunAvailable = parseInt(e.target.id);
    if (minigunAvailable === 1) fireMinigunDispatcher(minigunAvailable);
  }
}