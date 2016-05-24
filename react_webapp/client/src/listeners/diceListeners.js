import {store} from "../exports.js";

const diceListeners = {
  onRollDiceClick: ()=>{
        store.dispatch({type: "INCREMENT_DICE_ROLLED_COUNTER"})
  }
}

export {diceListeners};