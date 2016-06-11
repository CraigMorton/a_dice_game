import React from "react";

const DiceList = ({
diceArray,
onDieClick
}) => {
  const diceElementsArray = diceArray.map((item, index) => (<li
    id={index}
    key={index}
    value={item.value}
    onClick={(item.value !== 0 && item.value !== 5) ? onDieClick : null}
    style={{backgroundColor: (item.saved) ? "cyan" : "orange"}}
    >die value: {item.value}
    </li>));
  return(
    <ul>
    {diceElementsArray}
    </ul>
  )
}

export default DiceList;


// var React = require('react');

// var DiceList = React.createClass({
//   contextTypes: {store: React.PropTypes.object},
//   render: function(){
//     // destructuring objects syntax
//     // {keyNameInSourceObject: variableNameToCreate} = sourceObject;
//     const {store: store} = this.context;
//     const {dice: state} = store.getState();
//     // console.log(state);
//     var diceElementsArray = [];
//     for (let i = 0; i < state.numDice; i++){
//       diceElementsArray[i] = (<li key={i}><a key={i}>die #{i+1}</a></li>);
//     }
//     return(
//       <ul>
//       {diceElementsArray}
//       </ul>
//     );
//   }
// })


// store={store.getState()}
// listeners={listeners}

// module.exports = DiceList;