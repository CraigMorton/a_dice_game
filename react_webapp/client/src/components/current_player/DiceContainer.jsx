import React from "react";
import {DiceList} from "./presentation/DiceList.jsx";
import {RollDiceButton} from "./presentation/RollDiceButton.jsx";

const DiceContainer = ({
  state,
  listeners
}) => {
  return(
    <div className="react-container">
    <h5>DiceContainer</h5>
    <DiceList
    diceArray={state.diceArray}
    onDieClick={listeners.onDieClick}
    onDieValueChange={listeners.onDieValueChange}
    />
    <RollDiceButton
    listener={listeners.onRollDiceClick}
    label={"Roll Dice"}
    enabled={state.canRoll}
    />
    </div>
    )
}

export {DiceContainer};


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



// module.exports = DiceContainer;