import store from "../../store.js"
import {shootTargettedPlayer} from "../../action_creators/playerListActions.js";
import {decrementActionCounter} from "../../action_creators/currentPlayerActions.js";

const shootTargetDispatcher = (playerId, counterToDecrement) => {
  store.dispatch(shootTargettedPlayer(playerId))
  store.dispatch(decrementActionCounter(counterToDecrement))
}

export default shootTargetDispatcher;