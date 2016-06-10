const threeGrenadesDamageAction = (grenadeCount) => {
  if (grenadeCount >= 3) return {type: "THREE_GRENADES_DAMAGE", grenadeCount: grenadeCount}
}

export default threeGrenadesDamageAction;