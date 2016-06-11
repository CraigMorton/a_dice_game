import React from "react";

const SettingsContainer = ({
  state,
  listeners,
  settingsDisabled
}) => {
  if (settingsDisabled) return null;
  return(
    <div className="react-container">
    <h5>Settings</h5>
    <label for="numPlayers">Number of Players (3-8):</label>
    <input type="number" id="numPlayers" disabled={settingsDisabled} onChange={listeners.onUpdateSetting} defaultValue={state.numPlayers} step="1" min="3" max="8"/>
    <label for="playerMaxHealth">Each Player's Max Health:</label>
    <input type="number" id="playerMaxHealth" disabled={settingsDisabled} onChange={listeners.onUpdateSetting} defaultValue={state.playerMaxHealth} step="1" min="1" max="100"/>
    <label for="numDice">Number of Dice:</label>
    <input type="number" id="numDice" disabled={settingsDisabled} onChange={listeners.onUpdateSetting} defaultValue={state.numDice} step="1" min="1" max="25"/>
    <label for="sharedResourceMax">Arrow Pile Total Size:</label>
    <input type="number" id="sharedResourceMax" disabled={settingsDisabled} onChange={listeners.onUpdateSetting} defaultValue={state.sharedResourceMax} step="1" min="0" max="100"/>
    </div>
  )
}

export default SettingsContainer;