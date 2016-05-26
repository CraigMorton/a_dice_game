import React from "react";
import {CurrentPlayerContainer, DiceContainer, PlayerInfoContainer, PlayerListContainer, SettingsContainer, SharedResourceContainer, StatsContainer} from "../exports.js";
// import {CurrentPlayerContainer} from "./current_player/CurrentPlayerContainer.jsx";
// import {DiceContainer} from "./dice/DiceContainer.jsx";
// import {PlayerInfoContainer} from "./player_info/PlayerInfoContainer.jsx";
// import {PlayerListContainer} from "./player_list/PlayerListContainer.jsx";
// import {SettingsContainer} from "./settings/SettingsContainer.jsx";
// import {SharedResourceContainer} from "./shared_resource/SharedResourceContainer.jsx";
// import {StatsContainer} from "./stats/StatsContainer.jsx";

// componentWillMount: () => {
//   // API REQUEST HERE
// }

const AppContainer = ({
  state,
  listeners
}) => (
  <div>
      <CurrentPlayerContainer state={state.currentPlayer} listeners={listeners.currentPlayer} canRoll={state.dice.canRoll}/>
      <DiceContainer state={state.dice} listeners={listeners.dice}/>
      <PlayerInfoContainer state={state.playerInfo} listeners={listeners.playerInfo}/>
      <PlayerListContainer state={state.playerList} listeners={listeners.playerList}/>
      <SettingsContainer state={state.settings} listeners={listeners.settings}/>
      <SharedResourceContainer state={state.sharedResource} listeners={listeners.sharedResource}/>
      <StatsContainer state={state.stats} listeners={listeners.stats}/>
  </div>
  )

export {AppContainer};

// es5 version for demonstration purposes:
// //////////////////////////////////////////////////// //////////////////////////////////////////////////

// This may not actually work as I believe named parameters may be necessary to allow react to pass in the props to your pure function style react component successfully, however I'm not certain

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


// React full class version for demonstration purposes:
// //////////////////////////////////////////////////// //////////////////////////////////////////////////

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

//examples above - old versions for notation purposes below.
// //////////////////////////////////////////////////// //////////////////////////////////////////////////
// //////////////////////////////////////////////////// //////////////////////////////////////////////////
// //////////////////////////////////////////////////// //////////////////////////////////////////////////

// import api from "../models/jsonApiHelper";

// import DiceContainer from "./dice/DiceContainer.jsx";
// import StatsContainer from "./stats/StatsContainer.jsx";

// problems with import/exports in ../exports.js made me try this - turns out this wasn't the problem:
// const CurrentPlayerContainer = require("../exports.js").CurrentPlayerContainer;
// const DiceContainer = require("../exports.js").DiceContainer;
// const PlayerInfoContainer = require("../exports.js").PlayerInfoContainer;
// const PlayerListContainer = require("../exports.js").PlayerListContainer;
// const SettingsContainer = require("../exports.js").SettingsContainer;
// const SharedResourceContainer = require("../exports.js").SharedResourceContainer;
// const StatsContainer = require("../exports.js").StatsContainer;


// const connect = require("react-redux").connect;

// var AppContainer = React.createClass({
//   render: function(){
//     console.log(this.props.store);
//     return (
//       <div>
//         <h3>a dice game</h3>
//         <DiceContainer diceData={this.props.store.dice}/>
//         <StatsContainer statsData={this.props.store.stats}/>
//       </div>
//       );
//   },
//   getInitialState: function(){
//     return {};
//   },
//   getDefaultProps: function(){
//     return {};
//   }
// });

// var AppContainer = React.createClass({
//   contextTypes: {store: React.PropTypes.object},
//   render: function(){


//   // var oldSyntaxStore = this.context.store;
//   // console.log(oldSyntaxStore);
//   const {store: store} = this.context;
//   // console.log(store);
//   const state = store.getState();
//   // console.log(store);
//     return(
//       <div>
//         <DiceContainer diceData={state.dice} listeners={this.props.listeners.dice}/>
//         <StatsContainer statsData={state.stats} listeners={this.props.listeners.stats}/>
//       </div>
//     );
//   }
// })


// AppContainer.contextTypes = {
//   store: React.PropTypes.object
// }

// const AppContainer = () => {
//   console.log(this)
//   console.log(props)
//   return (
//   <div>
//     <h3>a dice game</h3>
//     <DiceContainer diceData={this.props.store.dice}/>
//     <StatsContainer statsData={this.props.store.stats}/>
//   </div>
//   )
// }
// module.exports = AppContainer;

// const listeners = {
//   onRollClick: () => {
//     store.dispatch({type: "INCREMENT_DICE_ROLLED_COUNTER"})
//   }
// }

// store.dispatch({type:"ATTACH_LISTENERS", listeners: listeners})