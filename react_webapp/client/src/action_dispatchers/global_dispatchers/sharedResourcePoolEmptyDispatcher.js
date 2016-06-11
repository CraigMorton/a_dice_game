import store from "../../store.js"
import {dealSharedResourceDamage, setDeadStatusOfPlayerList} from "../../action_creators/playerListActions.js";
import {resetSharedResourcePool} from "../../action_creators/gameInfoActions.js";
import nextTurnDispatcher from "./nextTurnDispatcher.js";
const sharedResourcePoolEmptyDispatcher = (sharedResourceTotal = 0) => {
  if (sharedResourceTotal <= 0) {
    store.dispatch(dealSharedResourceDamage());
    store.dispatch(resetSharedResourcePool());
    store.dispatch(setDeadStatusOfPlayerList());
  }
  let dead = (store.getState().playerList[0].health <= 0);
  if (dead) nextTurnDispatcher();
}

export default sharedResourcePoolEmptyDispatcher;