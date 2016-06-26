const incrementDiceRolledCounter = (count) => ({type: "INCREMENT_DICE_ROLLED_COUNTER", count: count})
export {incrementDiceRolledCounter};

const incrementTurnsPlayedCounter = (count = 1) => ({type: "INCREMENT_TURNS_PLAYED_COUNTER", count: count})
export {incrementTurnsPlayedCounter};

const removeSharedResourceFromPool = (count = 1) => ({type: "REMOVE_SHARED_RESOURCE_FROM_POOL", count})
export {removeSharedResourceFromPool};

const resetSharedResourcePool = () => ({type: "RESET_SHARED_RESOURCE_POOL"})
export {resetSharedResourcePool};

const refreshGameInfoDefaultState = () => ({type: "REFRESH_GAME_INFO_DEFAULT_STATE"})
export {refreshGameInfoDefaultState};


