import store from "../../store.js"
import {fireMinigun} from "../../action_creators/currentPlayerActions.js";
import {takeMinigunDamage} from "../../action_creators/playerListActions.js";
import {lockDie} from "../../action_creators/currentPlayerActions.js";


const fireMinigunDispatcher = (minigunAvailable) => {
  if (minigunAvailable === 1){
    store.dispatch(fireMinigun(minigunAvailable));
    store.dispatch(takeMinigunDamage(minigunAvailable));
    const minigunDiceIndexes = [];
    const dice = store.getState().currentPlayer.dice.slice();
    for (let i = 0; i < dice.length; i++){
      if (dice[i].value === 4) minigunDiceIndexes.push(i);
    }
    for (let i = 0; i < 3; i++){
      store.dispatch(lockDie(minigunDiceIndexes[i]))
    }
  }


}

export default fireMinigunDispatcher;