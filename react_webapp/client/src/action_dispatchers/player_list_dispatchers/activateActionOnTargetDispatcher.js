import store from "../../store.js"
import {shootTargettedPlayer} from "../../action_creators/playerListActions.js";
import {healTargettedPlayer} from "../../action_creators/playerListActions.js";
import {decrementActionCounter} from "../../action_creators/currentPlayerActions.js";
import {lockDie} from "../../action_creators/currentPlayerActions.js";

const activateActionOnTargetDispatcher = (playerId, counterToDecrement) => {
  if (counterToDecrement === 1 || counterToDecrement === 2) store.dispatch(shootTargettedPlayer(playerId))
  if (counterToDecrement === 3) store.dispatch(healTargettedPlayer(playerId))
  store.dispatch(decrementActionCounter(counterToDecrement))
  const dice = store.getState().currentPlayer.dice;
  let dieId = null;
  for (let i = 0; i < dice.length; i++){
    if (dice[i].value === counterToDecrement && !dice[i].locked) dieId = i;
  }
  store.dispatch(lockDie(dieId));
}

export default activateActionOnTargetDispatcher;