import React from "react";

const PlayerListItem = ({
  onTarget,
  onActivateActionOnTarget,
  isTargetted,
  isInRange,
  isCurrentPlayer,
  isDead,
  id,
  health,
  maxHealth,
  sharedResource,
  stateIndex,
  currentPlayerActionCounters
}) => {
  let shootButton = null;
  let healButton = null
  let colour = "skyblue";
  if (isDead) colour = "grey";
  if (isCurrentPlayer) colour = "limegreen";
  if (isTargetted) colour = "tomato";
  let shootAction = null;
  let healAction = null;
  if (!isCurrentPlayer && isTargetted && isInRange.one && currentPlayerActionCounters[1] > 0) shootAction = 1;
  if (!isCurrentPlayer && isTargetted && isInRange.two && currentPlayerActionCounters[2] > 0) shootAction = 2;
  if (isTargetted && currentPlayerActionCounters[3] > 0) healAction = 3;
  if (shootAction === 1 || shootAction === 2) shootButton = (<button id={shootAction} onClick={onActivateActionOnTarget}>Shoot!</button>);
  if (healAction === 3) healButton = (<button id={healAction} key={stateIndex} onClick={onActivateActionOnTarget}>Heal</button>);
  return(
    <div style={{backgroundColor: colour}} id={id}>
    <div onClick={isDead ? null : onTarget} id={id}>
    <p id={id}>Player ID: {id}</p>
    <p id={id}>Health: {health}/{maxHealth}</p>
    <p id={id}>Arrows: {sharedResource}</p>
    </div>
    {shootButton}
    {healButton}
    </div>)
}

export default PlayerListItem;