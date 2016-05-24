import {store} from "../exports.js";

const diceListeners = {
  onRollDiceClick: ()=>{
        store.dispatch({type: "INCREMENT_DICE_ROLLED_COUNTER"})
  },
  onDieClick: (e)=>{
    // console.log("target:", e.target);
    // console.log("current target:", e.currentTarget);

    // console.log("param passed to onclick:", e);
    // console.log("2nd param passed to onclick:", e2);

    console.log(e.target.id);

    store.dispatch({type:"SAVE_DIE", id: e.target.id})
  }
}

export {diceListeners};