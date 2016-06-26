import store from "../../store.js"
import {rollDice, decrementRollsRemaining, autoSaveGrenades, threeGrenadesDisableRoll, updateActionCounters, rollUnsavedDice} from "../../action_creators/currentPlayerActions.js";
import {incrementDiceRolledCounter} from "../../action_creators/gameInfoActions.js";
import {threeGrenadesDamage} from "../../action_creators/playerListActions.js";

import nextTurnDispatcher from "../global_dispatchers/nextTurnDispatcher.js";
import giveSharedResourceDispatcher from "../global_dispatchers/giveSharedResourceDispatcher.js"

const rollDiceDispatcher = () => {
  let dice = store.getState().currentPlayer.dice;
  let numDiceToRoll = 0;
  for (let i = 0; i < dice.length; i++){
    const saved = dice[i].saved;
    if (!saved) numDiceToRoll++;
  }
  store.dispatch(rollUnsavedDice());
  store.dispatch(incrementDiceRolledCounter(numDiceToRoll));
  store.dispatch(decrementRollsRemaining());
  store.dispatch(updateActionCounters());
  store.dispatch(autoSaveGrenades());

  dice = store.getState().currentPlayer.dice
  let grenadeCount = 0;
  dice.forEach((die) => {
    if (die.value === 5) grenadeCount++
  })
  if (grenadeCount >= 3){
    store.dispatch(threeGrenadesDisableRoll(grenadeCount))
    store.dispatch(threeGrenadesDamage(grenadeCount));
  }

  let dead = (store.getState().playerList[0].health <= 0);
  if (dead) nextTurnDispatcher();

  dice = store.getState().currentPlayer.dice
  let sharedResourceCount = 0;
  dice.forEach((die) => {
    if (die.value === 6) sharedResourceCount++
  })
  giveSharedResourceDispatcher(sharedResourceCount);
}


export default rollDiceDispatcher;