import React from "react";
import CurrentPlayerContainer from "./current_player/CurrentPlayerContainer.jsx";
import GameInfoContainer from "./game_info/GameInfoContainer.jsx";
import PlayerListContainer from "./player_list/PlayerListContainer.jsx";
import SettingsContainer from "./settings/SettingsContainer.jsx";

const AppContainer =  ({
  state,
  listeners
}) => {
  return (
  <div>
      <CurrentPlayerContainer state={state.currentPlayer} listeners={listeners.currentPlayer} playerListItem={state.playerList[0]}/>
      <GameInfoContainer state={state.gameInfo} listeners={listeners.gameInfo}/>
      <PlayerListContainer state={state.playerList} listeners={listeners.playerList} currentPlayerTargetId={state.currentPlayer.targettedPlayerId} currentPlayerActionCounters={state.currentPlayer.actionCounters}/>
      <SettingsContainer state={state.settings} listeners={listeners.settings} settingsDisabled={(state.gameInfo.diceRolledCount > 0)}/>
  </div>
  )
}

export default AppContainer;

// // es5 version for demonstration purposes:
// // //////////////////////////////////////////////////// //////////////////////////////////////////////////

// // This may not actually work as I believe named parameters may be necessary to allow react to pass in the props to your pure function style react component successfully, however I'm not certain

// var React = require("react");
// var DiceContainer = require("./dice/DiceContainer.jsx").DiceContainer;

// var AppContainer = function(state, listeners){
//   return (
//     <div>
//         <DiceContainer state={state.dice} listeners={listeners.dice}/>
//     </div>
//   )
// }

// module.exports = AppContainer;


// // React.createClass version for demonstration purposes:
// // //////////////////////////////////////////////////// //////////////////////////////////////////////////

// var React = require('react');
// var DiceContainer = require("./dice/DiceContainer.jsx").DiceContainer;

// var AppContainer = React.createClass({
//   render: function(){
//     return(
//       <div>
//         <DiceContainer state={this.props.state.dice} listeners={this.props.listeners.dice}/>
//       </div>
//     );
//   }
// })

// module.exports = AppContainer;