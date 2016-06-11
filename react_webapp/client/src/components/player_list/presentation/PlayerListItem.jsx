import React from "react";

const PlayerListItem = ({
  listener,
  isTargetted,
  id,
  health,
  maxHealth,
  sharedResource
}) => {
  return(
    <div onClick={listener} id={id}
    style={{backgroundColor: isTargetted ? "tomato" : "skyblue"}}
    >
    <p id={id}>Player ID: {id}</p>
    <p id={id}>Health: {health}/{maxHealth}</p>
    <p id={id}>Arrows: {sharedResource}</p>
    </div>)
}

export default PlayerListItem;