import store from "../../store.js"
import {giveSharedResourceToActivePlayer} from "../../action_creators/playerListActions.js";
import {removeSharedResourceFromPool} from "../../action_creators/gameInfoActions.js";

import sharedResourcePoolEmptyDispatcher from "./sharedResourcePoolEmptyDispatcher.js";


const giveSharedResourceDispatcher = (count = 1) => {
  for (let i = 0; i < count; i++){
    store.dispatch(giveSharedResourceToActivePlayer());
    store.dispatch(removeSharedResourceFromPool());
    let sharedResourceTotal = store.getState().gameInfo.sharedResource.count;
    if (sharedResourceTotal <= 0) {
      sharedResourcePoolEmptyDispatcher(sharedResourceTotal);
    }

    let dead = (store.getState().playerList[0].health <= 0);
    if (dead) nextTurnDispatcher();
  }

}

export default giveSharedResourceDispatcher;