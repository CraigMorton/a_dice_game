const autoSaveGrenades = () => {
  const grenadeValue = 5;
  return {type: "AUTO_SAVE_GRENADES", value: grenadeValue}
}
export {autoSaveGrenades};

const decrementRollsRemaining = () => ({type: "DECREMENT_ROLLS_REMAINING"})
export {decrementRollsRemaining};

const rollUnsavedDice = () => ({type: "ROLL_UNSAVED_DICE"})
export {rollUnsavedDice};

const threeGrenadesDisableRoll = (grenadeCount) => {
  if (grenadeCount >= 3) return {type: "THREE_GRENADES_DISABLE_ROLL", grenadeCount: grenadeCount}
}
export {threeGrenadesDisableRoll};

const toggleDieSaveStatus = (id) => ({type: "TOGGLE_DIE_SAVE_STATUS", id: id})
export {toggleDieSaveStatus};

const updateActionCounters = () => ({type: "UPDATE_ACTION_COUNTERS"})
export {updateActionCounters};

const resetCurrentPlayer = () => ({type: "RESET_CURRENT_PLAYER"})
export {resetCurrentPlayer};

// //////////////////////////////////////////////////
// OLD ACTIONS - NOT IN USE
// //////////////////////////////////////////////////

const rollDice = (savedDiceIds) => {
  return {type: "ROLL_DICE", savedDiceIds: savedDiceIds}
}
export {rollDice};

const moveSavedDiceToArrayStart = (savedDiceIds) => {
  return {type: "MOVE_SAVED_DICE_TO_ARRAY_START", savedDiceIds: savedDiceIds}
}
export {moveSavedDiceToArrayStart};

const refreshCurrentPlayerDefaultState = () => ({type: "REFRESH_CURRENT_PLAYER_DEFAULT_STATE"})
export {refreshCurrentPlayerDefaultState};

