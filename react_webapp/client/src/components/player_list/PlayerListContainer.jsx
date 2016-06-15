import React from "react";
import PlayerListItem from "./presentation/PlayerListItem.jsx";

const PlayerListContainer = ({
  state,
  listeners,
  currentPlayerTargetId,
  currentPlayerActionCounters
}) => {
  let playerListItems = [];
  state.forEach((player, index) => {
    const id = player.player_id
    const distance = (index)
    const isInRange = {}
    isInRange.one = (index === 1 || index === state.length - 1);
    isInRange.two = (index === 2 || index === state.length - 2);
    const isTargetted = (currentPlayerTargetId === id);
    const isCurrentPlayer = (id === state[0].player_id)
    playerListItems[id] = (<PlayerListItem id={id} key={id} stateIndex={index} isTargetted={isTargetted} isCurrentPlayer={isCurrentPlayer} health={player.health} maxHealth={player.maxHealth} sharedResource={player.sharedResource} onTarget={listeners.onTargetSelect} onShootTarget={listeners.onShootTarget} isDead={player.isDead} isInRange={isInRange} currentPlayerActionCounters={currentPlayerActionCounters}/>)
  // const playerListItems = state.map((player) => {
  //   const isTargetted = (currentPlayerTargetId === player.player_id);
  //   const isCurrentPlayer = (player.player_id === state[0].player_id)
  //   return (<PlayerListItem id={player.player_id} key={player.player_id} isTargetted={isTargetted} isCurrentPlayer={isCurrentPlayer} health={player.health} maxHealth={player.maxHealth} sharedResource={player.sharedResource} listener={listeners.onTargetSelect} onClick={listeners.onTargetSelect}/>)
  });
  return(
    <div className="react-container">
    {playerListItems}
    </div>
    )
}

export default PlayerListContainer;