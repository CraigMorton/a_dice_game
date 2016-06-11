import React from "react";
import PlayerListItem from "./presentation/PlayerListItem.jsx";

const PlayerListContainer = ({
  state,
  listeners,
  currentPlayerTargetId
}) => {
  const playerListItems = state.map((player) => {
    const isTargetted = (currentPlayerTargetId === player.player_id);
    return (<PlayerListItem id={player.player_id} key={player.player_id} isTargetted={isTargetted} health={player.health} maxHealth={player.maxHealth} sharedResource={player.sharedResource} listener={listeners.onTargetSelect} onClick={listeners.onTargetSelect}/>)
  });
  return(
    <div className="react-container">
    <h5>PlayerListContainer</h5>
    {playerListItems}
    </div>
    )
}

export default PlayerListContainer;