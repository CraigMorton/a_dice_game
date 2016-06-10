import {store} from "../../exports.js";
import {incrementTurnsPlayedCounter} from "../../action_creators/gameInfoActions.js";
import {resetCurrentPlayer} from "../../action_creators/currentPlayerActions.js";
import {rotatePlayerList} from "../../action_creators/playerListActions.js";

const nextTurnDispatcher = () => {
  store.dispatch(resetCurrentPlayer())
  store.dispatch(rotatePlayerList());
  store.dispatch(incrementTurnsPlayedCounter())
}


export default nextTurnDispatcher;