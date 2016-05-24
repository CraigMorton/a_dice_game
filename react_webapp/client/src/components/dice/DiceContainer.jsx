var React = require('react');
var DiceList = require("./presentation/DiceList.jsx");
const RollDiceButton = require("./presentation/RollDiceButton.jsx");

// var DiceContainer = React.createClass({
//   contextTypes: {store: React.PropTypes.object},
//   render: function(){
//     // destructuring objects syntax
//     // {keyNameInSourceObject: variableNameToCreate} = sourceObject;
//     const {store: store} = this.context;
//     const {dice: state} = store.getState();
//     // const {dice: listeners} = this.props.listeners;
//     const listeners = this.props.listeners;
//     return(
//       <div>
//         <DiceList
//         numDice={state.numDice}
//         listeners={this.props.listeners}
//         />
//         <RollDiceButton
//         onClick={this.props.listeners.dice.onRollDiceClick}
//         label={"Roll Dice"}
//         enabled={true}
//         />
//       </div>
//     );
//   }
// })

const DiceContainer = ({
  state,
  listeners
})=>(
  <div>
  <DiceList
  state={state.numDice}
  // listeners={this.props.listeners}
  />
  <RollDiceButton
  onClick={listeners.onRollDiceClick}
  label={"Roll Dice"}
  enabled={true}
  />
  </div>
  )

// module.exports = DiceContainer;
export {DiceContainer};