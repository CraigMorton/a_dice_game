import React from "react";

const PlayerListItem = ({
  listener,
  isTargetted,
  isCurrentPlayer,
  isDead,
  id,
  health,
  maxHealth,
  sharedResource
}) => {
  let colour = "skyblue";
  if (isDead) colour = "grey";
  if (isCurrentPlayer) colour = "limegreen";
  if (isTargetted) colour = "tomato";
  // , border: isTargetted ? "4px solid tomato" : null
  return(
    <div onClick={isDead ? null : listener} id={id}
    style={{backgroundColor: colour}}
    >
    <p id={id}>Player ID: {id}</p>
    <p id={id}>Health: {health}/{maxHealth}</p>
    <p id={id}>Arrows: {sharedResource}</p>
    </div>)
}

export default PlayerListItem;