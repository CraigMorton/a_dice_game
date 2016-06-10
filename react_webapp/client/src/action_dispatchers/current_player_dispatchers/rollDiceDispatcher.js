import {store} from "../../exports.js"
import {rollDiceAction, incrementDiceRolledAction, decrementRollsRemainingAction, autoSaveGrenadesAction, threeGrenadesDisableRollAction, updateActionCountersAction, rollUnsavedDiceAction, threeGrenadesDamageAction} from "../../exports.js";

const rollDiceDispatcher = () => {
  const state = store.getState().currentPlayer;
  let numDiceToRoll = 0;
  // let savedDiceIds = [];
  for (let i = 0; i < state.dice.length; i++){
    const saved = state.dice[i].saved;
    // if (saved) savedDiceIds.push(i)
    if (!saved) numDiceToRoll++;
  }
  // store.dispatch(moveSavedDiceToArrayStartAction(savedDiceIds))
  // store.dispatch(rollDiceAction(savedDiceIds))
  store.dispatch(rollUnsavedDiceAction());
  store.dispatch(incrementDiceRolledAction(numDiceToRoll));
  store.dispatch(decrementRollsRemainingAction());
  store.dispatch(updateActionCountersAction());
  store.dispatch(autoSaveGrenadesAction());

  let grenadeCount = 0;
  state.dice.forEach((die) => {
    if (die.value === 5) grenadeCount++
  })
  if (grenadeCount >= 3){
    store.dispatch(threeGrenadesDisableRollAction(grenadeCount))
    store.dispatch(threeGrenadesDamageAction(grenadeCount));
  }


  const dead = (store.getState().playerList[0].health <= 0);
  if (dead){
    // store.dispatch()
  }

}


export default rollDiceDispatcher;