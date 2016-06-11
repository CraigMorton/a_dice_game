import React from "react";
import PlayerListItem from "./presentation/PlayerListItem.jsx";

const PlayerListContainer = ({
  state,
  listeners,
  currentPlayerTargetId
}) => {
  let playerListItems = [];
  for (let i = 0; i < state.length; i++){
    let isTargetted = (currentPlayerTargetId === state[i].player_id)
    playerListItems.push(<PlayerListItem id={state[i].player_id} key={state[i].player_id} isTargetted={isTargetted} health={state[i].health} maxHealth={state[i].maxHealth} sharedResource={state[i].sharedResource} listener={listeners.onTargetSelect} onClick={listeners.onTargetSelect}/>)
  }
  return(
    <div className="react-container">
    <h5>PlayerListContainer</h5>
    {playerListItems}
    </div>
    )
}

export default PlayerListContainer;