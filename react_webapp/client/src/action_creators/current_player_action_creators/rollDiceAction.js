const rollDiceAction = (savedDiceIds) => {
  return {type: "ROLL_DICE", savedDiceIds: savedDiceIds}
}

export default rollDiceAction;