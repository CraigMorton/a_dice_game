const incrementDiceRolledCounter = (count) => ({type: "INCREMENT_DICE_ROLLED_COUNTER", count: count})
export {incrementDiceRolledCounter};

const incrementTurnsPlayedCounter = (count = 1) => ({type: "INCREMENT_TURNS_PLAYED_COUNTER", count: count})
export {incrementTurnsPlayedCounter};

