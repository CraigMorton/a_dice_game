import store from "../../store.js"
import {fireMinigun} from "../../action_creators/currentPlayerActions.js";
import {takeMinigunDamage} from "../../action_creators/playerListActions.js";


const fireMinigunDispatcher = (minigunAvailable) => {
  if (minigunAvailable === 1){
    store.dispatch(fireMinigun(minigunAvailable));
    store.dispatch(takeMinigunDamage(minigunAvailable));
  }


}

export default fireMinigunDispatcher;