import {store} from "../../exports.js"
import {rollDiceAction, incrementDiceRolledAction, decrementRollsRemainingAction} from "../../exports.js";

const rollDiceDispatcher = () => {
  const state = store.getState().currentPlayer;
  let numDiceToRoll = 0;
  let savedDiceIds = [];
  for (let i = 0; i < state.dice.length; i++){
    const saved = state.dice[i].saved;
    if (saved){
      savedDiceIds.push(i)
    } else {
      numDiceToRoll++;
    }
  }
  // store.dispatch(moveSavedDiceToArrayStartAction(savedDiceIds))
  store.dispatch(rollDiceAction(savedDiceIds))
  store.dispatch(incrementDiceRolledAction(numDiceToRoll))
  store.dispatch(decrementRollsRemainingAction())

  const dead = (store.getState().playerList[0].health <= 0);
  if (dead){
    // store.dispatch()
  }

}


export default rollDiceDispatcher