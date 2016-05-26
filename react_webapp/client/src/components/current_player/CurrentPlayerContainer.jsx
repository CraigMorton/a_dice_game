import React from "react";
import {CurrentPlayerActionCounters} from "./presentation/CurrentPlayerActionCounters.jsx";
import {CurrentPlayerHealth} from "./presentation/CurrentPlayerHealth.jsx";
import {CurrentPlayerSharedResource} from "./presentation/CurrentPlayerSharedResource.jsx";
import {EndTurnButton} from "./presentation/EndTurnButton.jsx";

const CurrentPlayerContainer = ({
  state,
  listeners,
  canRoll
}) => {
  return(
    <div className="react-container">
    <h5>CurrentPlayerContainer</h5>
    <text>Player ID: {state.player_id}</text>
    <CurrentPlayerHealth health={state.health} maxHealth={state.maxHealth}/>
    <CurrentPlayerSharedResource count={state.sharedResource} />
    <CurrentPlayerActionCounters actions={state.actionCounters}/>
    <EndTurnButton label={"End Turn"} enabled={!canRoll} listener={listeners.onEndTurnClick}/>
    </div>
    )
}

export {CurrentPlayerContainer};