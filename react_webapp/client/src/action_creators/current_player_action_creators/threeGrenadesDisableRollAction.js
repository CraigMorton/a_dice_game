const threeGrenadesDisableRollAction = (grenadeCount) => {
  if (grenadeCount >= 3) return {type: "THREE_GRENADES_DISABLE_ROLL", grenadeCount: grenadeCount}
}

export default threeGrenadesDisableRollAction;