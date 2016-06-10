import store from "../../store.js"
import {dealSharedResourceDamage, removeDeadFromPlayerList} from "../../action_creators/playerListActions.js";
import {resetSharedResourcePool} from "../../action_creators/gameInfoActions.js";

const sharedResourcePoolEmptyDispatcher = (sharedResourceTotal = 0) => {
  if (sharedResourceTotal <= 0) {
    store.dispatch(dealSharedResourceDamage());
    store.dispatch(resetSharedResourcePool());
    store.dispatch(removeDeadFromPlayerList());
  }

  let dead = (store.getState().playerList[0].health <= 0);
  if (dead) nextTurnDispatcher();
}

export default sharedResourcePoolEmptyDispatcher;