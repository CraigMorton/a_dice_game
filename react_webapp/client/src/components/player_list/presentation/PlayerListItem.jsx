import React from "react";

const PlayerListItem = ({
  onTarget,
  onShootTarget,
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
  let actionUsed = null;
  let healAction = null;
  if (isTargetted && isInRange.one && currentPlayerActionCounters[1] > 0) actionUsed = 1;
  if (isTargetted && isInRange.two && currentPlayerActionCounters[2] > 0) actionUsed = 2;
  if (isTargetted && currentPlayerActionCounters[3] > 0) healAction = 3;
  if (actionUsed === 1 || actionUsed === 2) shootButton = (<button id={actionUsed} onClick={onShootTarget}>Shoot!</button>);
  if (actionUsed === 3) healButton = (<button id={healAction} key={stateIndex} onClick={null}>Heal</button>);
  // , border: isTargetted ? "4px solid tomato" : null
  return(
    <div onClick={isDead ? null : onTarget} id={id}
    style={{backgroundColor: colour}}
    >
    <p id={id}>Player ID: {id}</p>
    <p id={id}>Health: {health}/{maxHealth}</p>
    <p id={id}>Arrows: {sharedResource}</p>
    {shootButton}
    </div>)
}

export default PlayerListItem;