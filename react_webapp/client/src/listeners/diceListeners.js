import {store} from "../exports.js";

const diceListeners = {
  onRollDiceClick: ()=>{
    let diceToRoll = 0
    store.getState().dice.diceArray.forEach((die)=>{
      if (!die.saved) diceToRoll++;
    })
      store.dispatch({type: "ROLL_UNSAVED_DICE"})
      store.dispatch({type: "DECREMENT_ROLLS_REMAINING"})
      store.dispatch({type: "INCREMENT_DICE_ROLLED_COUNTER", count: diceToRoll})

  },
  onDieClick: (e)=>{
    console.log("event target element id:", e.target.id);
    const id = parseInt(e.target.id);
    store.dispatch({type:"TOGGLE_DIE_SAVE_STATUS", id: id})
  }
}

export {diceListeners};
    // console.log("target:", e.target);
    // console.log("current target:", e.currentTarget);

    // console.log("param passed to onclick:", e);
    // console.log("2nd param passed to onclick:", e2);
    // console.log(e.target.id);