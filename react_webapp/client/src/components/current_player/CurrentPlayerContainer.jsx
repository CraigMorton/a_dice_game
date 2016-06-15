import React from "react";
import CurrentPlayerActionCounters from "./presentation/CurrentPlayerActionCounters.jsx";
import CurrentPlayerHealth from "./presentation/CurrentPlayerHealth.jsx";
import CurrentPlayerSharedResource from "./presentation/CurrentPlayerSharedResource.jsx";
import EndTurnButton from "./presentation/EndTurnButton.jsx";
import DiceList from "./presentation/DiceList.jsx";
import RollDiceButton from "./presentation/RollDiceButton.jsx";
import CurrentPlayerTarget from "./presentation/CurrentPlayerTarget.jsx";

const CurrentPlayerContainer = ({
  state,
  listeners,
  playerListItem
}) => {
  return(
    <div className="react-container">
    <text>Player ID: {playerListItem.player_id}</text>
    <CurrentPlayerHealth health={playerListItem.health} maxHealth={playerListItem.maxHealth}/>
    <CurrentPlayerSharedResource count={playerListItem.sharedResource} />
    <CurrentPlayerActionCounters actions={state.actionCounters}/>
    <CurrentPlayerTarget id={state.targettedPlayerId}/>
    <DiceList
    diceArray={state.dice}
    onDieClick={listeners.onDieClick}
    onDieValueChange={listeners.onDieValueChange}
    />
    <RollDiceButton
    listener={listeners.onRollDiceClick}
    label={"Roll Dice"}
    enabled={state.canRoll}
    />
    <EndTurnButton label={"End Turn"} enabled={!state.canRoll} listener={listeners.onEndTurnClick}/>
    </div>
    )
}

export default CurrentPlayerContainer;