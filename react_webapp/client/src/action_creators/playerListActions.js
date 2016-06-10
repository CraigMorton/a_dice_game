const threeGrenadesDamage = (grenadeCount) => {
  if (grenadeCount >= 3) return {type: "THREE_GRENADES_DAMAGE", grenadeCount: grenadeCount}
}
export {threeGrenadesDamage};

const rotatePlayerList = (numRotations = 1) => ({type: "ROTATE_PLAYER_LIST", numRotations: numRotations})
export {rotatePlayerList};

const removeDeadFromPlayerList = () => ({type: "REMOVE_DEAD_FROM_PLAYER_LIST"})
export {removeDeadFromPlayerList};

