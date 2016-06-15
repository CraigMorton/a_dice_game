import store from "../../store.js"
import {shootTargettedPlayer} from "../../action_creators/playerListActions.js";
import {healTargettedPlayer} from "../../action_creators/playerListActions.js";
import {decrementActionCounter} from "../../action_creators/currentPlayerActions.js";

const activateActionOnTargetDispatcher = (playerId, counterToDecrement) => {
  if (counterToDecrement === 1 || counterToDecrement === 2) store.dispatch(shootTargettedPlayer(playerId))
  if (counterToDecrement === 3) store.dispatch(healTargettedPlayer(playerId))
  store.dispatch(decrementActionCounter(counterToDecrement))
}

export default activateActionOnTargetDispatcher;