import React from "react";
// import DiceContainer from "./dice/DiceContainer.jsx";
// import StatsContainer from "./stats/StatsContainer.jsx";
import {CurrentPlayerContainer, DiceContainer, PlayerInfoContainer, PlayerListContainer, SettingsContainer, SharedResourceContainer, StatsContainer} from "../exports.js";

// import api from "../models/jsonApiHelper";

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

const AppContainer = ({
  store,
  state,
  listeners
})=>(
      <div>
        <DiceContainer state={state.dice} listeners={listeners.dice}/>
        <StatsContainer state={state.stats} listeners={listeners.stats}/>
      </div>
    )

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

export {AppContainer};
// module.exports = AppContainer;

// const listeners = {
//   onRollClick: () => {
//     store.dispatch({type: "INCREMENT_DICE_ROLLED_COUNTER"})
//   }
// }

// store.dispatch({type:"ATTACH_LISTENERS", listeners: listeners})